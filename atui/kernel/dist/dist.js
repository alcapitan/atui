"use strict";var p=Object.defineProperty;var a=(e,n)=>p(e,"name",{value:n,configurable:!0});/*!
* ATUI v0.4.0 (https://github.com/alcapitan/atui)
* This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
*/const atuiKernel_Metadata={name:"ATUI",author:"alcapitan (on GitHub)",version:"v0.4.0",website:"https://github.com/alcapitan/atui",in_development:!0};atuiKernel_MetadataDisplay(atuiKernel_Metadata);function atuiKernel_MetadataDisplay(e){console.group("Metadata of "+e.name),console.log("Author : "+e.author),console.log("Version : "+e.version),console.log("Website : "+e.website),console.groupEnd()}a(atuiKernel_MetadataDisplay,"atuiKernel_MetadataDisplay");function findElement(e,n){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(e.querySelectorAll(n).length===1)return e.querySelector(n);if(e.querySelectorAll(n).length>1){let o=[];for(let r=0;r<e.querySelectorAll(n).length;r++)o.push(e.querySelectorAll(n)[r]);return o}else{if(Array.from(document.querySelectorAll(n)).includes(e))return e;if(Array.from(document.querySelectorAll(l)).includes(e))return console.error(`No "${n}" element was found in "${l}".`),null;if(e.parentNode===null)console.error(`No "${n}" element was found in the webpage.`);else return findElement(e.parentNode,n,l)}}a(findElement,"findElement");function convertTime(e){let n=Math.floor(e/3600),l=Math.floor(e%3600/60),o=Math.floor(e%60);return o<10&&(o="0"+o),n?(l<10&&(l="0"+l),n+":"+l+":"+o):l+":"+o}a(convertTime,"convertTime");function atuiKernel_ClipboardCopy(e){navigator.clipboard.writeText(e)}a(atuiKernel_ClipboardCopy,"atuiKernel_ClipboardCopy");function atuiKernel_ClipboardPaste(){navigator.clipboard.readText().then(e=>e)}a(atuiKernel_ClipboardPaste,"atuiKernel_ClipboardPaste");try{const e=document.getElementById("atuiKernel_Header"),n=e.childNodes[1];e.style.minHeight=n.clientHeight+"px";const l=e.childNodes[3];if(document.documentElement.clientWidth>767){const o=l.clientHeight+n.clientHeight*2;l.style.height=o+"px"}l.style.paddingTop=n.clientHeight+"px"}catch{}function atuiKernel_ToolsSettingsDisplaymodeChange(){const e=document.getElementById("atuiKernel_ToolsSettingsDisplaymode").querySelector("i");atuiKernel_ToolsSettingsDisplaymodeStatus?(atuiKernel_ToolsSettingsDisplaymodeStatus=!1,e.classList.replace("ti-sun","ti-moon"),e.setAttribute("alt","Enable light mode"),atuiKernel_ColorschemeGeneratorAuto(void 0)):(atuiKernel_ToolsSettingsDisplaymodeStatus=!0,e.classList.replace("ti-moon","ti-sun"),e.setAttribute("alt","Enable dark mode"),atuiKernel_ColorschemeGeneratorAuto(void 0))}a(atuiKernel_ToolsSettingsDisplaymodeChange,"atuiKernel_ToolsSettingsDisplaymodeChange");let atuiKernel_ToolsSettingsDisplaymodeStatus=!0;try{document.getElementById("atuiKernel_ToolsSettingsDisplaymode").querySelector("i").addEventListener("click",atuiKernel_ToolsSettingsDisplaymodeChange)}catch{}function atuiKernel_ColorschemeGenerator(e,n,l){let o=[];for(let i=0;i<3;i++)o.push(e[i]);for(let i=0;i<3;i++)o.push(255-e[i]);let r=[];for(let i=0;i<6;i++)r.push(o[i]/5);let t=[[0,0,0]];for(let i=1;i<5;i++){let u=[];for(let c=0;c<3;c++)u.push(Math.round(r[c]*i));t.push(u)}t.push([Math.round(e[0]),Math.round(e[1]),Math.round(e[2])]);for(let i=1;i<5;i++){let u=[];for(let c=0;c<3;c++)u.push(Math.round(e[c]+r[c+3]*i));t.push(u)}t.push([255,255,255]),n&&(t=t.reverse());const s=document.documentElement;for(let i=0;i<11;i++){let u=i;i==10&&(u="F");let c,d;l?(c="rgba("+t[i][0]+","+t[i][1]+","+t[i][2]+","+.8+")",d="B"):(c="rgb("+t[i][0]+","+t[i][1]+","+t[i][2]+")",d="O");let m;e.toString()==[127.5,127.5,127.5].toString()?m="B":(m="A",document.querySelector("meta[name=theme-color]").setAttribute("content","rgb("+t[5][0]+","+t[5][1]+","+t[5][2]+")"));const f="--atuiKernel_Colorscheme"+d+m+u;s.style.setProperty(f,c)}}a(atuiKernel_ColorschemeGenerator,"atuiKernel_ColorschemeGenerator");function atuiKernel_ColorschemeGeneratorPack(e,n,l){e&&(atuiKernel_ColorschemeGenerator([127.5,127.5,127.5],l,!1),atuiKernel_ColorschemeGenerator([127.5,127.5,127.5],l,!0)),n!=null&&(atuiKernel_ColorschemeGenerator(n,l,!1),atuiKernel_ColorschemeGenerator(n,l,!0))}a(atuiKernel_ColorschemeGeneratorPack,"atuiKernel_ColorschemeGeneratorPack");let defaultAccent=[230,51,0];function atuiKernel_ColorschemeGeneratorAuto(e){e!=null&&(defaultAccent=e),atuiKernel_ColorschemeGeneratorPack(!0,defaultAccent,atuiKernel_ToolsSettingsDisplaymodeStatus)}a(atuiKernel_ColorschemeGeneratorAuto,"atuiKernel_ColorschemeGeneratorAuto"),atuiKernel_ColorschemeGeneratorAuto(void 0);try{const e=document.getElementById("atuiKernel_FooterInfo")}catch{}function atuiKernel_FooterLastedited(e,n,l){const o=new Date;(o.getDate()!=e||o.getMonth()+1!=n||o.getFullYear()!=l)&&atuiKernel_Metadata.in_development&&console.warn("The last modification date isn't up to date. ");const r=document.createElement("a");r.setAttribute("href",atuiKernel_Metadata.website),r.setAttribute("target","_blank"),r.innerHTML="This website uses "+atuiKernel_Metadata.name+" "+atuiKernel_Metadata.version+" . ",atuiKernel_FooterInfo.appendChild(r);const t=document.createElement("a");n=["january","february","march","april","may","june","july","august","september","october","november","december"][n-1],t.innerHTML="Latest modification on "+e+" "+n+" "+l+". ",t.setAttribute("href","./atui/kernel/about.html"),t.setAttribute("target","_blank"),atuiKernel_FooterInfo.insertBefore(t,atuiKernel_FooterInfo.firstChild)}a(atuiKernel_FooterLastedited,"atuiKernel_FooterLastedited");try{const e=document.getElementById("atuiKernel_Notification")}catch{}function atuiKernel_NotificationDisplay(e,n,l,o,r){const t=document.createElement("aside");t.classList.add("atuiKernel_NotificationElement");const s=document.createElement("div"),i=document.createElement("div"),u=new Audio("atui/kernel/assets/notification.mp3"),c=document.createElement("h3");c.textContent=o;const d=document.createElement("i");d.classList.add("ti","ti-x"),d.addEventListener("click",function(){return atuiKernel_NotificationClose(t),console.log("close")});const m=document.createElement("p");if(m.textContent=r,n=="default"&&(e=="normal"?n=[]:e=="alert"?n=["Ok","Annuler"]:e=="caution"?n=["Ok","Annuler"]:e=="confirmation"?n=["Oui","Non"]:e=="information"?n=["Ok"]:e=="insertion"&&(n="insertion")),n!="insertion")for(let f=0;f<n.length;f++){const h=document.createElement("button");h.textContent=n[f],h.addEventListener("click",function(){return atuiKernel_NotificationClose(t),l[f]}),i.appendChild(h)}else document.createElement("input").setAttribute("type","text");s.appendChild(atuiKernel_NotificationElementHeaderTypeImg),s.appendChild(c),s.appendChild(d),t.appendChild(s),t.appendChild(m),t.appendChild(i),atuiKernel_Notification.appendChild(t),u.play(),e=="normal"&&setTimeout(function(){atuiKernel_NotificationClose(t)},5e3)}a(atuiKernel_NotificationDisplay,"atuiKernel_NotificationDisplay");function atuiKernel_NotificationClose(e){e.remove()}a(atuiKernel_NotificationClose,"atuiKernel_NotificationClose");function atuiKernel_NotificationCookies(){atuiKernel_NotificationDisplay("cookies",["I agree","I disagree this time","I disagree definitely","Read more"],["console.log('accept')","console.log('not accept')","console.log('always not accept')","console.log('doc')"],"Accept cookies ?","This site uses trackers that collect information about you. According to the GDPR, you can express your consent to the use of cookies.")}a(atuiKernel_NotificationCookies,"atuiKernel_NotificationCookies");function atuiKernel_ToolsContextmenuDisplay(e,n,l){const o=e.childNodes[3];if(e=e.childNodes[1],!n)o.style.visibility="hidden",o.style.top="0",o.style.left="0",e.style.fontWeight="normal",e.style.textDecoration="none";else{e.style.fontWeight="bold",e.style.textDecoration="underline";let r,t,s,i;l?(r=20,i=o.getBoundingClientRect().y,t=e.getBoundingClientRect().y+20,t+o.clientHeight>window.innerHeight&&(t=t-o.clientHeight),t=t-i):(s=o.getBoundingClientRect().x,i=o.getBoundingClientRect().y,r=e.getBoundingClientRect().x+20,t=e.getBoundingClientRect().y+20,r+o.clientWidth>document.documentElement.clientWidth&&(r=r-o.clientWidth),r=r-s,t+o.clientHeight>window.innerHeight&&(t=t-o.clientHeight),t=t-i),r=r+"px",o.style.left=r,t=t+"px",o.style.top=t,o.style.visibility="visible"}}a(atuiKernel_ToolsContextmenuDisplay,"atuiKernel_ToolsContextmenuDisplay");function atuiKernel_ToolsContextmenu(e){document.getElementById(e).addEventListener("mouseenter",function(){atuiKernel_ToolsContextmenuDisplay(this,!0,!1)}),document.getElementById(e).addEventListener("mouseleave",function(){atuiKernel_ToolsContextmenuDisplay(this,!1,void 0)})}a(atuiKernel_ToolsContextmenu,"atuiKernel_ToolsContextmenu");function atuiKernel_NavigationGlobalpanel(e){document.getElementById(e).addEventListener("mouseover",function(){atuiKernel_ToolsContextmenuDisplay(this,!0,!0)}),document.getElementById(e).addEventListener("mouseout",function(){atuiKernel_ToolsContextmenuDisplay(this,!1,!0)})}a(atuiKernel_NavigationGlobalpanel,"atuiKernel_NavigationGlobalpanel");function atuiKernel_ToolsInfotip(e){document.getElementById(e).addEventListener("mouseenter",function(){atuiKernel_ToolsContextmenuDisplay(this,!0,!1)}),document.getElementById(e).addEventListener("mouseleave",function(){atuiKernel_ToolsContextmenuDisplay(this,!1,void 0)})}a(atuiKernel_ToolsInfotip,"atuiKernel_ToolsInfotip"),document.querySelectorAll(".atuiKernel_SectionTabs").forEach(e=>{const l=e.querySelector(".atuiKernel_SectionTabsHeader").querySelectorAll("a"),r=e.querySelector(".atuiKernel_SectionTabsContent").querySelectorAll("div");l.forEach(t=>{t.addEventListener("click",()=>{l.forEach(s=>{s.classList.remove("optionActive")}),r.forEach(s=>{s.classList.remove("optionActive")}),t.classList.add("optionActive"),document.getElementById(t.getAttribute("data-tabs-assign")).classList.add("optionActive")})})}),document.querySelectorAll(".atuiKernel_SectionAccordion").forEach(e=>{const n=e.querySelector("header"),l=n.querySelector("i"),o=e.querySelector("section");n.addEventListener("click",()=>{window.getComputedStyle(o).display==="none"?(o.style.display="block",l.style.transform="rotate(180deg)"):window.getComputedStyle(o).display==="block"?(o.style.display="none",l.style.transform="rotate(0deg)"):console.error("An unexpected error has occurred.")})});
//# sourceMappingURL=dist.js.map
