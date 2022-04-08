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