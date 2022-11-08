// socket events
const socket = io();
socket.on('all elements', function (elements) {
    Object.values(elements).forEach((element) => {
        const el = $(`#${element.id}`);
        if ($('#yearbook').turn('view').toString() === element.pageView) {
            if (el.length > 0) {
                el
                    .text(element.content)
                    .css({top: element.top + 'px', left: element.left + 'px'});
            } else {
                const newEl = $(`<span id="${element.id}" class="emitted_text"></span>`)
                    .text(element.content)
                    .css({top: element.top + 'px', left: element.left + 'px'});
                $('#droppable_area').append(newEl);
            }
        }
    });
});

// init turnjs
$(window).ready(function () {
    const pages = $("#yearbook .page");
    pages.each((i, page) => {
        if (i !== 0 && i !== pages.length - 1) {
            $(page).append($('<div class="page_number">').text(i));
        }
        $(page).addClass(i % 2 === 0 ? "right_page" : "left_page");
        $(page).attr('index', i);
    });
    $("#yearbook").turn({
        display: "double",
        duration: 1000,
        acceleration: true,
        gradients: !$.isTouch,
        elevation: 100,
        when: {
            turned: function (e, page) {
                socket.emit('get all elements');
            },
        },
    });
    socket.emit('get all elements');
});

// events
const saveGif = (id, dataUri) => {
  const gifBody = JSON.stringify({
    id,
    dataUri,
  });
  fetch("/saveGif", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: gifBody,
  }).then((data) => {
    if (data.status !== 200) {
      console.log("something went wrong with saving the gif");
    }
  });
};

$(window).ready(() => {
  $(".class_photo").click((e) => {
    const item = e.currentTarget;
    console.log("clicked on an image", item.id);
    let imagePlaceholder = document.querySelector(`div#${item.id}`);
    const video = imagePlaceholder.querySelector("video");
    const countdown = imagePlaceholder.querySelector(".countdown");

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
          return stream;
        })
        .then((stream) => {
          var timeleft = 5;
          var timer = setInterval(function () {
            if (timeleft <= 0) {
              clearInterval(timer);
            } else {
              countdown.innerHTML = timeleft;
            }
            timeleft -= 1;
          }, 1000);

          setTimeout(() => {
            console.log("creating the gif");
            gifshot.createGIF(
              {
                cameraStream: stream,
                gifWidth: imagePlaceholder.clientWidth,
                gifHeight: imagePlaceholder.clientHeight,
              },
              function (obj) {
                if (!obj.error) {
                  const animatedImage = document.createElement("img");
                  animatedImage.src = obj.image;
                  imagePlaceholder.appendChild(animatedImage);
                  video.remove();
                  countdown.remove();
                  saveGif(item.id, obj.image);
                }
              }
            );
          }, 5000);
        })
        .catch(function (error) {
          console.log("Error", error);
          console.log("Something went wrong!");
        });
    }
  });
});

const getAllGifs = () => {
  fetch("/getAllGifs")
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((element) => {
        const elementSelector = `#${element.htmlId}`;
        //show the image from the db
        const img = $("<img>");
        img.attr("src", element.dataUri);
        img.appendTo(elementSelector);

        //remove the video element
        $(`${elementSelector} video`).remove();
      });
    });
};

$(window).ready(() => {
  getAllGifs();
});

$(window).bind("keydown", function (e) {
    if (e.keyCode === 37 || e.keyCode === 39) {
        $('#droppable_area').empty();

        if (e.keyCode == 37) {
            $("#yearbook").turn("previous")
        }
        else if (e.keyCode == 39) {
            $("#yearbook").turn("next");
        }
    }
});

$('.toolbar_option[type="add_text"]').click((e) => {
    const id = Math.random().toString(16).slice(2);
    const newTextInput = $(`<span id="${id}" class="draggable_text" contenteditable="">New Text</span>`)
        .draggable({
            drag: function (e, ui) {
                socket.emit('place element', {
                    id,
                    pageView: $('#yearbook').turn('view').toString(),
                    content: $(ui.helper).text(),
                    left: ui.position.left,
                    top: ui.position.top
                });
            },
        });

    $('#droppable_area').append(newTextInput);
});

