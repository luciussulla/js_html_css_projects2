const container = document.querySelector('.container'); 
const headingSpan2 = document.querySelector('.heading-span-2'); 
const form = document.querySelector('form'); 

document.querySelector('.signup-btn').addEventListener('click', ()=> {
  container.classList.add('change'); 
  setTimeout(() => headingSpan2.textContent = 'Up' ,200); 
  form.className = 'form sign-up';
  clearForm(); 
})

document.querySelector('.signin-btn').addEventListener('click', ()=> {
  container.classList.remove('change'); 
  setTimeout(()=>   headingSpan2.textContent = 'In', 200); 
  form.className = 'form sign-in'; 
  clearForm(); 
})

const username = document.getElementById('username'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 
const password2 = document.getElementById('password2'); 

const clearForm = ()=> {
  document.querySelectorAll('.form-input-wrapper').forEach((currentItem)=> {
    currentItem.className = 'form-input-wrapper'; 
  })

  form.reset(); 
}

const error = (input, message) => {
  console.log("error was triggered"); 

  const inputWrapper = input.parentElement; 
  console.log(inputWrapper); 
  inputWrapper.className = "form-input-wrapper error"; 
  inputWrapper.querySelector('.message').textContent = message; 
}

const success = (input)=> {
  console.log("success tiggered"); 
  const inputWrapper = input.parentElement; 
  inputWrapper.className = "form-input-wrapper success"; 
}


const checkRequiredFields = (inputArr) => {
  // console.log(inputArr); 

  inputArr.forEach((input)=> {
    
    if(input.value.trim() === "") {
      error(input, `${input.id} is required`); 
      if(input.id === "password2") {
        error(input, "Password Confirmation is required"); 
      }
    } else {
      // success 
      success(input); 
      console.log("welll")
    }

  })
}

const checkLength = (input, min, max)=> {

  if(input.value.length < min ) {
    error(input, `${input.id} must be at least ${min} characters`); 
  } else if (input.value.length > max) {
    error(input  `${input.id} must be less than ${max} characters`); 
  } else {
    success(input);
  }

}

const passwordMatch = (input1, input2)=> {
  if(input1.value !== input2.value) {
    error(input2, "Passwords do not match"); 
  }
} 

const checkEmail = (input) => {
    result = String(input.value.trim()) 
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (result) {
      success(input); 
    } else {
      error(input, "Email not valid"); 
    }
};

form.addEventListener('submit', (e)=> {
  e.preventDefault(); 
  if(form.classList[1]==='sign-up') {
    checkRequiredFields([username, email, password, password2]); 
    checkLength(username, 2, 15); 
    checkLength(password, 5, 25);
    passwordMatch(password, password2);
  } else {
    checkRequiredFields([email, password]); 
  }
  checkEmail(email); 
  console.log('Submitted'); 
})
