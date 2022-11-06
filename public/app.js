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

$(window).ready(function() {
    $('#yearbook').turn({
        display: 'double',
        acceleration: true,
        gradients: !$.isTouch,
        elevation:50,
        when: {
            turned: function(e, page) {
                /*console.log('Current view: ', $(this).turn('view'));*/
            }
        }
    });
});


$(window).bind('keydown', function(e){

    if (e.keyCode==37)
        $('#yearbook').turn('previous');
    else if (e.keyCode==39)
        $('#yearbook').turn('next');

});
