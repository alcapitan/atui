/* Metadata : 
Auteur (github) : alcapitan
Nom du module : Search Service
Version : dev2
*/


function atuiSearchService_HeaderDevelop(element,wish)
{
     searchBarHeaderBar = element.childNodes[1];
     searchBarHeaderExtras = element.childNodes[3];
     if (wish == false)
     {
          element.style.backgroundColor = "transparent";
          searchBarHeaderBar.style.width = "100%";
          searchBarHeaderBar.style.margin = "0px";
          searchBarHeaderExtras.style.display = "none";
     }
     else
     {
          element.style.backgroundColor = "var(--atuiDefaultColor)";
          searchBarHeaderBar.style.width = "calc(100% - 20px)";
          searchBarHeaderBar.style.margin = "10px";
          searchBarHeaderExtras.style.display = "block";
     }
}

document.getElementById("atuiSearchServices_Header").addEventListener("mouseover",function(){atuiSearchService_HeaderDevelop(this,true);});
document.getElementById("atuiSearchServices_Header").addEventListener("mouseout",function(){atuiSearchService_HeaderDevelop(this,false);});

