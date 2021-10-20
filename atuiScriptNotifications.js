var centerNotification = document.getElementById("atuiNotificationsCenter");

/* Messages */

function notificationMessage(title,text)
{
    var elementNotification = document.createElement('aside');
    elementNotification.classList.add("atuiNotifications")
    var elementNotificationTitle = document.createElement('h3');
    elementNotificationTitle.textContent = 'Title';
    var elementNotificationText = document.createElement('p');
    elementNotificationText.textContent = 'Text. Coucou Milan !';
    elementNotification.appendChild(elementNotificationTitle);
    elementNotification.appendChild(elementNotificationText);
    centerNotification.appendChild(elementNotification);
}

notificationMessage();