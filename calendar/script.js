const date = new Date(); 

const renderCalendar = () => {

date.setDate(1); /* ustawiamy index dnia miesiaca - pierwszy dzien miesiaca */  

const firstDayIndex = date.getDay();  /* index dnia tygodnia */ 

const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate(); /* numer ostatniego dnia tego miesiąca */  

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();  /* numer ostatniego dnia poprzedniego miesiąca */ 

const monthDays = document.querySelector('.days'); 

const monthInt = date.getMonth(); 

/* the days at the bottom of the calendar */ 

const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay(); /* index dnia tygodania ostatniego dnia miesiaca */   

const nextDays = 7 - (lastDayIndex -1);

const month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

document.querySelector('.date h1').innerHTML = month[monthInt]; 
document.querySelector('.date p').innerHTML = new Date().toDateString(); 

let days = "";

for(let x = firstDayIndex; x>0; x--) {
  days += `<div class="prev-date">${prevLastDay-x + 1}</div>`; 
}

for(let i=1; i <= lastDay; i++) {
  if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
    days += `
      <div class="today">${i}</div>
    `} else {
        days += `
        <div>${i}</div>
    `}
}

for (let j=1; j<= nextDays; j++) {
  days += `<div class="next-date">${j}</div>`; 
}

monthDays.innerHTML = days; 
}

/* arrows */ 

document.querySelector('.prev').addEventListener('click', ()=> {
  date.setMonth(date.getMonth()-1);   
  renderCalendar(); 
})

document.querySelector('.next').addEventListener('click', ()=> {
  date.setMonth(date.getMonth()+1); 
  renderCalendar();
})