/* Metadata : 
Auteur (github) : alcapitan
Nom du module : Server Exchanges
Version : dev2
*/

/* Actions sur le compte */

var atuiCompteAvatar = document.getElementById('atuiServerExchanges_AccountActions').childNodes[1];
var atuiCompteBar = document.getElementById('atuiServerExchanges_AccountActions').childNodes[3];
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