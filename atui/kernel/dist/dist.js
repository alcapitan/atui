"use strict";var E=Object.defineProperty;var l=(e,t)=>E(e,"name",{value:t,configurable:!0});/*!
* ATUI v0.4.0 (https://github.com/alcapitan/atui)
* This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
*/const atuiKernel_Metadata={name:"ATUI",author:"alcapitan (on GitHub)",version:"v0.4.0",website:"https://github.com/alcapitan/atui",in_development:!0};atuiKernel_MetadataDisplay(atuiKernel_Metadata);function atuiKernel_MetadataDisplay(e){console.group("Metadata of "+e.name),console.log("Author : "+e.author),console.log("Version : "+e.version),console.log("Website : "+e.website),console.groupEnd()}l(atuiKernel_MetadataDisplay,"atuiKernel_MetadataDisplay");function findElement(e,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(e.querySelectorAll(t).length===1)return e.querySelector(t);if(e.querySelectorAll(t).length>1){let n=[];for(let i=0;i<e.querySelectorAll(t).length;i++)n.push(e.querySelectorAll(t)[i]);return n}else{if(Array.from(document.querySelectorAll(t)).includes(e))return e;if(Array.from(document.querySelectorAll(o)).includes(e))return console.error(`No "${t}" element was found in "${o}".`),null;if(e.parentNode===null)console.error(`No "${t}" element was found in the webpage.`);else return findElement(e.parentNode,t,o)}}l(findElement,"findElement");async function verifyLink(e){return!!(await fetch(e)).ok}l(verifyLink,"verifyLink");function convertTime(e){let t=Math.floor(e/3600),o=Math.floor(e%3600/60),n=Math.floor(e%60);return n<10&&(n="0"+n),t?(o<10&&(o="0"+o),t+":"+o+":"+n):o+":"+n}l(convertTime,"convertTime");function atuiKernel_ClipboardCopy(e){navigator.clipboard.writeText(e)}l(atuiKernel_ClipboardCopy,"atuiKernel_ClipboardCopy");function atuiKernel_ClipboardPaste(){return navigator.clipboard.readText()}l(atuiKernel_ClipboardPaste,"atuiKernel_ClipboardPaste");function atuiKernel_ShareTool(e,t,o){navigator.share({title:e,text:t,url:o})}l(atuiKernel_ShareTool,"atuiKernel_ShareTool");function atuiKernel_ColormodeIsDark(){return document.documentElement.getAttribute("data-atui-colormode")==="dark"}l(atuiKernel_ColormodeIsDark,"atuiKernel_ColormodeIsDark");function atuiKernel_ColormodeToggle(){document.querySelectorAll(".atuiKernel_ColormodeButton").forEach(n=>{atuiKernel_ColormodeIsDark()?(document.documentElement.setAttribute("data-atui-colormode","light"),n.classList.replace("ti-moon","ti-sun")):(document.documentElement.setAttribute("data-atui-colormode","dark"),n.classList.replace("ti-sun","ti-moon"))});const e=new Date;e.setTime(e.getTime()+36e5);const t="expires="+e.toUTCString(),o="atuiKernel_ColormodeIsDark="+atuiKernel_ColormodeIsDark()+";"+t+";path=/;SameSite=Lax;";document.cookie=o}l(atuiKernel_ColormodeToggle,"atuiKernel_ColormodeToggle");function atuiKernel_ColormodeStartup(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return atuiKernel_ColormodeToggle(),console.info("Dark mode enabled according to the system preferences."),!0;const t=document.cookie.split(";");for(let o=0;o<t.length;o++){const n=t[o].trim();if(n.startsWith("atuiKernel_ColormodeIsDark=")){const i=n.substring(27,n.length);return i==="true"&&(atuiKernel_ColormodeToggle(),console.info("Dark mode enabled according to the cookies.")),i==="true"}}return!1}l(atuiKernel_ColormodeStartup,"atuiKernel_ColormodeStartup"),atuiKernel_ColormodeStartup(),document.querySelectorAll(".atuiKernel_ColormodeButton").forEach(e=>{e.addEventListener("click",()=>{atuiKernel_ColormodeToggle()})});function atuiKernel_ColoraccentMetatag(){let e=document.querySelector('meta[name="data-atui-colormode"]');e||(e=document.createElement("meta"),e.setAttribute("name","theme-color"),document.head.appendChild(e)),e.setAttribute("content",`hsl(${getComputedStyle(document.documentElement).getPropertyValue("--atuiKernel_Color-A40")})`)}l(atuiKernel_ColoraccentMetatag,"atuiKernel_ColoraccentMetatag");function atuiKernel_PopupSetup(e){const t=findElement(e,e.getAttribute("data-vk-popup-assign"));let o={type:"default",triggerEvent:"mouseover",outEvent:"click"};t.classList.contains("atuiKernel_PopupGlobalpanel")&&(o.type="centered-hor"),e.classList.contains("optionRightclick")&&(o.triggerEvent="contextmenu"),e.addEventListener(o.triggerEvent,a=>{o.triggerEvent==="contextmenu"&&a.preventDefault(),document.querySelectorAll(".atuiKernel_PopupContextmenu, .atuiKernel_PopupTooltip, .atuiKernel_PopupGlobalpanel").forEach(c=>{r(c)}),h(e,t,o),s(t),document.addEventListener("scroll",i),window.addEventListener("resize",i),document.addEventListener(o.outEvent,c=>{n(c)})});function n(a){!t.contains(a.target)&&!e.contains(a.target)&&r(t)}l(n,"detectOutsideClick");function i(){h(e,t,o)}l(i,"atuiKernel_PopupReload");function r(a){document.removeEventListener("scroll",i),window.removeEventListener("resize",i),document.removeEventListener("click",n),a.style.visibility="hidden"}l(r,"atuiKernel_PopupHide");function s(a){a.style.visibility="visible"}l(s,"atuiKernel_PopupDisplay");function h(a,c,m){c.style.left="0",c.style.top="0";const u={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},d=a.getBoundingClientRect(),f=c.getBoundingClientRect(),_=d.left+f.width>u.width,y=d.top+f.height>u.height;let p={left:0,top:0};m.type==="centered"||m.type==="centered-hor"?p.left=(u.width-f.width)/2:_?p.left=d.right-f.left-f.width-5:p.left=d.left-f.left+5,m.type==="centered"||m.type==="centered-ver"?p.top=(u.height-f.height)/2:y?p.top=d.top-f.top-f.height+5:p.top=d.bottom-f.top-5,c.style.left=p.left+"px",c.style.top=p.top+"px"}l(h,"atuiKernel_PopupPosition")}l(atuiKernel_PopupSetup,"atuiKernel_PopupSetup"),document.querySelectorAll("[data-vk-popup-assign]").forEach(e=>{atuiKernel_PopupSetup(e)});try{const e=document.getElementById("atuiKernel_FooterInfo")}catch{}function atuiKernel_FooterLastedited(e,t,o){const n=new Date;(n.getDate()!=e||n.getMonth()+1!=t||n.getFullYear()!=o)&&atuiKernel_Metadata.in_development&&console.warn("The last modification date isn't up to date. ");const i=document.createElement("a");i.setAttribute("href",atuiKernel_Metadata.website),i.setAttribute("target","_blank"),i.innerHTML="This website uses "+atuiKernel_Metadata.name+" "+atuiKernel_Metadata.version+" . ",atuiKernel_FooterInfo.appendChild(i);const r=document.createElement("a");t=["january","february","march","april","may","june","july","august","september","october","november","december"][t-1],r.innerHTML="Latest modification on "+e+" "+t+" "+o+". ",r.setAttribute("href","./atui/kernel/about.html"),r.setAttribute("target","_blank"),atuiKernel_FooterInfo.insertBefore(r,atuiKernel_FooterInfo.firstChild)}l(atuiKernel_FooterLastedited,"atuiKernel_FooterLastedited");try{const e=document.getElementById("atuiKernel_Notification")}catch{}function atuiKernel_NotificationDisplay(e,t,o,n,i){const r=document.createElement("aside");r.classList.add("atuiKernel_NotificationElement");const s=document.createElement("div"),h=document.createElement("div"),a=new Audio("atui/kernel/assets/notification.mp3"),c=document.createElement("h3");c.textContent=n;const m=document.createElement("i");m.classList.add("ti","ti-x"),m.addEventListener("click",function(){return atuiKernel_NotificationClose(r),console.log("close")});const g=document.createElement("p");if(g.textContent=i,t=="default"&&(e=="normal"?t=[]:e=="alert"?t=["Ok","Annuler"]:e=="caution"?t=["Ok","Annuler"]:e=="confirmation"?t=["Oui","Non"]:e=="information"?t=["Ok"]:e=="insertion"&&(t="insertion")),t!="insertion")for(let u=0;u<t.length;u++){const d=document.createElement("button");d.textContent=t[u],d.addEventListener("click",function(){return atuiKernel_NotificationClose(r),o[u]}),h.appendChild(d)}else document.createElement("input").setAttribute("type","text");s.appendChild(atuiKernel_NotificationElementHeaderTypeImg),s.appendChild(c),s.appendChild(m),r.appendChild(s),r.appendChild(g),r.appendChild(h),atuiKernel_Notification.appendChild(r),a.play(),e=="normal"&&setTimeout(function(){atuiKernel_NotificationClose(r)},5e3)}l(atuiKernel_NotificationDisplay,"atuiKernel_NotificationDisplay");function atuiKernel_NotificationClose(e){e.remove()}l(atuiKernel_NotificationClose,"atuiKernel_NotificationClose");function atuiKernel_NotificationCookies(){atuiKernel_NotificationDisplay("cookies",["I agree","I disagree this time","I disagree definitely","Read more"],["console.log('accept')","console.log('not accept')","console.log('always not accept')","console.log('doc')"],"Accept cookies ?","This site uses trackers that collect information about you. According to the GDPR, you can express your consent to the use of cookies.")}l(atuiKernel_NotificationCookies,"atuiKernel_NotificationCookies"),document.querySelectorAll(".atuiKernel_SectionTabs").forEach(e=>{const o=e.querySelector(".atuiKernel_SectionTabsHeader").querySelectorAll("a"),i=e.querySelector(".atuiKernel_SectionTabsContent").querySelectorAll("div");o.forEach(r=>{r.addEventListener("click",()=>{o.forEach(s=>{s.classList.remove("optionActive")}),i.forEach(s=>{s.classList.remove("optionActive")}),r.classList.add("optionActive"),document.getElementById(r.getAttribute("data-tabs-assign")).classList.add("optionActive")})})}),document.querySelectorAll(".atuiKernel_SectionAccordion").forEach(e=>{const t=e.querySelector("header"),o=t.querySelector("i"),n=e.querySelector("section");t.addEventListener("click",()=>{window.getComputedStyle(n).display==="none"?(n.style.display="block",o.style.transform="rotate(180deg)"):window.getComputedStyle(n).display==="block"?(n.style.display="none",o.style.transform="rotate(0deg)"):console.error("An unexpected error has occurred.")})});const atuiKernel_HeaderFixCarousel=l(()=>{document.querySelectorAll(".atuiKernel_Header.optionCarousel").forEach(e=>{const t=e.offsetHeight+20;let o=findElement(e,".atuiKernel_Carousel",".atuiKernel_BodyContent"),n=findElement(e,".atuiKernel_Carousel > div > div",".atuiKernel_BodyContent"),i=0;Array.isArray(n)?n.forEach(r=>{r.offsetHeight>i&&(i=r.offsetHeight,n=r)}):i=n.offsetHeight,o.style.minHeight=`max(25vh, ${i}px)`,n.style.paddingTop=t+"px"})},"atuiKernel_HeaderFixCarousel");atuiKernel_HeaderFixCarousel(),window.addEventListener("resize",atuiKernel_HeaderFixCarousel);
//# sourceMappingURL=dist.js.map
