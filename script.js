'use strict'

// Ziel
// wenn man auf einen btn klickt
//     dann soll die aktuell laufende audio gestoppt werden
//     dann soll die zugehörige audio abgespielt werden


// Eingabe
const buttons = document.querySelectorAll('.btn')


// Verarbeitung
buttons.forEach(button => {
    // Beim Klick auf ein Button
    button.addEventListener('click', () => {
        // Audio-Elemente auswähen & stoppen
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => {
            audio.pause();
            // Playback auf den Anfang setzen
            audio.currentTime = 0;
        });
    
        // Zuweisen des zugehörigen Audio-Elements durch Btn-Namen
        const audioId = button.textContent.trim();
        const audioToPlay = document.querySelector(`#${audioId}`);
        // Audio-Element abspielen
        audioToPlay.play();

    
    })
});