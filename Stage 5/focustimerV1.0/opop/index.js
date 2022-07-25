import timerlib from './timer.js'
import optionslib from './option.js'
import audios from './sounds.js'
import {
  buttonMute,
  buttonPause,
  buttonPlay,
  buttonUnmute,
  buttonStop,
  buttonSets,
  displayMinutes,
  displaySeconds
} from './elementes.js'

//DOM

const options = optionslib({ buttonPause, buttonPlay, buttonSets, buttonStop })

const timer = timerlib({
  displayMinutes,
  displaySeconds,
  resetButtons: options.reset
})

const audio = audios()

// Event-driven (direcionada a eventos)
// programação imperativa
// callback

buttonPlay.addEventListener('click', function () {
  options.play()
  timer.countDown()
  audio.pressButton()
})

buttonPause.addEventListener('click', function () {
  options.pause()
  timer.hold()
  audio.pressButton()
})

buttonStop.addEventListener('click', function () {
  options.reset()
  timer.resetTimer()
  audio.pressButton()
})

buttonUnmute.addEventListener('click', function () {
  buttonMute.classList.remove('hide')
  buttonUnmute.classList.add('hide')
  audio.bgAudio.play()
})

buttonMute.addEventListener('click', function () {
  buttonMute.classList.add('hide')
  buttonUnmute.classList.remove('hide')
  audio.bgAudio.pause()
})

buttonSets.addEventListener('click', function () {
  let newMinutes = options.getMinutes()

  if (!newMinutes) {
    timer.resetTimer()
    return
  }

  timer.displayTimerUpdate(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})
