/* Options profil */

var profil = document.getElementById('atuiProfil');
var profilSettings = document.getElementById('atuiProfilSettings');
var profilSettingsDisplay = "none";
profil.addEventListener('click', event =>
{
     if (profilSettingsDisplay == "block")
     {
          profilSettings.style.display = "none";
          profilSettingsDisplay = "none";
          return;
     }
     if (profilSettingsDisplay == "none")
     {
          profilSettings.style.display = "block";
          profilSettingsDisplay = "block";
          return;
     }
});

/* Mode clair/sombre */

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
modeVisuel[0].style.display  = "block";

/* Exclusion d'Internet Explorer */

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