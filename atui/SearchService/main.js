/* Metadata : 
Auteur (github) : alcapitan
Nom du module : Search Service
Version : dev2
*/


searchBarHeaderZone = document.getElementById("atuiSearchServices_Header");
searchBarHeaderBar = document.getElementById("atuiSearchServices_Header").childNodes[1];
searchBarHeaderExtras = document.getElementById("atuiSearchServices_Header").childNodes[3];

function atuiSearchService_HeaderDevelop()
{
     searchBarHeaderBar.style.width = "calc(100% - 20px)";
     searchBarHeaderBar.style.margin = "10px";
     searchBarHeaderExtras.style.display = "block";
}

function atuiSearchService_HeaderAntidevelop()
{
     searchBarHeaderBar.style.width = "100%";
     searchBarHeaderBar.style.margin = "0px";
     searchBarHeaderExtras.style.display = "none";
}

