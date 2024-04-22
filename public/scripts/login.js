import cred from '/data/credentials.json' assert {type: 'json'};


const form = document.querySelector('#loginForm');
const email = document.querySelector('#floatingInput');
const password = document.querySelector('#floatingPassword');
const role = document.querySelector('#inputGroupSelect01');

function validateInput(email,password,role){
    let flag = false;
    if(email!=='' || password !==''){
        if(role === 'manager'){
            flag = (email === cred.manager.email && password === cred.manager.password);
        }
        else if(role === 'clerk'){
            flag = (email === cred.clerk.email && password === cred.clerk.password);
        }
        else if(role === 'staffs'){
            for(let staff of cred.staffs){
                console.log(staff.email, staff.password);
                if(staff.email === email && staff.password === password){
                    flag = true;
                    break;
                }
            }
        }
    }
    return flag;
}

form.addEventListener("submit", (event) => {

    const emailInput = email.value;
    const passwordInput = password.value;
    const roleInput = role.value;    
    let flag = validateInput(emailInput, passwordInput, roleInput);

    if (!flag) {
      // Then we prevent the form from being sent by canceling the event
      const errorDiv = document.querySelector('#loginError');
      errorDiv.classList.add('alert');
      errorDiv.classList.add('alert-danger');
      errorDiv.textContent = "Invalid Credentials, Please try again"
      event.preventDefault();
    }
  });


