document.querySelector("#phoneNumber p").addEventListener('click',function(){
  var number = document.querySelector("#phoneNumber p").textContent;
  navigator.clipboard.writeText(number).then(function() {
    showNotification('Numéro copié dans le presse-papiers');
  }, function(err) {
    showNotification('Erreur de copie: ' + err);
  });
});

function showNotification(message) {
  var notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.remove('hidden');
  notification.classList.add('show');

  setTimeout(function() {
    notification.classList.remove('show');
    notification.classList.add('hidden');
  }, 5000); 
}