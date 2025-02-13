const notification = document.getElementById('notification');

document.querySelector('#phoneNumber p').addEventListener('click',function(){
  const number = document.querySelector('#phoneNumber p').textContent;
  navigator.clipboard.writeText(number).then(function() {
    showNotification('Numéro copié dans le presse-papiers');
  }, function(err) {
    showNotification('Erreur de copie: ' + err);
  });
});

document.querySelectorAll('#mail p, #mail-icon').forEach(element => {
  element.addEventListener('click', function () {
    const mail = document.querySelector('#mail p').textContent;

    navigator.clipboard.writeText(mail).then(() => {
      showNotification('Adresse mail copiée dans le presse-papiers');
    }).catch(err => {
      showNotification('Erreur de copie: ' + err);
    });
  });
});

document.getElementById('notification').addEventListener('click',function(){
  notification.classList.add('no-hover');
  hideNotification();
  setTimeout(() => {
    notification.classList.remove('no-hover');
  }, 100);
});

const showNotification = (message) => {
  notification.textContent = message;
  notification.classList.remove('hidden');
  notification.classList.add('show');

  setTimeout(hideNotification, 5000); 
};

const hideNotification = () => {
  notification.classList.remove('show');
  notification.classList.add('hidden');
}

