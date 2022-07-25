export default function sounds() {
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

  function florestaBg() {
    floresta.play()
  }
  function chuvaBg() {
    chuva.play()
  }
  function cafeteriaBg() {
    cafeteria.play()
  }
  function lareiraBg() {
    lareira.play()
  }
  function kitchenTimerBG() {
    kitchenTimer.play()
  }

  return {
    florestaBg,
    chuvaBg,
    cafeteriaBg,
    lareiraBg,
    kitchenTimerBG
  }
}
