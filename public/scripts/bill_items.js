import itemData from '../../data.json' assert {type: 'json'};

const form = document.querySelector('#billItemsForm');
const qtyInput = document.querySelector('input#qty');
const errorDiv = document.querySelector('#errorMsg');

function validateInput(id,quantity){
    flag = false;
    for(let item of itemData.items){
        if(item.id === id && item.quantity>= quantity){
            flag = true;
            break;
        }
    }
}

form.addEventListener("submit", (event) => {

    const qty = qtyInput.value;
    // let flag = validateInput(emailInput, passwordInput, roleInput);

    // if (!flag) {
    //   // Then we prevent the form from being sent by canceling the event
    //   const errorDiv = document.querySelector('#loginError');
    //   errorDiv.classList.add('alert');
    //   errorDiv.classList.add('alert-danger');
    //   errorDiv.textContent = "Invalid Credentials, Please try again"
    //   event.preventDefault();
    // }
  });
