const  countdown = document.querySelector('.countdown'); 
const deadline = new Date(2023, 7, 15, 12, 00, 00); 
const current = new Date();
const diff = deadline - current; 
const reset = document.querySelector('.reset'); 

const interval = setInterval(() => {

  const current = new Date();
  const diff = deadline - current; 

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24)); 
  const hours   = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60; 
  const seconds = Math.floor(diff / 1000) % 60;  

  countdown.innerHTML = `
  <div data-content="Days">   ${days    <= 9 ? `0${days}`    : days}</div>
  <div data-content="Hours">  ${hours   <=9  ? `0${hours}`   : hours}</div>
  <div data-content="Minutes">${minutes <= 9 ? `0${minutes}` : minutes}</div>
  <div data-content="Seconds">${seconds <=9  ? `0${seconds}` : seconds}</div>
`

if(diff < 0) {
  clearInterval(interval); 
  countdown.innerHTML = `<h1>Here we go!</h1>`; 
}

reset.addEventListener('click', ()=> {
  clearInterval(interval)

  const divs = document.querySelectorAll('.countdown div'); 
  divs.forEach(div=> {
    div.innerHTML = '00';   
  }); 

}); 

}, 1000); 


