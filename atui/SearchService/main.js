/* Metadata : 
Auteur (github) : alcapitan
Nom du module : Search Service
Version : dev2
*/


atuiSearchService_HeaderGenerateinfoRecentsearches = ["satisfied drop room","era assumption grow","score wheel shaft","veil crossing inhabitant","ratio spoil freedom"]
atuiSearchService_HeaderGenerateinfoSuggestedsearches = ["charter gutter merit","meaning presidency maze","different federation zone","realize praise doctor","network atmosphere last"]

function atuiSearchService_HeaderGenerateinfo(element)
{
     /* Recent searches */
     atuiSearchService_HeaderGenerateinfoRecentsearchesContainer = element.childNodes[1].childNodes[3];
     atuiSearchService_HeaderGenerateinfoRecentsearchesContainer.textContent = "";
     for (let counter in atuiSearchService_HeaderGenerateinfoRecentsearches)
     {
          var atuiSearchService_HeaderGenerateinfoRecentsearchesNewlink = document.createElement("a");
          var atuiSearchService_HeaderGenerateinfoRecentsearchesNewlinkText = document.createTextNode(atuiSearchService_HeaderGenerateinfoRecentsearches[counter]);
          atuiSearchService_HeaderGenerateinfoRecentsearchesNewlink.appendChild(atuiSearchService_HeaderGenerateinfoRecentsearchesNewlinkText);
          atuiSearchService_HeaderGenerateinfoRecentsearchesNewlink.src = "#";
          atuiSearchService_HeaderGenerateinfoRecentsearchesContainer.appendChild(atuiSearchService_HeaderGenerateinfoRecentsearchesNewlink);
     }
     /* Suggested searches */
     atuiSearchService_HeaderGenerateinfoSuggestedsearchesContainer = element.childNodes[3].childNodes[3];
     atuiSearchService_HeaderGenerateinfoSuggestedsearchesContainer.textContent = "";
     for (let counter in atuiSearchService_HeaderGenerateinfoSuggestedsearches)
     {
          var atuiSearchService_HeaderGenerateinfoSuggestedsearchesNewlink = document.createElement("a");
          var atuiSearchService_HeaderGenerateinfoSuggestedsearchesNewlinkText = document.createTextNode(atuiSearchService_HeaderGenerateinfoSuggestedsearches[counter]);
          atuiSearchService_HeaderGenerateinfoSuggestedsearchesNewlink.appendChild(atuiSearchService_HeaderGenerateinfoSuggestedsearchesNewlinkText);
          atuiSearchService_HeaderGenerateinfoSuggestedsearchesNewlink.src = "#";
          atuiSearchService_HeaderGenerateinfoSuggestedsearchesContainer.appendChild(atuiSearchService_HeaderGenerateinfoSuggestedsearchesNewlink);
     }
}


function atuiSearchService_HeaderDevelop(element,wish)
{
     searchBarHeaderBar = element.childNodes[1];
     searchBarHeaderExtras = element.childNodes[3];
     if (!wish)
     {
          element.style.position = "relative";
          element.style.backgroundColor = "transparent";
          element.style.boxShadow = "none";
          searchBarHeaderBar.style.width = "100%";
          searchBarHeaderBar.style.margin = "0px";
          searchBarHeaderExtras.style.display = "none";
     }
     else
     {
          element.style.position = "absolute";
          element.style.backgroundColor = "var(--atuiDefaultColor)";
          element.style.boxShadow = "rgba(0, 0, 0, 0.07) 0 1px 2px, rgba(0, 0, 0, 0.07) 0 2px 4px, rgba(0, 0, 0, 0.07) 0 4px 8px, rgba(0, 0, 0, 0.07) 0 8px 16px, rgba(0, 0, 0, 0.07) 0 16px 32px, rgba(0, 0, 0, 0.07) 0 32px 64px";
          searchBarHeaderBar.style.width = "calc(100% - 20px)";
          searchBarHeaderBar.style.margin = "10px";
          atuiSearchService_HeaderGenerateinfo(searchBarHeaderExtras);
          searchBarHeaderExtras.style.display = "block";
     }
}

document.getElementById("atuiSearchServices_Header").addEventListener("mouseover",function(){atuiSearchService_HeaderDevelop(this,true);});
document.getElementById("atuiSearchServices_Header").addEventListener("mouseout",function(){atuiSearchService_HeaderDevelop(this,false);});

