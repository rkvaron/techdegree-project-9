/* Demo alert notification: alert box appears onload, closes when clicked.*/

const alertDiv = document.getElementById('alertDiv');
const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', ()=> {
  alertDiv.style.display = 'none';
});

/* Notification drop down menu click on and off*/

const notificationAlert = document.querySelector('.notification'); //parent div of myDropdown
let newNotification = 2;
const bell = document.getElementById('bell'); //svg only
const dropdown = document.getElementById('myDropdown');
const triangle = document.getElementById('triangle');


/* Notification icon on bell in header
Exceeds: display at least 2 notifications when the user clicks the alert icon*/


function showNotifications() {
    dropdown.classList.add("show");
    triangle.classList.add("show");
}

bell.addEventListener('click', ()=> {
  showNotifications();
});



notificationAlert.addEventListener('mouseleave', () => {
        dropdown.classList.remove("show");
        triangle.classList.remove("show");
      });


/* timezone change color of selection */
const timezone = document.getElementById('timezone');

function changeTimezoneColor() {
  timezone.style.color = '#555';
}

timezone.addEventListener('click', ()=> {
  changeTimezoneColor();
});

/* Nav menu selected item changes when clicked */



/* setting variables for the Message User form */

const messageform = document.getElementById('messageUser');
const submitP = document.getElementById('submit_message');
const input = document.getElementById('user_search');
const textarea = document.getElementById('comments');
const messageButton = document.getElementById('messageButton');



/* Form Validation for messageUser */

function validateForm(e) {
    
        // add tooltip here?? 
        //<span class="tool" data-tip="Please enter the user's name." tabindex="1"></span>
    }




/* onSubmit messageUser form gives confirmation message to user */


messageform.addEventListener('submit', (e) => {
  let x = input.value;
    let y = textarea.value;
    e.preventDefault();
    if (x || y == "") {
      console.log("missing input");
      //show tooltip to add in an input
    } else {

  input.value = '';
  textarea.value = '';
  submitP.innerHTML = "Your message has been sent.";
    }
  
});
