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


function toggleNotifications() {
    dropdown.classList.toggle("show");
    triangle.classList.toggle("show");
}

bell.addEventListener('click', ()=> {
  toggleNotifications();
});

/* timezone change color of selection */
const timezone = document.getElementById('timezone');

function changeTimezoneColor() {
  timezone.style.color = '#555';
}

timezone.addEventListener('click', ()=> {
  changeTimezoneColor();
});
