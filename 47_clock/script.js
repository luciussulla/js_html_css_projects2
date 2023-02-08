const hour   = document.querySelector('.hour'); 
const minute = document.querySelector('.minute'); 
const second = document.querySelector('.second'); 



function setDate() {
  const now = new Date(); 
  const getSecond = now.getSeconds(); 
  const getMinute = now.getMinutes(); 
  const getHour   = now.getHours(); 

  console.log(getHour, getMinute, getSecond); 

  const secondDegree = (getSecond / 60) * 360;
  second.style.transform = `rotate(${secondDegree}deg)`; 

  const minutesDegree = (getMinute / 60) * 360;
  minute.style.transform =  `rotate(${minutesDegree}deg)`; 

  const hoursDegree = (getHour / 12) * 360;
  hour.style.transform = `rotate(${hoursDegree}deg)`; 
}

setInterval(setDate, 1000); 