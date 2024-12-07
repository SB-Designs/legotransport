function playSound(soundNumber) {
    // Get the audio file corresponding to the button clicked
    const audio = new Audio(`llr-sounds/sound${soundNumber}.mp3`);
    audio.play();
}
