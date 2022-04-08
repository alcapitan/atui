/* Metadata : 
Auteur (github) : alcapitan
Nom du module : Search Service
Version : dev2
*/


atuiSearchService_HeaderGenerateinfoRecentsearches = [["satisfied drop room","https://www.at.ma"],["era assumption grow","https://www.at.ma"],["score wheel shaft","https://www.at.ma"],["veil crossing inhabitant","https://www.at.ma"],["ratio spoil freedom","https://www.at.ma"]]
atuiSearchService_HeaderGenerateinfoSuggestedsearches = [["charter gutter merit","https://www.at.ma"],["meaning presidency maze","https://www.at.ma"],["different federation zone","https://www.at.ma"],["realize praise doctor","https://www.at.ma"],["network atmosphere last","https://www.at.ma"]]

function atuiSearchService_HeaderGenerateinfo(element)
{
     /* Recent searches */
     atuiSearchService_HeaderGenerateinfoRecentsearchesContainer = element.childNodes[1].childNodes[3];
     atuiSearchService_HeaderGenerateinfoRecentsearchesContainer.textContent = "";
     for (let counter in atuiSearchService_HeaderGenerateinfoRecentsearches)
     {
          var atuiSearchService_HeaderGenerateinfoRecentsearchesNewlink = document.createElement("a");
          var atuiSearchService_HeaderGenerateinfoRecentsearchesNewlinkText = document.createTextNode(atuiSearchService_HeaderGenerateinfoRecentsearches[counter][0]);
          atuiSearchService_HeaderGenerateinfoRecentsearchesNewlink.appendChild(atuiSearchService_HeaderGenerateinfoRecentsearchesNewlinkText);
          atuiSearchService_HeaderGenerateinfoRecentsearchesNewlink.setAttribute("href",atuiSearchService_HeaderGenerateinfoRecentsearches[counter][1]);
          atuiSearchService_HeaderGenerateinfoRecentsearchesContainer.appendChild(atuiSearchService_HeaderGenerateinfoRecentsearchesNewlink);
     }
     /* Suggested searches */
     atuiSearchService_HeaderGenerateinfoSuggestedsearchesContainer = element.childNodes[3].childNodes[3];
     atuiSearchService_HeaderGenerateinfoSuggestedsearchesContainer.textContent = "";
     for (let counter in atuiSearchService_HeaderGenerateinfoSuggestedsearches)
     {
          var atuiSearchService_HeaderGenerateinfoSuggestedsearchesNewlink = document.createElement("a");
          var atuiSearchService_HeaderGenerateinfoSuggestedsearchesNewlinkText = document.createTextNode(atuiSearchService_HeaderGenerateinfoSuggestedsearches[counter][0]);
          atuiSearchService_HeaderGenerateinfoSuggestedsearchesNewlink.appendChild(atuiSearchService_HeaderGenerateinfoSuggestedsearchesNewlinkText);
          atuiSearchService_HeaderGenerateinfoSuggestedsearchesNewlink.setAttribute("href",atuiSearchService_HeaderGenerateinfoRecentsearches[counter][1]);
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
          element.style.backgroundColor = "var(--atuiKernel_ToolsSettingsAccentcolor)";
          element.style.boxShadow = "var(--atuiKernel_Shadow)";
          searchBarHeaderBar.style.width = "calc(100% - 20px)";
          searchBarHeaderBar.style.margin = "10px";
          atuiSearchService_HeaderGenerateinfo(searchBarHeaderExtras);
          searchBarHeaderExtras.style.display = "block";
     }
}

document.getElementById("atuiSearchServices_Header").addEventListener("mouseenter",function(){atuiSearchService_HeaderDevelop(this,true);});
document.getElementById("atuiSearchServices_Header").addEventListener("mouseleave",function(){atuiSearchService_HeaderDevelop(this,false);});

