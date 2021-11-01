/* Metadata : 
Auteur (github) : alcapitan
Nom du module : Server Exchanges
Version : dev2
*/

/* Actions sur le compte */

var atuiCompteAvatar = document.getElementById('atuiSettingsAccount').childNodes[1];
var atuiCompteBar = document.getElementById('atuiSettingsAccount').childNodes[3];
var atuiCompteBarDisplay = "none";
atuiCompteAvatar.addEventListener('click', event =>
{
     if (atuiCompteBarDisplay == "block")
     {
          atuiCompteBar.style.display = "none";
          atuiCompteBarDisplay = "none";
          return;
     }
     if (atuiCompteBarDisplay == "none")
     {
          atuiCompteBar.style.display = "block";
          atuiCompteBarDisplay = "block";
          return;
     }
});