export default function options({
  buttonPause,
  buttonPlay,
  buttonSets,
  buttonStop
}) {
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSets.classList.add('hide')
    buttonStop.classList.remove('hide')
  }
  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }
  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonSets.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')

    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  return { reset, play, pause, getMinutes }
}
