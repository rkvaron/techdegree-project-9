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
const messageButton = document.getElementById('messageButton');
const confirmMessage = "Your message was sent.";
const denyMessage = "Please fill out both the user name and the message fields to send a message.";



messageButton.addEventListener('click', (e) => {

let input = document.getElementById('user_search').value;
let textarea = document.getElementById('comments').value;

  e.preventDefault();
  

  if(input == null || input == "") {
    submitP.classList.add("tool");
    console.log(" missing user");
    submitP.setAttribute('data-tip', denyMessage);
    return;
    } else if(textarea == null || textarea == "") {
      submitP.classList.add("tool");
    console.log(" missing message");
    submitP.setAttribute('data-tip', denyMessage);
    return;
    } else if(input != "" && textarea != "") {
      console.log("working!");
      document.getElementById('user_search').value= ' ';
      document.getElementById('comments').value = ' ';
      submitP.classList.add("tool");
      submitP.setAttribute('data-tip', confirmMessage);
    }
  
});