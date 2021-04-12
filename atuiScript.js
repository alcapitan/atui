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
modeVisuel[0].style.display  = "block";