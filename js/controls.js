export default function Controls({
    btnPlay, btnStop, btnPlus, btnMinus,
    btnCardForest, btnCardRain, btnCardCoffee, btnCardFire,
    btnDarkMode, btnLightMode,
    displayBody, displayControls, displayTimer,
    displayInputForest, displayInputRain, displayInputCoffee, displayInputFire
}){
    function play(){
        if(btnDarkMode.className == 'btnLightMode hide') {
            btnPlay.classList.add('blueButton')
            btnPlay.classList.remove('cBlack')
            btnPlus.classList.add('cBlack')
            btnMinus.classList.add('cBlack')
            btnStop.classList.add('cBlack')
        }

        btnPlay.classList.add('blueButton')
        btnStop.classList.remove('blueButton')
        btnPlus.classList.remove('blueButton')
        btnMinus.classList.remove('blueButton')
        btnPlay.setAttribute('disabled', 'disabled')
    }

    function stop(){
        if(btnDarkMode.className == 'btnLightMode hide') {
            btnCardForest.classList.add('cardBlack')
            btnCardRain.classList.add('cardBlack')
            btnCardCoffee.classList.add('cardBlack')
            btnCardFire.classList.add('cardBlack')

            btnStop.classList.add('blueButton')
            btnStop.classList.remove('cBlack')
            btnPlus.classList.add('cBlack')
            btnMinus.classList.add('cBlack')
            btnPlay.classList.add('cBlack')

        }

        btnStop.classList.add('blueButton')
        btnPlay.classList.remove('blueButton')
        btnPlus.classList.remove('blueButton')
        btnMinus.classList.remove('blueButton')

        btnPlay.removeAttribute('disabled', 'disabled')
        btnCardForest.classList.remove('blue2')
        btnCardRain.classList.remove('blue2')
        btnCardCoffee.classList.remove('blue2')
        btnCardFire.classList.remove('blue2')

        displayInputForest.classList.remove('blue2')
        displayInputFire.classList.remove('blue2')
        displayInputRain.classList.remove('blue2')
        displayInputCoffee.classList.remove('blue2')
    }

    function plus(){
        if(btnDarkMode.className == 'btnLightMode hide') {
            btnPlus.classList.add('blueButton')
            btnPlus.classList.remove('cBlack')
            btnPlay.classList.add('cBlack')
            btnMinus.classList.add('cBlack')
            btnStop.classList.add('cBlack')
        }

        btnPlus.classList.add('blueButton')
        btnMinus.classList.remove('blueButton')
        btnStop.classList.remove('blueButton')
        btnPlay.classList.remove('blueButton')
    }

    function minus(){
        if(btnDarkMode.className == 'btnLightMode hide') {
            btnMinus.classList.add('blueButton')
            btnMinus.classList.remove('cBlack')
            btnPlus.classList.add('cBlack')
            btnPlay.classList.add('cBlack')
            btnStop.classList.add('cBlack')
        }

        btnMinus.classList.add('blueButton')
        btnPlus.classList.remove('blueButton')
        btnStop.classList.remove('blueButton')
        btnPlay.classList.remove('blueButton')
    }

    function cardForest(){
        if(btnDarkMode.className == 'btnLightMode hide') {
            btnCardForest.classList.remove('cardBlack')
            btnCardRain.classList.add('cardBlack')
            btnCardCoffee.classList.add('cardBlack')
            btnCardFire.classList.add('cardBlack')
        }
        
        btnCardForest.classList.add('blue2')
        btnCardRain.classList.remove('blue2')
        btnCardCoffee.classList.remove('blue2')
        btnCardFire.classList.remove('blue2')

        displayInputForest.classList.add('blue2')
        displayInputFire.classList.remove('blue2')
        displayInputRain.classList.remove('blue2')
        displayInputCoffee.classList.remove('blue2')
    }

    function cardRain(){
        if(btnDarkMode.className == 'btnLightMode hide') {
            btnCardRain.classList.remove('cardBlack')
            btnCardForest.classList.add('cardBlack')
            btnCardCoffee.classList.add('cardBlack')
            btnCardFire.classList.add('cardBlack')
        }

        btnCardRain.classList.add('blue2')
        btnCardForest.classList.remove('blue2')
        btnCardCoffee.classList.remove('blue2')
        btnCardFire.classList.remove('blue2')

        displayInputRain.classList.add('blue2')
        displayInputFire.classList.remove('blue2')
        displayInputForest.classList.remove('blue2')
        displayInputCoffee.classList.remove('blue2')
    }

    function cardCoffee(){
        if(btnDarkMode.className == 'btnLightMode hide') {
            btnCardCoffee.classList.remove('cardBlack')
            btnCardRain.classList.add('cardBlack')
            btnCardForest.classList.add('cardBlack')
            btnCardFire.classList.add('cardBlack')
        }

        btnCardCoffee.classList.add('blue2')
        btnCardRain.classList.remove('blue2')
        btnCardForest.classList.remove('blue2')
        btnCardFire.classList.remove('blue2')

        displayInputCoffee.classList.add('blue2')
        displayInputFire.classList.remove('blue2')
        displayInputRain.classList.remove('blue2')
        displayInputForest.classList.remove('blue2')
    }

    function cardFire(){
        if(btnDarkMode.className == 'btnLightMode hide') {
            btnCardFire.classList.remove('cardBlack')
            btnCardRain.classList.add('cardBlack')
            btnCardCoffee.classList.add('cardBlack')
            btnCardForest.classList.add('cardBlack')

        }
        btnCardFire.classList.add('blue2')
        btnCardRain.classList.remove('blue2')
        btnCardCoffee.classList.remove('blue2')
        btnCardForest.classList.remove('blue2')

        displayInputFire.classList.add('blue2')
        displayInputForest.classList.remove('blue2')
        displayInputRain.classList.remove('blue2')
        displayInputCoffee.classList.remove('blue2')
    }

    function darkMode(){
        displayBody.classList.add('bgBlack')

        btnDarkMode.classList.add('hide')
        btnLightMode.classList.remove('hide')
        displayTimer.classList.add('tblack')

        btnPlay.classList.add('cBlack')
        btnStop.classList.add('cBlack')
        btnPlus.classList.add('cBlack')
        btnMinus.classList.add('cBlack')

        displayInputForest.classList.add('iBlack')
        displayInputRain.classList.add('iBlack')
        displayInputCoffee.classList.add('iBlack')
        displayInputFire.classList.add('iBlack')

        btnCardForest.classList.toggle('cardBlack')
        btnCardRain.classList.toggle('cardBlack')
        btnCardCoffee.classList.toggle('cardBlack')
        btnCardFire.classList.toggle('cardBlack')
    }

    function lightMode(){
        displayBody.classList.remove('bgBlack')
        btnDarkMode.classList.remove('hide')
        btnLightMode.classList.add('hide')
        displayTimer.classList.remove('tblack')
        displayControls.classList.remove('cBlack')

        displayInputForest.classList.remove('iBlack')
        displayInputRain.classList.remove('iBlack')
        displayInputCoffee.classList.remove('iBlack')
        displayInputFire.classList.remove('iBlack')

        btnCardForest.classList.remove('cardBlack')
        btnCardRain.classList.remove('cardBlack')
        btnCardCoffee.classList.remove('cardBlack')
        btnCardFire.classList.remove('cardBlack')

        btnPlay.classList.remove('cBlack')
        btnStop.classList.remove('cBlack')
        btnPlus.classList.remove('cBlack')
        btnMinus.classList.remove('cBlack')
    }

    return {
        lightMode, darkMode,
        cardFire, cardCoffee, cardRain, cardForest,
        minus, plus, stop, play
    }
}
