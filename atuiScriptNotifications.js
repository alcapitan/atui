var centerNotification = document.getElementById("atuiNotificationsCenter");

/* Messages */

function notificationMessage(title,text)
{
    // Créer boite notification
    var elementNotification = document.createElement('aside');
    elementNotification.classList.add("atuiNotifications");

    // Titre
    var elementNotificationTitle = document.createElement('h3');
    elementNotificationTitle.textContent = title;

    // Texte
    var elementNotificationText = document.createElement('p');
    elementNotificationText.textContent = text;

    // Buttons
    var elementNotificationButtonsContainer = document.createElement('div');
    elementNotificationButtonsContainer.classList.add("atuiNotificationsButtonsContainer");

    var elementNotificationButtonAgree = document.createElement('button');
    elementNotificationButtonAgree.textContent = "J'accepte";
    elementNotificationButtonAgree.onclick = "a";
    elementNotificationButtonAgree.classList.add("atuiNotificationsButtonMain");

    var elementNotificationButtonDisagreeOne = document.createElement('button');
    elementNotificationButtonDisagreeOne.textContent = "Je refuse une fois";

    var elementNotificationButtonDisagreeAlways = document.createElement('button');
    elementNotificationButtonDisagreeAlways.textContent = "Je refuse pour toujours";

    // Icone Fermer
    var elementNotificationButtonFermer = document.createElement('img');
    elementNotificationButtonFermer.src = 'medias/icons/fermer fenêtre.png';
    elementNotificationButtonFermer.classList.add("atuiNotificationsButtonFermer");

    // Son Notification
    var atuiNotificationSound = new Audio('medias/musics/atuiNotification.mp3');

    // Insertion de l'élément
    elementNotification.appendChild(elementNotificationButtonFermer);
    elementNotification.appendChild(elementNotificationTitle);
    elementNotification.appendChild(elementNotificationText);
    elementNotification.appendChild(elementNotificationButtonsContainer);
    elementNotificationButtonsContainer.appendChild(elementNotificationButtonAgree);
    elementNotificationButtonsContainer.appendChild(elementNotificationButtonDisagreeOne);
    elementNotificationButtonsContainer.appendChild(elementNotificationButtonDisagreeAlways);
    centerNotification.appendChild(elementNotification);
    atuiNotificationSound.play();
}

notificationMessage('1e notif','Coucou..');
notificationMessage('2e notif','.. Milan !');