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
var atuiAside = document.getElementById('atuiAside');
var atuiPresentation = document.getElementById('atuiPresentation');
var atuiFooter = document.getElementById('atuiFooter');
var atuiP = document.getElementsByTagName("p");
function modeSombre()
{
     console.log('Mode Sombre appliqué');
     modeVisuel[0].style.display  = "none";
     modeVisuel[1].style.display  = "block";
     atuiAside.style.backgroundColor = "#4d4d4d70";
     document.childNodes[1].childNodes[2].style.backgroundColor = "#4d4d4d";
     atuiPresentation.style.filter = "brightness(0.5)";
     atuiFooter.style.backgroundColor = "#808080";
     atuiP.style.color = "white";
}
function modeClair()
{
     console.log('Mode Clair appliqué');
     modeVisuel[0].style.display  = "block";
     modeVisuel[1].style.display  = "none";
     atuiAside.style.backgroundColor = "#FFFFFF70";
     document.childNodes[1].childNodes[2].style.backgroundColor = "#FFF";
     atuiPresentation.style.filter = "brightness(1)";
     atuiFooter.style.backgroundColor = "#c0c0c0";
     atuiP.style.color = "black";
}
modeVisuel[0].style.display  = "block";