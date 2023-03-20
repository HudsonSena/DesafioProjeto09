export default function(){
    const forestSound = new Audio('./audios/Floresta.mp3')
    const rainSound = new Audio('./audios/Chuva.mp3')
    const coffeeSound = new Audio('./audios/Cafeteria.mp3')
    const fireSound = new Audio('./audios/Lareira.mp3')
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    forestSound.loop = true;
    rainSound.loop = true;
    coffeeSound.loop = true;
    fireSound.loop = true;

    function forest() {
        fireSound.pause()
        forestSound.play()
        rainSound.pause()
        coffeeSound.pause()
    }
    function rain() {
        fireSound.pause()
        forestSound.pause()
        rainSound.play()
        coffeeSound.pause()
    }
    function coffee() {
        fireSound.pause()
        forestSound.pause()
        rainSound.pause()
        coffeeSound.play()
    }
    function fire() {
        fireSound.play()
        forestSound.pause()
        rainSound.pause()
        coffeeSound.pause()
    }

    function stop() {
        fireSound.pause()
        forestSound.pause()
        rainSound.pause()
        coffeeSound.pause()
        buttonPressAudio.play()
    }

    return {
        buttonPressAudio,
        kitchenTimer,
        fire, forest, coffee, rain, stop,
        fireSound, coffeeSound, rainSound, forestSound
    }
}
