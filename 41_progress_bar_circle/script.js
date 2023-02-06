const halfCircles    = document.querySelectorAll('.half-circle'); 
const halfCircleTop = document.querySelector('.half-circle-top'); 
const progresBarCircle = document.querySelector('.progressbar-circle'); 

console.log(halfCircleTop); 

document.addEventListener('scroll', ()=> {
  const pageViewportHeight = window.innerHeight
  const pageHeight = document.documentElement.scrollHeight
  const scrolledPortion = window.pageYOffset

  const scrolledPortionDegree = (scrolledPortion / (pageHeight - pageViewportHeight)) * 360

  console.log(pageViewportHeight, pageHeight, scrolledPortionDegree); 

  const scrolledPortionPercent = Math.floor(scrolledPortionDegree / 360 * 100)

  progresBarCircle.texContent = `${scrolledPortionPercent}%`

  halfCircles.forEach(el => {
    el.style.transform = `rotate(${scrolledPortionDegree}deg)`; 

    if(scrolledPortionDegree >= 180) {
      halfCircles[0].style.transform = `rotate(180deg)`
      halfCircleTop.style.opacity = '0'
    } else {
      halfCircleTop.style.opacity = '1'
    }
  })
})
