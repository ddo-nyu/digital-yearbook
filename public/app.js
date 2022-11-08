const socket = io();

socket.on('show element', function(params) {
    console.log(params);
    // if (params.text) {
    //     const newText = $('<span class="emitted_text">').text(params.text)
    //         .css({
    //             top: params.x,
    //             left: params.y,
    //         });
    //     $('#yearbook').append(newText);
    // }
});

$(window).ready(function () {
  const pages = $("#yearbook .page");
  pages.each((i, page) => {
    if (i !== 0 && i !== pages.length - 1) {
      $(page).append($('<div class="page_number">').text(i));
    }
    if (i % 2 === 0) {
      $(page).addClass("right_page");
    } else {
      $(page).addClass("left_page");
    }
  });
  $("#yearbook").turn({
    display: "double",
    acceleration: true,
    gradients: !$.isTouch,
    elevation: 50,
    when: {
      turned: function (e, page) {
        /*console.log('Current view: ', $(this).turn('view'));*/
      },
    },
  });
});

$(window).bind("keydown", function (e) {
  if (e.keyCode == 37) $("#yearbook").turn("previous");
  else if (e.keyCode == 39) $("#yearbook").turn("next");
});

$(".toolbar_option").click((e) => {
  const optionType = $(e.currentTarget).attr("type");
  switch (optionType) {
    case "add_text":
      $("#yearbook").append(
        $('<span class="draggable_text">').text("new text")
      );
      $(".draggable_text").draggable({
        drag: function (event, ui) {
          console.log(`position: x=${ui.position.left} y=${ui.position.top}`);
          // emit to socket here
        },
      });
      $(".draggable_text").dblclick((e) => {
        $(e.currentTarget).attr("contenteditable", true);
      });
      break;
    default:
      break;
  }
});

document.querySelectorAll(".class_photo").forEach((item) => {
  item.addEventListener("click", () => {
    console.log("clicked on an image", item.id);
    let selector = "div#" + item.id;
    let imagePlaceholder = document.querySelector(selector);
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
                  var animatedImage = document.createElement("img");
                  animatedImage.src = obj.image;
                  imagePlaceholder.appendChild(animatedImage);
                  video.remove();
                  countdown.remove();
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

$('.toolbar_option').click((e) => {
    const optionType = $(e.currentTarget).attr('type');
    switch (optionType) {
        case 'add_text':
            const id =  Math.random().toString(16).slice(2);
            const newTextInput = $('<span class="draggable_text" contenteditable>New Text</span>')
                // .on({
                //     focus: function() {
                //         if (!$(this).data('disabled')) this.blur()
                //     },
                //     focusout: function(){
                //         const element = $(this);
                //         if (!element.text().trim().length) {
                //             element.empty();
                //         }
                //     },
                //     click: function() {
                //         $(this).preventDefault();
                //     },
                //     dblclick: function() {
                //         $(this).data('disabled', true);
                //         this.focus()
                //     },
                //     blur: function() {
                //         $(this).data('disabled', false);
                //     }
                // })
                .draggable({
                    drag: function(e, ui) {
                        socket.emit('place element', {
                            id,
                            text: $(ui.helper).text(),
                            x: ui.position.left,
                            y: ui.position.top
                        });
                    }
                });
            $('#yearbook').append(newTextInput);
            break;
        default:
            break;
    }
});
