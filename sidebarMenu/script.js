document.querySelector('.hamburger-menu').addEventListener('click', ()=> {
  document.querySelector('.container').classList.toggle('open-sidebar'); 
}); 

[...document.querySelectorAll('.nav-link')].forEach((elem)=> {
  elem.addEventListener('click', (e)=> {
    // console.log(e.target.parentNode); 
    e.target.parentNode.parentNode.classList.toggle('open-sub-nav-list');  
  })
})
