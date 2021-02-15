/* Barre de chargement */

var readyState = document.readyState;
objetChargement = document.getElementById("chargement");
console.log(readyState);
if (document.readyState === 'loading')
{
     objetChargement.style.height = "0px";
}