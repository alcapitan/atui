var centerNotification = document.getElementById("atuiNotificationsCenter");

/* Messages */

function notificationMessage(title,text)
{
    var elementNotification = document.createElement('aside');
    elementNotification.classList.add("atuiNotifications")
    var elementNotificationTitle = document.createElement('h3');
    elementNotificationTitle.textContent = title;
    var elementNotificationText = document.createElement('p');
    elementNotificationText.textContent = text;
    var elementNotificationButtonOk = document.createElement('button');
    elementNotificationButtonOk.textContent = "Ok";
    var elementNotificationButtonBtnFermer = document.createElement('img');
    elementNotificationButtonBtnFermer.setAttribute('src','medias/icons/fermer fenêtre.png');
    elementNotificationButtonBtnFermer.getAttribute('src');
    elementNotification.appendChild(elementNotificationTitle);
    elementNotification.appendChild(elementNotificationText);
    elementNotification.appendChild(elementNotificationButtonOk);
    elementNotification.appendChild(elementNotificationBtnFermer);
    centerNotification.appendChild(elementNotification);
}

notificationMessage('1e notif','Coucou..');
notificationMessage('2e notif','.. Milan !');