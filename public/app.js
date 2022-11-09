const pageLayouts = [
    {
        render: () => {
            return `<div class="content"></div>`;
        },
        callback: () => {},
    },
    {
        // cover
        render: () => {
            return `<div class="content"></div>`;
        },
        callback: () => {},
    },
    {
        // page 1
        render: () => {
            return `<div class="content"></div>`;
        },
        callback: () => {},
    },
    {
        // page 2
        render: () => {
            return `<div class="content">
                <h1>Welcome to your digital yearbook!</h1>
            </div>`;
        },
        callback: () => {},
    },
    {
        // page 3
        render: () => {
            return `<div class="content">
                <h1>Class of</h1>
                  <div class="class_photos">
                    <div id="class_photo_1" class="class_photo left_page">
                      <div class="icon">
                        <img src="images/icons/camera.png" />
                      </div>
                      <video autoplay="true"></video>
                      <div class="countdown"></div>
                    </div>
                    <div id="class_photo_2" class="class_photo left_page">
                      <div class="icon">
                        <img src="images/icons/camera.png" />
                      </div>
                      <video autoplay="true"></video>
                      <div class="countdown"></div>
                    </div>
                    <div id="class_photo_3" class="class_photo left_page">
                      <div class="icon">
                        <img src="images/icons/camera.png" />
                      </div>
                      <video autoplay="true"></video>
                      <div class="countdown"></div>
                    </div>
                    <div id="class_photo_4" class="class_photo left_page">
                      <div class="icon">
                        <img src="images/icons/camera.png" />
                      </div>
                      <video autoplay="true"></video>
                      <div class="countdown"></div>
                    </div>
                    <div id="class_photo_5" class="class_photo left_page">
                      <div class="icon">
                        <img src="images/icons/camera.png" />
                      </div>
                      <video autoplay="true"></video>
                      <div class="countdown"></div>
                    </div>
                    <div id="class_photo_6" class="class_photo left_page">
                      <div class="icon">
                        <img src="images/icons/camera.png" />
                      </div>
                      <video autoplay="true"></video>
                      <div class="countdown"></div>
                    </div>
                    <div id="class_photo_7" class="class_photo left_page">
                      <div class="icon">
                        <img src="images/icons/camera.png" />
                      </div>
                      <video autoplay="true"></video>
                      <div class="countdown"></div>
                    </div>
                    <div id="class_photo_8" class="class_photo left_page">
                      <div class="icon">
                        <img src="images/icons/camera.png" />
                      </div>
                      <video autoplay="true"></video>
                      <div class="countdown"></div>
                    </div>
                    <div id="class_photo_9" class="class_photo left_page">
                      <div class="icon">
                        <img src="images/icons/camera.png" />
                      </div>
                      <video autoplay="true"></video>
                      <div class="countdown"></div>
                    </div>
                    <div id="class_photo_10" class="class_photo left_page">
                      <div class="icon">
                        <img src="images/icons/camera.png" />
                      </div>
                      <video autoplay="true"></video>
                      <div class="countdown"></div>
                    </div>
                    <div id="class_photo_11" class="class_photo left_page">
                      <div class="icon">
                        <img src="images/icons/camera.png" />
                      </div>
                      <video autoplay="true"></video>
                      <div class="countdown"></div>
                    </div>
                    <div id="class_photo_12" class="class_photo left_page">
                      <div class="icon">
                        <img src="images/icons/camera.png" />
                      </div>
                      <video autoplay="true"></video>
                      <div class="countdown"></div>
                    </div>
                  </div>
                </div>`;
        },
        callback: () => {
            addClassPhotoClickEvents('left_page');
        },
    },
    {
        // page 4
        render: () => {
            return `<div class="content">
              <h1>2023</h1>
              <div class="class_photos">
                <div id="class_photo_13" class="class_photo right_page">
                  <div class="icon">
                    <img src="images/icons/camera.png" />
                  </div>
                  <video autoplay="true"></video>
                  <div class="countdown"></div>
                </div>
                <div id="class_photo_14" class="class_photo right_page">
                  <div class="icon">
                    <img src="images/icons/camera.png" />
                  </div>
                  <video autoplay="true"></video>
                  <div class="countdown"></div>
                </div>
                <div id="class_photo_15" class="class_photo right_page">
                  <div class="icon">
                    <img src="images/icons/camera.png" />
                  </div>
                  <video autoplay="true"></video>
                  <div class="countdown"></div>
                </div>
                <div id="class_photo_16" class="class_photo right_page">
                  <div class="icon">
                    <img src="images/icons/camera.png" />
                  </div>
                  <video autoplay="true"></video>
                  <div class="countdown"></div>
                </div>
                <div id="class_photo_17" class="class_photo right_page">
                  <div class="icon">
                    <img src="images/icons/camera.png" />
                  </div>
                  <video autoplay="true"></video>
                  <div class="countdown"></div>
                </div>
                <div id="class_photo_18" class="class_photo right_page">
                  <div class="icon">
                    <img src="images/icons/camera.png" />
                  </div>
                  <video autoplay="true"></video>
                  <div class="countdown"></div>
                </div>
                <div id="class_photo_19" class="class_photo right_page">
                  <div class="icon">
                    <img src="images/icons/camera.png" />
                  </div>
                  <video autoplay="true"></video>
                  <div class="countdown"></div>
                </div>
                <div id="class_photo_20" class="class_photo right_page">
                  <div class="icon">
                    <img src="images/icons/camera.png" />
                  </div>
                  <video autoplay="true"></video>
                  <div class="countdown"></div>
                </div>
                <div id="class_photo_21" class="class_photo right_page">
                  <div class="icon">
                    <img src="images/icons/camera.png" />
                  </div>
                  <video autoplay="true"></video>
                  <div class="countdown"></div>
                </div>
                <div id="class_photo_22" class="class_photo right_page">
                  <div class="icon">
                    <img src="images/icons/camera.png" />
                  </div>
                  <video autoplay="true"></video>
                  <div class="countdown"></div>
                </div>
                <div id="class_photo_23" class="class_photo right_page">
                  <div class="icon">
                    <img src="images/icons/camera.png" />
                  </div>
                  <video autoplay="true"></video>
                  <div class="countdown"></div>
                </div>
                <div id="class_photo_24" class="class_photo right_page">
                  <div class="icon">
                    <img src="images/icons/camera.png" />
                  </div>
                  <video autoplay="true"></video>
                  <div class="countdown"></div>
                </div>
              </div>
            </div>`;
        },
        callback: () => {
            addClassPhotoClickEvents('right_page');
        },
    },
    {
        render: () => {},
        callback: () => {},
    },
    {
        render: () => {},
        callback: () => {},
    },
];

const createdElements = {};

// socket events
const socket = io();
socket.on('all elements', function (elements) {
    Object.values(elements).forEach((element) => {
        updateElement(element);
    });
});

socket.on('show element', function (element) {
    updateElement(element);
});

function updateElement(element) {
    const el = $(`#${element.id}`);
    const type = element.element_type;
    if ($("#yearbook").turn("view").toString() === element.pageView) {
        if (el.length > 0) {
            switch (type) {
                case 'text':
                    el.text(element.content).css({
                        top: element.top + 'px',
                        left: element.left + 'px',
                    });
                    break;
                case 'sticker':
                default:
                    el.css({
                        top: element.top + 'px',
                        left: element.left + 'px',
                    });
                    break;
            }
        } else {
            let newEl;
            switch (type) {
                case 'text':
                    newEl = $(
                        `<span id="${element.id}" class="emitted_text"></span>`
                    )
                        .text(element.content)
                        .css({
                            top: element.top + 'px',
                            left: element.left + 'px',
                        });
                    break;
                case 'sticker':
                    newEl = $(
                        `<img id="${element.id}" src="images/stickers/${element.content}.gif" alt="${element.content}" class="sticker" />`
                    ).css({
                        top: element.top + 'px',
                        left: element.left + 'px',
                    });
                    break;
                default:
                    break;
            }

            $('#droppable_area').append(newEl);
        }
    }
}

socket.on('all gifs', (gifs) => {
    Object.values(gifs).forEach((gif) => {
        addGif(gif);
    });
});

socket.on('show gif', (gif) => {
    addGif(gif);
});

socket.on('received image placeholder in use', (placeholderId) => {
    console.log('imageplaceholder', placeholderId);
    const imagePlaceholder = document.querySelector(placeholderId);
    imagePlaceholderInUse(imagePlaceholder);
});

const addGif = (gif) => {
    const gifSelector = `#${gif.htmlId}`;

    // if the gif placeholder doesn't already have a gif image:
    // * add the image
    // * remove the video element
    if ($(`${gifSelector} img.gif`).length === 0) {
        //show the image from the db
        const img = $('<img>');
        img.attr('class', 'gif');
        img.attr('src', gif.dataUri);
        img.appendTo(gifSelector);

        $(`${gifSelector} .icon`).remove();
        $(`${gifSelector} video`).remove();
    }
};

// init turnjs
$(window).ready(function () {
    const pages = $('#yearbook .page');
    pages.each((i, page) => {
        if (i !== 0 && i !== pages.length - 1) {
            $(page).append($('<div class="page_number">').text(i));
        }
        $(page).addClass(i % 2 === 0 ? 'right_page' : 'left_page');
        $(page).attr('index', i);
    });
    $('#yearbook').turn({
        display: 'double',
        duration: 1000,
        acceleration: true,
        gradients: !$.isTouch,
        elevation: 100,
        when: {
            turned: function (e, page) {
                const currentView = $('#yearbook').turn('view');
                $('#droppable_area .layout').append(
                    pageLayouts[currentView[0]].render(),
                    pageLayouts[currentView[1]].render()
                );
                pageLayouts[currentView[0]].callback();
                pageLayouts[currentView[1]].callback();
                Object.values(createdElements)
                    .filter((el) => el.pageView === currentView.toString())
                    .forEach((el) => {
                        el.appendTo('#droppable_area');
                    })
                socket.emit("get all elements");
                socket.emit("get all gifs"); // FIXME: this should probalby only emitted for pages 3 and 4
            },
        },
    });
});

// events
const saveGif = (htmlId, dataUri) => {
    socket.emit('save gif', {
        htmlId,
        dataUri,
    });
};

$('.page_button.left').click(function (e) {
    $('#droppable_area').empty();
    $('#yearbook').turn('previous');
});

$('.page_button.right').click(function (e) {
    $('#droppable_area').empty();
    $('#yearbook').turn('next');
});

$('.toolbar_option[type="add_text"]').click((e) => {
    const id = Math.random().toString(16).slice(2);
    const inputEl = $('<input placeholder="Enter Text" />')
        .change((e) => {
            const pageView = $("#yearbook").turn("view").toString();
            const parent = $(e.currentTarget).parent();
            const val = $(e.currentTarget).val();
            const span = $(e.currentTarget).siblings('span')
            span.text(val).toggle();
            $(e.currentTarget).toggle();
            const params = {
                id,
                pageView,
                element_type: 'text',
                content: val,
                left: parent.position.left,
                top: parent.position.top,
            };
            socket.emit("update element", params);
            socket.emit("place element", params);
            createdElements[pageView][id] = parent;
        });
    const newTextInput = $(
        `<div class="draggable_text">`
    )
        .attr('id', id)
        .append($('<span>New Text</span>'))
        .append(inputEl)
        .on({
            dblclick: (e) => {
                $(e.currentTarget).children().toggle();
                $(e.currentTarget).children('input').focus();
            }
        })
        .draggable({
        drag: function (e, ui) {
            const pageView = $("#yearbook").turn("view").toString();
            socket.emit("place element", {
                id,
                pageView,
                element_type: 'text',
                content: $(ui.helper).text(),
                left: ui.position.left,
                top: ui.position.top,
            });
            createdElements[pageView][id].css({
                left: ui.position.left,
                top: ui.position.top,
            });
        },
        stop: function (e, ui) {
            const pageView = $("#yearbook").turn("view").toString();
            socket.emit("update element", {
                id,
                pageView,
                element_type: 'text',
                content: $(ui.helper).text(),
                left: ui.position.left,
                top: ui.position.top,
            });
            createdElements[pageView][id].css({
                left: ui.position.left,
                top: ui.position.top,
            });
        },
    });
    socket.emit('create element', {
        id,
        pageView: $('#yearbook').turn('view').toString(),
        element_type: 'text',
        content: newTextInput.text(),
        left: newTextInput.position().left,
        top: newTextInput.position().top,
    });
    $("#droppable_area").append(newTextInput);

    const pageView = $("#yearbook").turn("view").toString();
    if(createdElements[pageView]) {
        createdElements[pageView][id] = newTextInput;
    } else {
        createdElements[pageView] = {
            [id]: newTextInput
        };
    }
});

$('.toolbar_option[type="add_sticker"] > img').click((e) => {
    $('.stickers_wrapper').toggle();
});

$('.toolbar_option[type="add_sticker"] .stickers_wrapper .sticker').click(
    (e) => {
        const id = Math.random().toString(16).slice(2);
        const newSticker = $(e.currentTarget).clone().attr('id', id);
        newSticker
            .draggable({
                drag: function (e, ui) {
                    socket.emit('place element', {
                        id,
                        pageView: $('#yearbook').turn('view').toString(),
                        element_type: 'sticker',
                        content: $(ui.helper).attr('name'),
                        left: ui.position.left,
                        top: ui.position.top,
                    });
                },
                stop: function (e, ui) {
                    socket.emit('update element', {
                        id,
                        pageView: $('#yearbook').turn('view').toString(),
                        element_type: 'sticker',
                        content: $(ui.helper).attr('name'),
                        left: ui.position.left,
                        top: ui.position.top,
                    });
                },
            })
            .appendTo('#droppable_area');
        socket.emit('create element', {
            id,
            pageView: $('#yearbook').turn('view').toString(),
            element_type: 'sticker',
            content: newSticker.attr('name'),
            left: newSticker.position().left,
            top: newSticker.position().top,
        });
        $('.stickers_wrapper').toggle();

        const pageView = $("#yearbook").turn("view").toString();
        if(createdElements[pageView]) {
            createdElements[pageView][id] = newSticker;
        } else {
            createdElements[pageView] = {
                [id]: newSticker
            };
        }
    }
);

const disableImagePlaceholderClicks = (imagePlaceholder) => {
    imagePlaceholder.className = `${imagePlaceholder.className} avoid_clicks`;
};

const makeCameraSpin = (imagePlaceholder) => {
    const cameraIcon = imagePlaceholder.querySelector('.icon img');
    cameraIcon.className = 'spin';
};

const imagePlaceholderInUse = (imagePlaceholder) => {
    disableImagePlaceholderClicks(imagePlaceholder);
    makeCameraSpin(imagePlaceholder);
};

const addClassPhotoClickEvents = (classSelector) => {
    $(`.${classSelector}`).click((e) => {
        const item = e.currentTarget;
        // only allow a new image to be added if the item doesn't already have an image
        if ($(item).find('img.gif').length === 0) {
            console.log('clicked on an image', item.id);
            const imagePlaceholder = document.querySelector(`#${item.id}`);
            const video = imagePlaceholder.querySelector('video');
            const countdown = imagePlaceholder.querySelector('.countdown');
            imagePlaceholderInUse(imagePlaceholder);
            socket.emit('image placeholder in use', `#${item.id}`);

            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices
                    .getUserMedia({ video: true })
                    .then(function (stream) {
                        video.srcObject = stream;
                        return stream;
                    })
                    .then((stream) => {
                        var timeleft = 3;
                        var timer = setInterval(function () {
                            if (timeleft <= 0) {
                                clearInterval(timer);
                            } else {
                                countdown.innerHTML = timeleft;
                            }
                            timeleft -= 1;
                        }, 1000);

                        setTimeout(() => {
                            console.log('creating the gif');
                            gifshot.createGIF(
                                {
                                    cameraStream: stream,
                                    gifWidth: imagePlaceholder.clientWidth,
                                    gifHeight: imagePlaceholder.clientHeight,
                                },
                                function (obj) {
                                    if (!obj.error) {
                                        const animatedImage =
                                            document.createElement('img');
                                        animatedImage.className = 'gif';
                                        animatedImage.src = obj.image;
                                        imagePlaceholder.appendChild(
                                            animatedImage
                                        );
                                        video.remove();
                                        countdown.remove();
                                        $(`#${item.id} .icon`).remove();
                                        saveGif(item.id, obj.image);
                                    }
                                }
                            );
                        }, 3000);
                    })
                    .catch(function (error) {
                        console.log('Error', error);
                        console.log('Something went wrong!');
                    });
            }
        }
    });
};
