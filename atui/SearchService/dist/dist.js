"use strict";var o=Object.defineProperty;var r=(e,s)=>o(e,"name",{value:s,configurable:!0});/*!
* ATUI v0.4.0 (https://github.com/alcapitan/atui)
* This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
*/const atuiSearchservices_Metadata={name:"Search Service",author:"alcapitan (on GitHub)",version:"v0.4.0",website:"https://github.com/alcapitan/atui",in_development:!1};function atuiSearchservices_HeaderDevelop(e,s){const t=document.getElementById("atuiSearchservices_HeaderBar"),a=document.getElementById("atuiSearchservices_HeaderPropositions"),i=document.getElementById("atuiSearchservices_Input");s?(t.style.width="calc(100% - 20px)",t.style.margin="10px",a.style.display="block",e.style.position="absolute",document.documentElement.clientWidth<=767&&(i.style.display="inline",t.style.backgroundColor="hsl(var(--atuiKernel_Color-NFF))",t.style.border="1px hsl(var(--atuiKernel_Color-N70)) solid"),e.style.backgroundColor="hsl(var(--atuiKernel_Color-A70))",e.style.boxShadow="var(--atuiKernel_ShadowMedium)",atuiSearchservices_HeaderPropositionsGenerate()):(t.style.width="100%",t.style.margin="0px",document.documentElement.clientWidth<=767&&(t.style.border="",t.style.backgroundColor="transparent",i.style.display="none"),a.style.display="none",e.style.position="initial",e.style.left="",e.style.right="",e.style.backgroundColor="transparent",e.style.boxShadow="none")}r(atuiSearchservices_HeaderDevelop,"atuiSearchservices_HeaderDevelop"),document.getElementById("atuiSearchservices_Header").addEventListener("mouseenter",function(){atuiSearchservices_HeaderDevelop(this,!0)}),document.getElementById("atuiSearchservices_Header").addEventListener("mouseleave",function(){atuiSearchservices_HeaderDevelop(this,!1)});const atuiSearchservices_HeaderPropositionsRecentInfos=[["satisfied drop room","https://www.at.ma"],["era assumption grow","https://www.at.ma"],["score wheel shaft","https://www.at.ma"],["veil crossing inhabitant","https://www.at.ma"],["ratio spoil freedom","https://www.at.ma"]],atuiSearchservices_HeaderPropositionsSuggestedInfos=[["charter gutter merit","https://www.at.ma"],["meaning presidency maze","https://www.at.ma"],["different federation zone","https://www.at.ma"],["realize praise doctor","https://www.at.ma"],["network atmosphere last","https://www.at.ma"]];function atuiSearchservices_HeaderPropositionsGenerate(){try{let e=document.getElementById("atuiSearchservices_HeaderPropositionsRecentContainer");e.textContent="";for(let s in atuiSearchservices_HeaderPropositionsRecentInfos){const t=document.createElement("a"),a=document.createTextNode(atuiSearchservices_HeaderPropositionsRecentInfos[s][0]);t.appendChild(a),t.setAttribute("href",atuiSearchservices_HeaderPropositionsRecentInfos[s][1]),e.appendChild(t)}}catch{}try{let e=document.getElementById("atuiSearchservices_HeaderPropositionsSuggestedContainer");e.textContent="";for(let s in atuiSearchservices_HeaderPropositionsSuggestedInfos){const t=document.createElement("a"),a=document.createTextNode(atuiSearchservices_HeaderPropositionsSuggestedInfos[s][0]);t.appendChild(a),t.setAttribute("href",atuiSearchservices_HeaderPropositionsRecentInfos[s][1]),e.appendChild(t)}}catch{}}r(atuiSearchservices_HeaderPropositionsGenerate,"atuiSearchservices_HeaderPropositionsGenerate");
//# sourceMappingURL=dist.js.map
