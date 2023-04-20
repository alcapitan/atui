"use strict";var g=Object.defineProperty;var l=(e,t)=>g(e,"name",{value:t,configurable:!0});/*!
* ATUI v0.4.0 (https://github.com/alcapitan/atui)
* This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
*/const atuiKernel_Metadata={name:"ATUI",author:"alcapitan (on GitHub)",version:"v0.4.0",website:"https://github.com/alcapitan/atui",in_development:!0};atuiKernel_MetadataDisplay(atuiKernel_Metadata);let defaultAccent=[230,51,0];function atuiKernel_MetadataDisplay(e){console.group("Metadata of "+e.name),console.log("Author : "+e.author),console.log("Version : "+e.version),console.log("Website : "+e.website),console.groupEnd()}l(atuiKernel_MetadataDisplay,"atuiKernel_MetadataDisplay");function findElement(e,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(e.querySelectorAll(t).length===1)return e.querySelector(t);if(e.querySelectorAll(t).length>1){let n=[];for(let r=0;r<e.querySelectorAll(t).length;r++)n.push(e.querySelectorAll(t)[r]);return n}else{if(Array.from(document.querySelectorAll(t)).includes(e))return e;if(Array.from(document.querySelectorAll(o)).includes(e))return console.error(`No "${t}" element was found in "${o}".`),null;if(e.parentNode===null)console.error(`No "${t}" element was found in the webpage.`);else return findElement(e.parentNode,t,o)}}l(findElement,"findElement");async function verifyLink(e){return!!(await fetch(e)).ok}l(verifyLink,"verifyLink");function convertTime(e){let t=Math.floor(e/3600),o=Math.floor(e%3600/60),n=Math.floor(e%60);return n<10&&(n="0"+n),t?(o<10&&(o="0"+o),t+":"+o+":"+n):o+":"+n}l(convertTime,"convertTime");function atuiKernel_ClipboardCopy(e){navigator.clipboard.writeText(e)}l(atuiKernel_ClipboardCopy,"atuiKernel_ClipboardCopy");function atuiKernel_ClipboardPaste(){return navigator.clipboard.readText()}l(atuiKernel_ClipboardPaste,"atuiKernel_ClipboardPaste");function atuiKernel_ShareTool(e,t,o){navigator.share({title:e,text:t,url:o})}l(atuiKernel_ShareTool,"atuiKernel_ShareTool");try{const e=document.getElementById("atuiKernel_Header"),t=e.childNodes[1];e.style.minHeight=t.clientHeight+"px";const o=e.childNodes[3];if(document.documentElement.clientWidth>767){const n=o.clientHeight+t.clientHeight*2;o.style.height=n+"px"}o.style.paddingTop=t.clientHeight+"px"}catch{}function atuiKernel_ColormodeIsDark(){return document.documentElement.getAttribute("data-atui-colormode")==="dark"}l(atuiKernel_ColormodeIsDark,"atuiKernel_ColormodeIsDark");function atuiKernel_ColormodeToggle(){document.querySelectorAll(".atuiKernel_ColormodeButton").forEach(n=>{atuiKernel_ColormodeIsDark()?(document.documentElement.setAttribute("data-atui-colormode","light"),n.classList.replace("ti-moon","ti-sun")):(document.documentElement.setAttribute("data-atui-colormode","dark"),n.classList.replace("ti-sun","ti-moon"))});const e=new Date;e.setTime(e.getTime()+36e5);const t="expires="+e.toUTCString(),o="atuiKernel_ColormodeIsDark="+atuiKernel_ColormodeIsDark()+";"+t+";path=/;SameSite=Lax;";document.cookie=o}l(atuiKernel_ColormodeToggle,"atuiKernel_ColormodeToggle");function atuiKernel_ColormodeStartup(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return atuiKernel_ColormodeToggle(),console.info("Dark mode enabled according to the system preferences."),!0;const t=document.cookie.split(";");for(let o=0;o<t.length;o++){const n=t[o].trim();if(n.startsWith("atuiKernel_ColormodeIsDark=")){const r=n.substring(27,n.length);return r==="true"&&(atuiKernel_ColormodeToggle(),console.info("Dark mode enabled according to the cookies.")),r==="true"}}return!1}l(atuiKernel_ColormodeStartup,"atuiKernel_ColormodeStartup"),atuiKernel_ColormodeStartup(),document.querySelectorAll(".atuiKernel_ColormodeButton").forEach(e=>{e.addEventListener("click",()=>{atuiKernel_ColormodeToggle()})});function atuiKernel_ColoraccentMetatag(){let e=document.querySelector('meta[name="data-atui-colormode"]');e||(e=document.createElement("meta"),e.setAttribute("name","theme-color"),document.head.appendChild(e)),e.setAttribute("content",`hsl(${getComputedStyle(document.documentElement).getPropertyValue("--atuiKernel_Color-A50")})`)}l(atuiKernel_ColoraccentMetatag,"atuiKernel_ColoraccentMetatag");try{const e=document.getElementById("atuiKernel_FooterInfo")}catch{}function atuiKernel_FooterLastedited(e,t,o){const n=new Date;(n.getDate()!=e||n.getMonth()+1!=t||n.getFullYear()!=o)&&atuiKernel_Metadata.in_development&&console.warn("The last modification date isn't up to date. ");const r=document.createElement("a");r.setAttribute("href",atuiKernel_Metadata.website),r.setAttribute("target","_blank"),r.innerHTML="This website uses "+atuiKernel_Metadata.name+" "+atuiKernel_Metadata.version+" . ",atuiKernel_FooterInfo.appendChild(r);const i=document.createElement("a");t=["january","february","march","april","may","june","july","august","september","october","november","december"][t-1],i.innerHTML="Latest modification on "+e+" "+t+" "+o+". ",i.setAttribute("href","./atui/kernel/about.html"),i.setAttribute("target","_blank"),atuiKernel_FooterInfo.insertBefore(i,atuiKernel_FooterInfo.firstChild)}l(atuiKernel_FooterLastedited,"atuiKernel_FooterLastedited");try{const e=document.getElementById("atuiKernel_Notification")}catch{}function atuiKernel_NotificationDisplay(e,t,o,n,r){const i=document.createElement("aside");i.classList.add("atuiKernel_NotificationElement");const a=document.createElement("div"),c=document.createElement("div"),h=new Audio("atui/kernel/assets/notification.mp3"),m=document.createElement("h3");m.textContent=n;const u=document.createElement("i");u.classList.add("ti","ti-x"),u.addEventListener("click",function(){return atuiKernel_NotificationClose(i),console.log("close")});const f=document.createElement("p");if(f.textContent=r,t=="default"&&(e=="normal"?t=[]:e=="alert"?t=["Ok","Annuler"]:e=="caution"?t=["Ok","Annuler"]:e=="confirmation"?t=["Oui","Non"]:e=="information"?t=["Ok"]:e=="insertion"&&(t="insertion")),t!="insertion")for(let s=0;s<t.length;s++){const d=document.createElement("button");d.textContent=t[s],d.addEventListener("click",function(){return atuiKernel_NotificationClose(i),o[s]}),c.appendChild(d)}else document.createElement("input").setAttribute("type","text");a.appendChild(atuiKernel_NotificationElementHeaderTypeImg),a.appendChild(m),a.appendChild(u),i.appendChild(a),i.appendChild(f),i.appendChild(c),atuiKernel_Notification.appendChild(i),h.play(),e=="normal"&&setTimeout(function(){atuiKernel_NotificationClose(i)},5e3)}l(atuiKernel_NotificationDisplay,"atuiKernel_NotificationDisplay");function atuiKernel_NotificationClose(e){e.remove()}l(atuiKernel_NotificationClose,"atuiKernel_NotificationClose");function atuiKernel_NotificationCookies(){atuiKernel_NotificationDisplay("cookies",["I agree","I disagree this time","I disagree definitely","Read more"],["console.log('accept')","console.log('not accept')","console.log('always not accept')","console.log('doc')"],"Accept cookies ?","This site uses trackers that collect information about you. According to the GDPR, you can express your consent to the use of cookies.")}l(atuiKernel_NotificationCookies,"atuiKernel_NotificationCookies");function atuiKernel_ToolsContextmenuDisplay(e,t,o){const n=e.childNodes[3];if(e=e.childNodes[1],!t)n.style.visibility="hidden",n.style.top="0",n.style.left="0",e.style.fontWeight="normal",e.style.textDecoration="none";else{e.style.fontWeight="bold",e.style.textDecoration="underline";let r,i,a,c;o?(r=20,c=n.getBoundingClientRect().y,i=e.getBoundingClientRect().y+20,i+n.clientHeight>window.innerHeight&&(i=i-n.clientHeight),i=i-c):(a=n.getBoundingClientRect().x,c=n.getBoundingClientRect().y,r=e.getBoundingClientRect().x+20,i=e.getBoundingClientRect().y+20,r+n.clientWidth>document.documentElement.clientWidth&&(r=r-n.clientWidth),r=r-a,i+n.clientHeight>window.innerHeight&&(i=i-n.clientHeight),i=i-c),r=r+"px",n.style.left=r,i=i+"px",n.style.top=i,n.style.visibility="visible"}}l(atuiKernel_ToolsContextmenuDisplay,"atuiKernel_ToolsContextmenuDisplay");function atuiKernel_ToolsContextmenu(e){document.getElementById(e).addEventListener("mouseenter",function(){atuiKernel_ToolsContextmenuDisplay(this,!0,!1)}),document.getElementById(e).addEventListener("mouseleave",function(){atuiKernel_ToolsContextmenuDisplay(this,!1,void 0)})}l(atuiKernel_ToolsContextmenu,"atuiKernel_ToolsContextmenu");function atuiKernel_NavigationGlobalpanel(e){document.getElementById(e).addEventListener("mouseover",function(){atuiKernel_ToolsContextmenuDisplay(this,!0,!0)}),document.getElementById(e).addEventListener("mouseout",function(){atuiKernel_ToolsContextmenuDisplay(this,!1,!0)})}l(atuiKernel_NavigationGlobalpanel,"atuiKernel_NavigationGlobalpanel");function atuiKernel_ToolsInfotip(e){document.getElementById(e).addEventListener("mouseenter",function(){atuiKernel_ToolsContextmenuDisplay(this,!0,!1)}),document.getElementById(e).addEventListener("mouseleave",function(){atuiKernel_ToolsContextmenuDisplay(this,!1,void 0)})}l(atuiKernel_ToolsInfotip,"atuiKernel_ToolsInfotip"),document.querySelectorAll(".atuiKernel_SectionTabs").forEach(e=>{const o=e.querySelector(".atuiKernel_SectionTabsHeader").querySelectorAll("a"),r=e.querySelector(".atuiKernel_SectionTabsContent").querySelectorAll("div");o.forEach(i=>{i.addEventListener("click",()=>{o.forEach(a=>{a.classList.remove("optionActive")}),r.forEach(a=>{a.classList.remove("optionActive")}),i.classList.add("optionActive"),document.getElementById(i.getAttribute("data-tabs-assign")).classList.add("optionActive")})})}),document.querySelectorAll(".atuiKernel_SectionAccordion").forEach(e=>{const t=e.querySelector("header"),o=t.querySelector("i"),n=e.querySelector("section");t.addEventListener("click",()=>{window.getComputedStyle(n).display==="none"?(n.style.display="block",o.style.transform="rotate(180deg)"):window.getComputedStyle(n).display==="block"?(n.style.display="none",o.style.transform="rotate(0deg)"):console.error("An unexpected error has occurred.")})});
//# sourceMappingURL=dist.js.map
