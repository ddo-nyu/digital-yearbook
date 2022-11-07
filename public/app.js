// var socket = io();

// var messages = document.getElementById('messages');
// var form = document.getElementById('form');
// var input = document.getElementById('input');

//example
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     if (input.value) {
//         socket.emit('chat message', input.value);
//         input.value = '';
//     }
// });

//example
// socket.on('chat message', function(msg) {
//     var item = document.createElement('li');
//     item.textContent = msg;
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight);
// });

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

    gifshot.createGIF(
      {
        gifWidth: imagePlaceholder.clientWidth,
        gifHeight: imagePlaceholder.clientHeight,
      },
      function (obj) {
        if (!obj.error) {
          var image = obj.image;
          var animatedImage = document.createElement("img");
          animatedImage.src = image;
          imagePlaceholder.appendChild(animatedImage);
        }
      }
    );
  });
});
