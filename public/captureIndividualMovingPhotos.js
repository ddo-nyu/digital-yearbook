// // This file is mostly based on https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element

let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

let recordingTimeMS = 5000;
function log(msg) {
  logElement.innerHTML += `${msg}\n`;
}
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream);
  let data = [];

  recorder.ondataavailable = (event) => data.push(event.data);
  recorder.start();
  log(`${recorder.state} for ${lengthInMS / 1000} seconds…`);

  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve;
    recorder.onerror = (event) => reject(event.name);
  });

  let recorded = wait(lengthInMS).then(() => {
    if (recorder.state === "recording") {
      recorder.stop();
    }
  });

  return Promise.all([stopped, recorded]).then(() => data);
}
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
startButton.addEventListener(
  "click",
  () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        preview.srcObject = stream;
        downloadButton.href = stream;
        preview.captureStream =
          preview.captureStream || preview.mozCaptureStream;
        return new Promise((resolve) => (preview.onplaying = resolve));
      })
      .then(() => startRecording(preview.captureStream(), recordingTimeMS))
      .then((recordedChunks) => {
        let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
        recording.src = URL.createObjectURL(recordedBlob);
        downloadButton.href = recording.src;
        downloadButton.download = "RecordedVideo.webm";

        log(
          `Successfully recorded ${recordedBlob.size} bytes of ${recordedBlob.type} media.`
        );
      })
      .catch((error) => {
        if (error.name === "NotFoundError") {
          log("Camera or microphone not found. Can't record.");
        } else {
          log(error);
        }
      });
  },
  false
);
stopButton.addEventListener(
  "click",
  () => {
    stop(preview.srcObject);
  },
  false
);

/* resources: 

* https://web.dev/media-recording-video/
* https://web.dev/getusermedia-intro/
* https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
* https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API
* this was the one that I had the most success with: https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element
*/