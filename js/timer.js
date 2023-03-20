import { btnPlay} from "./elements.js"
import Sound from "./sounds.js"
const sound = Sound()

export default function Timer({
    displayMinutes,
    displaySeconds
}){
    let timerTimeOut

    let minutesPlus = 0

    function reset() {
        displayMinutes.textContent = String(0).padStart(2, "0")
        displaySeconds.textContent = String(0).padStart(2, "0")
        clearTimeout(timerTimeOut)
        minutesPlus = 0
    }

    function plus() {
        displayMinutes.textContent = String(minutesPlus += 5).padStart(2, "0")
    }

    function minus() {
        if(minutesPlus <= 0 || minutesPlus < 5) {
            alert('Adicione os minutos!')
        } else {
            minutesPlus -= 5
        }
        displayMinutes.textContent = String(minutesPlus).padStart(2, "0")
    }

    function countdown() {
        timerTimeOut = setTimeout(function() {
            let seconds = Number(displaySeconds.textContent)
            let minutes = Number(displayMinutes.textContent)
            let isFinished = minutes <= 0 && seconds <= 0
            
            if(isFinished) {
                sound.kitchenTimer.play()
                alert('Adicione os minutos!')
                btnPlay.removeAttribute('disabled', 'disabled')
                return           
            } else {
                    if(seconds <= 0) {
                    seconds = 2
                        minutesPlus = Number(displayMinutes.textContent = String(minutes -1).padStart(2, "0"))
                    }
                    if(minutesPlus <= 0 && seconds <= 0) {
                        return
                    }

                    displaySeconds.textContent = String(seconds -1).padStart(2, "0")

                    countdown()
            }        
        }, 1000)
    }
    return {
        countdown,
        minus,
        plus,
        reset
    }
}
