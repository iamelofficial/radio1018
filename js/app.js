$(function(){

    /*Слайдер ___ */
    $('.slider__main').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnFocus:false,
        pauseOnHover:false,
        pauseOnDotsHover:false
    });
});

// управление плеером
var player = document.getElementById('music'); // id for audio element
var duration; // Duration of audio clip
btnPlayPause = $('#btnPlayPause');
btnMute      = $('#btnMute');
btnMute1     = $('#btnMute');
progressBar  = $('#progress-bar');
volumeBar    = $('#volume-bar');
source       = $('#audioSource');


volumeBar.change(function(evt) {
    player.volume = parseInt($(this).val()) / 100;
    //$('.volume-bar').val($(this).val());
});

function volumeRange() {
    var $slider = $("#volume-bar");
    var $fill = $(".player__main_volume_bar .fill");

    $fill.css("width", $slider.val() + "%");

    /*val = $('.player__main_volume-bar').val();
    $('.player__main_volume-bar').css({'background':'-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+val+'%, rgba(var(--red-color))), color-stop(1, rgba(var(--darkwhite-color))))'});*/
}

// Stop the current media from playing, and return it to the start position
function stopAudio() {
    player.pause();
    if (player.currentTime) player.currentTime = 0;
}

// Toggles the media player's mute and unmute status
btnMute.click(function() {
    if (player.muted) {
        // Change the button to a mute button
        changeButtonType(btnMute, 'icon-volume_level4');
        player.muted = false;
    }
    else {
        // Change the button to an unmute button
        changeButtonType(btnMute, 'icon-volume_mute');
        player.muted = true;
    }
});

// Updates a button's title, innerHTML and CSS class
function changeButtonType(btn, value) {
    btn.removeClass('icon-play icon-stop icon-volume_mute icon-volume_level4');
    btn.addClass(value);
}

btnPlayPause.click(function(){
    if (player.src != $('#song-source').data('track')){
        player.pause();
        player.src = $('#song-source').data('track');
        player.play();
        changeButtonType($(this), 'icon-stop');
        changeButtonType($('.track-list-item .icon-stop'), 'icon-play');
    }else{
        if (player.paused || player.ended) {
            // Change the button to a pause button
            changeButtonType($(this), 'icon-stop');
            player.play();
        }
        else {
            // Change the button to a play button
            changeButtonType($(this), 'icon-play');
            player.pause();
        }
    }
});


/* JS scroll-top and scroll-nav */
    const offset = 200;
    const offsetMenu = 60;
    const offsetAdv = 60;
    //const scrollUp = document.querySelector('.scroll-top');
    const scrollMenu = document.querySelector('.player');
    const scrollAdv = document.querySelector('.adv');

    const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

    // updateDashoffset
    const updateDashoffset = () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
    };

    // onScrole
    window.addEventListener('scroll', () => {
        updateDashoffset();

        /*if (getTop() > offset) {
            scrollUp.classList.add('scroll-top--show')
        } else {
            scrollUp.classList.remove('scroll-top--show')
        }*/

        if (getTop() > offsetMenu) {
            scrollMenu.classList.add('scroll')
        } else {
            scrollMenu.classList.remove('scroll')
        }

        if (getTop() > offsetAdv) {
            scrollAdv.classList.remove('show')
        } else {
            scrollAdv.classList.add('show')
        }
    });

    // click
   /* scrollUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });*/

    /*
    = END JS scroll-top and scroll-nav =
    */
