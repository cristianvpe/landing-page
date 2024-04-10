/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const audio = document.getElementById('audio');
const btnReproducir = document.getElementById('btnReproducir');
const iconoReproducir = document.getElementById('iconoReproducir');

btnReproducir.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        iconoReproducir.classList.remove('bi-play-fill');
        iconoReproducir.classList.add('bi-pause-fill'); 
    } else {
        audio.pause();
        iconoReproducir.classList.remove('bi-pause-fill');
        iconoReproducir.classList.add('bi-play-fill'); 
    }
});
