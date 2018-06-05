/* Demo alert notification: alert box appears onload, closes when clicked.*/

const alertDiv = document.getElementById('alertDiv');
const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', ()=> {
  alertDiv.style.display = 'none';
});


/* Notification icon on bell in header- green alert dot
Exceeds: display at least 2 notifications when the user clicks the alert icon*/

const notificationAlert = document.querySelector('.notification');
let newNotification = 2;
const bell = document.getElementById('bell');
const notificationMenu = document.getElementById('notificationMenu');

/*add a green alert if new notifications exist */
function setNotificationAlert() {
  if (newNotification > 0) {
    newNotification.style.opacity = 100;
  } else {
    newNotification.style.opacity = 0;
  }
}

bell.addEventListener('click', ()=> {
  if (notificationMenu.classList.length == 0) {
    notificationMenu.classList.add("notification-menu");
}
/*needs to add children in here with the notification info instead of in the html*/
});



// var el = document.querySelector('.notification');
//
// document.querySelector('button').addEventListener('click', function(){
//     var count = Number(el.getAttribute('data-count')) || 2;
//     el.setAttribute('data-count', count + 1);
//     el.classList.remove('notify');
//     el.offsetWidth = el.offsetWidth;
//     el.classList.add('notify');
//     if(count === 0){
//         el.classList.add('show-count');
//     }
// }, false);
