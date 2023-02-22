const cubes = document.querySelectorAll('.cube'); 
let rotation = 0; 
const rotateConstant = 90; 
const hoverConstant = 25; 
const playPause = document.querySelector('.play-pause'); 
let playPauseIcon = document.querySelector('.play-pause i'); 

/* play pause button settings */ 
let interval; 
let playPauseFlag = true; 

console.log(playPauseIcon); 

const rotate = (rotateBy)=> {
  rotation = rotation + rotateBy; 
  Array.from(cubes).forEach(cube => {
    cube.style.transform = `rotateY(${rotation}deg)`; 
  }); 
}
document.querySelector('.left-arrow').addEventListener('click', ()=> {
  rotate(-rotateConstant);
}); 
document.querySelector('.right-arrow').addEventListener('click', ()=> {
  rotate(rotateConstant); 
});


/* On hover move */ 
document.querySelector('.left-arrow').addEventListener('mouseover', ()=> {
  rotate(hoverConstant); 
}); 
document.querySelector('.left-arrow').addEventListener('mouseleave', ()=> {
  rotate(-hoverConstant); 
}); 

document.querySelector('.right-arrow').addEventListener('mouseover', ()=> {
  rotate(-hoverConstant); 
}); 

document.querySelector('.right-arrow').addEventListener('mouseleave', ()=> {
  rotate(hoverConstant); 
}); 

/* PLay Pause button */
const playPausefunc = () => {
  /* html markup logic */ 
  
  if (playPauseFlag) { 
    playPauseIcon.className = 'fas fa-pause'; 
    playPauseFlag = false;  
    /* set interval logic */ 
    interval = setInterval(()=> {
      rotate(rotateConstant); 
    }, 2000); 

  } else {
    clearInterval(interval); 
    playPauseIcon.className =  'fas fa-play';
    playPauseFlag = true; 
  }
}

playPause.addEventListener('click', playPausefunc); 