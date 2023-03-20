import {
    inputForest, inputRain, inputCoffee, inputFire,
    btnPlay, btnStop, btnPlus, btnMinus,
    btnCardForest, btnCardRain, btnCardCoffee, btnCardFire,
    btnDarkMode, btnLightMode
} from "./elements.js"
export default function({
    sound, controls, timer    
}){
    inputForest.addEventListener('input', function(){
        sound.forestSound.volume = inputForest.value
    })
    
    inputRain.addEventListener('input', function(){
        sound.rainSound.volume = inputRain.value
    })
    
    inputCoffee.addEventListener('input', function(){
        sound.coffeeSound.volume = inputCoffee.value
    })
    
    inputFire.addEventListener('input', function(){
        sound.fireSound.volume = inputFire.value
    })
    
    btnPlay.addEventListener('click', function(){
        sound.buttonPressAudio.play()
        controls.play()
        timer.countdown()
    })
    
    btnStop.addEventListener('click', function(){
        sound.buttonPressAudio.play()
        controls.stop()
        timer.reset()
        sound.stop()    
    })
    
    btnPlus.addEventListener('click', function(){
        sound.buttonPressAudio.play()
        controls.plus()
        timer.plus()
    })
    
    btnMinus.addEventListener('click', function(){
        sound.buttonPressAudio.play()
        controls.minus()
        timer.minus()
    })
    
    btnCardForest.addEventListener('click', function(){
        controls.cardForest()
        sound.forest()
    })
    
    btnCardRain.addEventListener('click', function(){
        controls.cardRain() 
        sound.rain()
    })
    
    btnCardCoffee.addEventListener('click', function(){
        controls.cardCoffee()
        sound.coffee()
    })
    
    btnCardFire.addEventListener('click', function(){
        controls.cardFire()
        sound.fire()
    })
    
    btnDarkMode.addEventListener('click', function(){
        sound.buttonPressAudio.play()
        controls.darkMode()    
    })
    
    btnLightMode.addEventListener('click', function(){
        sound.buttonPressAudio.play()
        controls.lightMode()    
    })
}