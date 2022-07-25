// Variaveis
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
let musicSensor = false

// OptionsButtons
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonLess = document.querySelector('.less')
const buttonSets = document.querySelector('.sets')

const rainBackground = document.querySelector('.rainBackground')
const rainInside = document.querySelector('.rainInside')

const campBackground = document.querySelector('.campBackground')
const campInside = document.querySelector('.campInside')

const treeBackground = document.querySelector('.treeBackground')
const treeInside = document.querySelector('.treeInside')

const coffeBackground = document.querySelector('.coffeBackground')
const coffeInside = document.querySelector('.coffeInside')

const floresta = new Audio(
  'https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view'
)
const chuva = new Audio(
  'https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view'
)
const cafeteria = new Audio(
  'https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view'
)
const lareira = new Audio(
  'https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view'
)
const kitchenTimer = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)

// MusicButtons
const buttonMusicTree = document.querySelector('.tree')
const buttonMusicFire = document.querySelector('.campFire')
const buttonMusicRain = document.querySelector('.rain')
const buttonMusicCoffe = document.querySelector('.coffeShop')
const backgrounds = [
  rainBackground,
  campBackground,
  coffeBackground,
  treeBackground
]

const insides = [rainInside, coffeInside, campInside, treeInside]

const musics = [floresta, chuva, cafeteria, lareira]

buttonMusicRain.addEventListener('click', function () {
  ButtonPress(rainBackground, rainInside)
  MusicValider(chuva)
})
buttonMusicTree.addEventListener('click', function () {
  ButtonPress(treeBackground, treeInside)
  MusicValider(floresta)
})
buttonMusicFire.addEventListener('click', function () {
  ButtonPress(campBackground, campInside)
  MusicValider(lareira)
})
buttonMusicCoffe.addEventListener('click', function () {
  ButtonPress(coffeBackground, coffeInside)
  MusicValider(cafeteria)
})
buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSets.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdonw()
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSets.classList.add('hide')
  buttonStop.classList.remove('hide')
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  resetAll()
  buttonSets.classList.remove('hide')
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonStop.classList.add('hide')
})

buttonSets.addEventListener('click', function () {
  minutesDisplay.textContent = String(getMinutes()).padStart(2, '0')
})

buttonPlus.addEventListener('click', function () {
  displayTimerConverter(Number(minutesDisplay.textContent) + 5, 0)
})

buttonLess.addEventListener('click', function () {
  if (Number(minutesDisplay.textContent) < 5) {
    return
  }
  displayTimerConverter(Number(minutesDisplay.textContent) - 5, 0)
})

// funcoes

function countdonw() {
  timerTimeOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    displayTimerConverter(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      resetButtons()
      kitchenTimer.play()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      displayTimerConverter(minutes - 1)
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

    countdonw()
  }, 1000)
}

function resetButtons() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonStop.classList.add('hide')
  buttonSets.classList.remove('hide')
}

function displayTimerConverter(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetAll() {
  clearTimeout(timerTimeOut)
  displayTimerConverter(minutes, 0)
}

function getMinutes() {
  let newMinutes = prompt('Quantos minutos?')

  if (newMinutes == null) {
    newMinutes = 0
    return newMinutes
  }

  return newMinutes
}
function ButtonPress(Background, inside) {
  activeButtons(Background, inside)
}

function activeButtons(backgroundSelector, insideSelector) {
  for (const background of backgrounds) {
    background.classList.remove('back')
  }
  for (const inside of insides) {
    inside.classList.remove('in')
  }
  insideSelector.classList.add('in')
  backgroundSelector.classList.add('back')
}
function MusicValider(music) {
  if ((musicSensor = true)) {
    floresta.pause()
    chuva.pause()
    lareira.pause()
    cafeteria.pause()
  } else {
    music.play()
    musicSensor = true
  }
}
