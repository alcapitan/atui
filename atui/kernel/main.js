/* Metadata : 
Auteur (github) : alcapitan
Nom du module : Kernel ATUI
Version : dev2
*/

/* Notifications */

/*function atuiKernel_NotificationClose(element)
{
     element.remove();
}

var atuiKernel_Notification = document.getElementById("atuiKernel_Notification");
// Types availables : normal, alert, caution, confirmation, information, insertion
function atuiKernel_NotificationDisplay(type,buttons,actions,title,text)
{
     // Boite notification
     var atuiKernel_NotificationElement = document.createElement('aside');
     atuiKernel_NotificationElement.classList.add("atuiKernel_NotificationElement");
     var atuiKernel_NotificationElementHeader = document.createElement('div');
     var atuiKernel_NotificationElementFooter = document.createElement('div');

     // Type
     var atuiKernel_NotificationElementHeaderTypeImg = document.createElement('img');
     if (type != "normal")
     {
          atuiKernel_NotificationElementHeaderTypeImg.setAttribute("src","atui/kernel/medias/" + type + ".png");
     }
     else
     {
          atuiKernel_NotificationElementHeaderTypeImg.style.visibility = "hidden";
     }

     // Son
     var atuiKernel_NotificationElementSound = new Audio("atui/kernel/medias/notification.mp3");
     
     // Titre
     var atuiKernel_NotificationElementHeaderTitle = document.createElement('h3');
     atuiKernel_NotificationElementHeaderTitle.textContent = title;
     
     // Bouton fermer
     var atuiKernel_NotificationElementHeaderClose = document.createElement('img');
     atuiKernel_NotificationElementHeaderClose.setAttribute("src","atui/kernel/medias/close.png");
     atuiKernel_NotificationElementHeaderClose.addEventListener("click",function(){atuiKernel_NotificationClose(atuiKernel_NotificationElement);return(console.log("close"))});

     // Texte
     var atuiKernel_NotificationElementText = document.createElement('p');
     atuiKernel_NotificationElementText.textContent = text;

     // Bouttons d'actions
     if (buttons == 'default')
     {
          if (type == 'normal')
          {
               buttons = [];
          }
          else if (type == 'alert')
          {
               buttons = ['Ok','Annuler'];
          }
          else if (type == 'caution')
          {
               buttons = ['Ok','Annuler'];
          }
          else if (type == 'confirmation')
          {
               buttons = ['Oui','Non'];
          }
          else if (type == 'information')
          {
               buttons = ['Ok'];
          }
          else if (type == 'insertion')
          {
               buttons = 'insertion';
          }
     }
     if (buttons != 'insertion')
     {
          for (let counter = 0;counter < buttons.length;counter++)
          {
               var atuiKernel_NotificationElementFooterButton = document.createElement('button');
               atuiKernel_NotificationElementFooterButton.textContent = buttons[counter];
               atuiKernel_NotificationElementFooterButton.addEventListener("click",function(){atuiKernel_NotificationClose(atuiKernel_NotificationElement);return(actions[counter]);})
               atuiKernel_NotificationElementFooter.appendChild(atuiKernel_NotificationElementFooterButton);
          }
     }
     else
     {
          var atuiKernel_NotificationElementFooterInput = document.createElement('input');
          atuiKernel_NotificationElementFooterInput.setAttribute("type","text");
     }

     // Insertion des éléments dans HTML
     atuiKernel_NotificationElementHeader.appendChild(atuiKernel_NotificationElementHeaderTypeImg);
     atuiKernel_NotificationElementHeader.appendChild(atuiKernel_NotificationElementHeaderTitle);
     atuiKernel_NotificationElementHeader.appendChild(atuiKernel_NotificationElementHeaderClose);
     atuiKernel_NotificationElement.appendChild(atuiKernel_NotificationElementHeader);
     atuiKernel_NotificationElement.appendChild(atuiKernel_NotificationElementText);
     atuiKernel_NotificationElement.appendChild(atuiKernel_NotificationElementFooter);
     atuiKernel_Notification.appendChild(atuiKernel_NotificationElement);

     // Son joué
     atuiKernel_NotificationElementSound.play();

     // Attendre puis fermer la notification
     if (type == "normal")
     {
          setTimeout(function(){atuiKernel_NotificationClose(atuiKernel_NotificationElement)},5000);
     }
}

function atuiKernel_NotificationCookies()
{
     atuiKernel_NotificationDisplay("cookies",["J'accepte","Je refuse cette fois-ci","Je refuse définitivement","En savoir plus"],["console.log('accept')","console.log('not accept')","console.log('always notaccept')","console.log('doc')"],"Autoriser-vous les cookies ?","Ce site utilise des traceurs collectant des informations sur vous. Selon le RGPD, vous pouvez exprimer votre consentement à l'utilisation des cookies.");
}
atuiKernel_NotificationCookies();*/

/* Browser compatibility */

/*
atuiBanIE = document.getElementById('atuiKernel_PriorityBrowserCompatibility');
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
*/


/* Display mode */

var atuiKernel_ToolsSettingsDisplaymodeElement = document.getElementById("atuiKernel_ToolsSettingsDisplaymode").childNodes[1];
var atuiKernel_ToolsSettingsDisplaymodeRoot = document.documentElement;
var atuiKernel_ToolsSettingsDisplaymodeStatus = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
function atuiKernel_ToolsSettingsDisplaymodeChange()
{
     if (atuiKernel_ToolsSettingsDisplaymodeStatus)
     {
          atuiKernel_ToolsSettingsDisplaymodeStatus = false;
          atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("src","atui/kernel/medias/dark.png");
          atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("alt","Mode sombre activé");
          atuiKernel_ToolsSettingsDisplaymodeRoot.style.setProperty("--atuiKernel_ToolsSettingsDisplaymodeColor","rgb(102,102,102)");
          atuiKernel_ToolsSettingsDisplaymodeRoot.style.setProperty("--atuiKernel_ToolsSettingsDisplaymodeColorOpacity","rgb(102,102,102,0.8)");
     }
     else
     {
          atuiKernel_ToolsSettingsDisplaymodeStatus = true;
          atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("src","atui/kernel/medias/light.png");
          atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("alt","Mode clair activé");
          atuiKernel_ToolsSettingsDisplaymodeRoot.style.setProperty("--atuiKernel_ToolsSettingsDisplaymodeColor","rgb(255,255,255)");
          atuiKernel_ToolsSettingsDisplaymodeRoot.style.setProperty("--atuiKernel_ToolsSettingsDisplaymodeColorOpacity","rgb(255,255,255,0.8)");
     }
}
atuiKernel_ToolsSettingsDisplaymodeElement.addEventListener("click",atuiKernel_ToolsSettingsDisplaymodeChange);
if (!atuiKernel_ToolsSettingsDisplaymodeStatus)
{
     atuiKernel_ToolsSettingsDisplaymodeStatus = true;
     atuiKernel_ToolsSettingsDisplaymodeChange()
}


/* Selector */

function atuiKernel_ToolsSelectorDisplay(element,wish)
{
     cible = element.childNodes[3];
     element = element.childNodes[1];
     offsetTop = element.getBoundingClientRect().y + 20;
     offsetLeft = element.getBoundingClientRect().offsetLeft;
     if (wish == false)
     {
          cible.style.visibility = "hidden";
          element.style.fontWeight = "normal";
          element.style.textDecoration = "none";
     }
     else
     {
          element.style.fontWeight = "bold";
          element.style.textDecoration = "underline";
          /* Normal que ça marche pas, j'ai voulu mettre en commentaire après
          if (offsetLeft + cible.offsetWidth > document.body.clientWidth)
          {
               offsetLeft = document.body.clientWidth - cible.offsetWidth - 20;
          }
          if (offsetTop + cible.offsetHeight > window.innerHeight)
          {
               offsetTop = window.innerHeight - cible.offsetHeight - 20;
          }*/
          offsetTop = offsetTop + "px";
          offsetLeft = offsetLeft + "px";
          cible.style.top = offsetTop;
          cible.style.left = offsetLeft;
          cible.style.visibility = "visible";
     }
}

function atuiKernel_ToolsSelector(cible)
{
     document.getElementById(cible).addEventListener("mouseover",function(){atuiKernel_ToolsSelectorDisplay(this,true);});
     document.getElementById(cible).addEventListener("mouseout",function(){atuiKernel_ToolsSelectorDisplay(this,false);});     
}

atuiKernel_ToolsSelector("atuiKernel_NavigatorImg");
atuiKernel_ToolsSelector("atuiKernel_NavigatorText");


/* Global Panel */

function atuiKernel_NavigatorGlobalpanelDisplay(element,wish)
{
     cible = element.childNodes[3];
     element = element.childNodes[1];
     if (!wish)
     {
          cible.style.visibility = "hidden";
          element.style.fontWeight = "normal";
          element.style.textDecoration = "none";
     }
     else
     {
          element.style.fontWeight = "bold";
          element.style.textDecoration = "underline";
          offsetTop = element.offsetTop + 30;
          offsetTop = offsetTop + "px";
          cible.style.top = offsetTop;
          cible.style.visibility = "visible";
     }
}

function atuiKernel_NavigatorGlobalpanel(cible)
{
     document.getElementById(cible).addEventListener("mouseover",function(){atuiKernel_NavigatorGlobalpanelDisplay(this,true);});
     document.getElementById(cible).addEventListener("mouseout",function(){atuiKernel_NavigatorGlobalpanelDisplay(this,false);});     
}

atuiKernel_NavigatorGlobalpanel("atuiKernel_NavigatorGlobalpanel1");

