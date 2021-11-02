/* Metadata : 
Auteur (github) : alcapitan
Nom du module : Kernel ATUI
Version : dev2
*/

/* Notifications */

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

/*notificationMessage('1e notif','Coucou..');
notificationMessage('2e notif','.. Milan !');*/

/* Browser compatibility */

atuiBanIE = document.getElementById('atuiBoot');
//renvoie version de IE ou false, si le navigateur n'est pas IE
function IEdetection()
{
     var ua = window.navigator.userAgent;
     var msie = ua.indexOf('MSIE ');
     if (msie > 0)
     {
          // IE 10 ou plus ancien, renvoie le nombre de version
          return ('IE ' + parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10));
     }
     var trident = ua.indexOf('Trident/');
     if (trident > 0)
     {
          // IE 11, renvoie le nombre de version
          var rv = ua.indexOf('rv:');
              return ('IE ' + parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10));
     }
     var edge = ua.indexOf('Edge/');
     if (edge > 0) {
          //Edge (IE 12+), renvoie le nombre de version
          return ('IE ' + parseInt(ua.substring(
          edge + 5, ua.indexOf('.', edge)), 10));
     }
     // L'utilisateur utilise un autre navigateur
     return ('Not IE');
}
var result = IEdetection();
console.log(result);
if (result != "Not IE")
{
     atuiBanIE.style.display = "block";
}

/* Display mode */

var modeVisuel = document.getElementsByClassName('modeVisuel');
var atuiHeader = document.getElementById('atuiHeader').childNodes[1];
function modeSombre()
{
     console.log('Mode Sombre appliqué');
     modeVisuel[0].style.display  = "none";
     modeVisuel[1].style.display  = "block";
     document.childNodes[1].childNodes[2].style.filter = "brightness(0.5)";
     document.childNodes[1].childNodes[2].style.backgroundColor = "#404040";
     atuiHeader.style.backgroundColor = "#5557";
}
function modeClair()
{
     console.log('Mode Clair appliqué');
     modeVisuel[0].style.display  = "block";
     modeVisuel[1].style.display  = "none";
     document.childNodes[1].childNodes[2].style.filter = "brightness(1)";
     document.childNodes[1].childNodes[2].style.backgroundColor = "#FFFFFF";
     atuiHeader.style.backgroundColor = "#FFF7";
}
modeVisuel[0].style.display  = 'block';

/* Selector */

var atuiNavIcon = document.getElementById('atuiNavStyleFloatingLeft').childNodes[1];
var atuiNavBar = document.getElementById('atuiNavStyleFloatingLeft').childNodes[3];
var atuiNavBarDisplay = "none";
atuiNavIcon.addEventListener('click', event =>
{
     if (atuiNavBarDisplay == "block")
     {
          atuiNavBar.style.display = "none";
          atuiNavBarDisplay = "none";
          return;
     }
     if (atuiNavBarDisplay == "none")
     {
          atuiNavBar.style.display = "block";
          atuiNavBarDisplay = "block";
          return;
     }
});