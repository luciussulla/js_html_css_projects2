const btn = document.querySelector('.btn'); 

let ripple; 

btn.addEventListener('mouseenter', (e)=> {
  const left = e.clientX - e.target.getBoundingClientRect().left; 
  console.log(left); 

  const top = e.clientY - e.target.getBoundingClientRect().top; 
  console.log(top); 

  ripple = document.createElement('div'); 
  ripple.classList.add('ripple'); 

  ripple.style.left =  `${left}px`; 
  ripple.style.top =    `${top}px`

  btn.prepend(ripple); 

}); 

btn.addEventListener('mouseleave', ()=> {
  btn.classList.remove('ripple'); 
  btn.removeChild(ripple); 
})