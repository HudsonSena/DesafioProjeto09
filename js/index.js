import {
    btnPlay, btnStop, btnPlus, btnMinus,
    btnCardForest, btnCardRain, btnCardCoffee, btnCardFire,
    btnDarkMode, btnLightMode,
    inputForest, inputRain, inputCoffee, inputFire,
    displayMinutes, displaySeconds,
    displayBody, displayTimer, displayControls,
    displayInputForest, displayInputRain, displayInputCoffee, displayInputFire
} from "./elements.js"

import Sound from "./sounds.js"
const sound = Sound()

import Controls from "./controls.js"
const controls = Controls({
    btnPlay, btnStop, btnPlus, btnMinus,
    btnCardForest, btnCardRain, btnCardCoffee, btnCardFire,
    btnDarkMode, btnLightMode,
    displayBody, displayControls, displayTimer,
    displayInputForest, displayInputRain, displayInputCoffee, displayInputFire
})

import Timer from "./timer.js"
const timer = Timer({
    displayMinutes, displaySeconds
})

import Events from "./events.js"
Events({ sound, controls, timer })