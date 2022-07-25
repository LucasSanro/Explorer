import audios from './sounds.js'

const audio = audios()

export default function timer({
  displayMinutes,
  displaySeconds,
  resetButtons
}) {
  let timerTimeOut
  let minutes = Number(displayMinutes.textContent)

  function resetTimer() {
    clearTimeout(timerTimeOut)
    displayTimerUpdate(minutes, 0)
  }
  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(displaySeconds.textContent)
      let minutes = Number(displayMinutes.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      displayTimerUpdate(minutes, 0)

      if (isFinished) {
        resetButtons()
        displayTimerUpdate()
        audio.timeEnd()

        return
      }

      if (seconds <= 0) {
        seconds = 60

        --minutes
      }

      displayTimerUpdate(minutes, seconds - 1)

      countDown()
    }, 1000)
  }

  function displayTimerUpdate(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    displayMinutes.textContent = String(newMinutes).padStart(2, '0')
    displaySeconds.textContent = String(seconds).padStart(2, '0')
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }
  function hold() {
    clearTimeout(timerTimeOut)
  }
  return {
    countDown,
    resetTimer,
    resetButtons,
    displayTimerUpdate,
    updateMinutes,
    hold
  }
}
