/* Metadata */

const atuiSearchservice_Metadata = {
     name : "Search Service",
     author : "alcapitan (on GitHub)",
     version : "developer branch",
     website : "https://github.com/alcapitan/atui",
}
//atuiKernel_MetadataDisplay(atuiSearchservice_Metadata);


atuiSearchservice_HeaderGenerateinfoRecentsearches = [["satisfied drop room","https://www.at.ma"],["era assumption grow","https://www.at.ma"],["score wheel shaft","https://www.at.ma"],["veil crossing inhabitant","https://www.at.ma"],["ratio spoil freedom","https://www.at.ma"]]
atuiSearchservice_HeaderGenerateinfoSuggestedsearches = [["charter gutter merit","https://www.at.ma"],["meaning presidency maze","https://www.at.ma"],["different federation zone","https://www.at.ma"],["realize praise doctor","https://www.at.ma"],["network atmosphere last","https://www.at.ma"]]

function atuiSearchservice_HeaderGenerateinfo(element)
{
     /* Recent searches */
     atuiSearchservice_HeaderGenerateinfoRecentsearchesContainer = element.childNodes[1].childNodes[3];
     atuiSearchservice_HeaderGenerateinfoRecentsearchesContainer.textContent = "";
     for (let counter in atuiSearchservice_HeaderGenerateinfoRecentsearches)
     {
          const atuiSearchservice_HeaderGenerateinfoRecentsearchesNewlink = document.createElement("a");
          const atuiSearchservice_HeaderGenerateinfoRecentsearchesNewlinkText = document.createTextNode(atuiSearchservice_HeaderGenerateinfoRecentsearches[counter][0]);
          atuiSearchservice_HeaderGenerateinfoRecentsearchesNewlink.appendChild(atuiSearchservice_HeaderGenerateinfoRecentsearchesNewlinkText);
          atuiSearchservice_HeaderGenerateinfoRecentsearchesNewlink.setAttribute("href",atuiSearchservice_HeaderGenerateinfoRecentsearches[counter][1]);
          atuiSearchservice_HeaderGenerateinfoRecentsearchesContainer.appendChild(atuiSearchservice_HeaderGenerateinfoRecentsearchesNewlink);
     }
     /* Suggested searches */
     atuiSearchservice_HeaderGenerateinfoSuggestedsearchesContainer = element.childNodes[3].childNodes[3];
     atuiSearchservice_HeaderGenerateinfoSuggestedsearchesContainer.textContent = "";
     for (let counter in atuiSearchservice_HeaderGenerateinfoSuggestedsearches)
     {
          const atuiSearchservice_HeaderGenerateinfoSuggestedsearchesNewlink = document.createElement("a");
          const atuiSearchservice_HeaderGenerateinfoSuggestedsearchesNewlinkText = document.createTextNode(atuiSearchservice_HeaderGenerateinfoSuggestedsearches[counter][0]);
          atuiSearchservice_HeaderGenerateinfoSuggestedsearchesNewlink.appendChild(atuiSearchservice_HeaderGenerateinfoSuggestedsearchesNewlinkText);
          atuiSearchservice_HeaderGenerateinfoSuggestedsearchesNewlink.setAttribute("href",atuiSearchservice_HeaderGenerateinfoRecentsearches[counter][1]);
          atuiSearchservice_HeaderGenerateinfoSuggestedsearchesContainer.appendChild(atuiSearchservice_HeaderGenerateinfoSuggestedsearchesNewlink);
     }
}


function atuiSearchservice_HeaderDevelop(element,wish)
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
          atuiSearchservice_HeaderGenerateinfo(searchBarHeaderExtras);
          searchBarHeaderExtras.style.display = "block";
     }
}

document.getElementById("atuiSearchservices_Header").addEventListener("mouseenter",function(){atuiSearchservice_HeaderDevelop(this,true);});
document.getElementById("atuiSearchservices_Header").addEventListener("mouseleave",function(){atuiSearchservice_HeaderDevelop(this,false);});

