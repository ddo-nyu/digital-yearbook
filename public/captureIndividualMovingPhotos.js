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
        // downloadButton.href = stream;
        preview.captureStream =
          preview.captureStream || preview.mozCaptureStream;
        return new Promise((resolve) => (preview.onplaying = resolve));
      })
      .then(() => startRecording(preview.captureStream(), recordingTimeMS))
      .then((recordedChunks) => {
        let recordedBlob = new Blob(recordedChunks, { type: "video/mp4" });
        console.log(recordedBlob);

        recording.src = URL.createObjectURL(recordedBlob);
        recording.autoplay = true;

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

downloadButton.addEventListener("click", (e) => {
  console.log("download clicked");
});

let vidHeight;
let vidWidth;
let bitmapCanvas = document.createElement("canvas");
let encoder;

recording.addEventListener("play", () => {
  recording.autoplay = false;
  vidHeight = recording.videoHeight;
  vidWidth = recording.videoWidth;

  encoder = new GIFEncoder(vidWidth, vidHeight);
  encoder.setRepeat(0);
  encoder.setDelay(500);

  bitmapCanvas.setAttribute("id", "bitmap");
  bitmapCanvas.setAttribute("width", vidWidth);
  bitmapCanvas.setAttribute("height", vidHeight);
  document.getElementById("hiddenCanvas").appendChild(bitmapCanvas);

  const bitmapCtx = bitmapCanvas.getContext("2d");
  recording.muted = true;
  recording.loop = false;
  recording.autoplay = true;
  const background = () => {
    bitmapCtx.fillStyle = "#FFFFFF";
    bitmapCtx.fillRect(0, 0, vidWidth, vidHeight);
  };

  const step = async () => {
    await background();
    await new Promise((resolve) => {
      bitmapCtx.drawImage(recording, 0, 0, vidWidth, vidHeight);
      frameB64Str = bitmapCanvas.toDataURL();
      encoder.addFrame(bitmapCtx);
      resolve();
    });
    window.requestAnimationFrame(step);
  };
  encoder.start();
  step();
  window.requestAnimationFrame(step);
});

recording.addEventListener("ended", () => {
  encoder.finish();

  let fileType = "image/gif";
  let fileName = `gif-output-${new Date()
    .toGMTString()
    .replace(/(\s|,|:)/g, "")}.gif`;
  let readableStream = encoder.stream();
  let binaryGif = readableStream.getData();
  var b64Str = "data:" + fileType + ";base64," + encode64(binaryGif);

  downloadButton.href = b64Str;
  downloadButton.download = "ee.gif";
});

function encode64(input) {
  var output = "",
    i = 0,
    l = input.length,
    key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    chr1,
    chr2,
    chr3,
    enc1,
    enc2,
    enc3,
    enc4;
  while (i < l) {
    chr1 = input.charCodeAt(i++);

    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;
    if (isNaN(chr2)) enc3 = enc4 = 64;
    else if (isNaN(chr3)) enc4 = 64;
    output =
      output +
      key.charAt(enc1) +
      key.charAt(enc2) +
      key.charAt(enc3) +
      key.charAt(enc4);
  }
  return output;
}

// used this for converting the webm to gif: https://javascript.plainenglish.io/how-to-convert-a-video-clip-to-a-gif-file-with-client-side-javascript-56575d093191

/* resources: 

* https://web.dev/media-recording-video/
* https://web.dev/getusermedia-intro/
* https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
* https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream
* this was the one that I had the most success with: https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element
*/
