"use strict";var y=Object.defineProperty;var i=(e,t)=>y(e,"name",{value:t,configurable:!0});/*!
* ATUI v0.4.0 (https://github.com/alcapitan/atui)
* This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
*/const atuiKernel_Metadata={name:"ATUI",author:"alcapitan (on GitHub)",version:"v0.4.0",website:"https://github.com/alcapitan/atui",in_development:!0};atuiKernel_MetadataDisplay(atuiKernel_Metadata);function atuiKernel_MetadataDisplay(e){console.group("Metadata of "+e.name),console.log("Author : "+e.author),console.log("Version : "+e.version),console.log("Website : "+e.website),console.groupEnd()}i(atuiKernel_MetadataDisplay,"atuiKernel_MetadataDisplay");function findElement(e,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(e.querySelectorAll(t).length===1)return e.querySelector(t);if(e.querySelectorAll(t).length>1){let n=[];for(let l=0;l<e.querySelectorAll(t).length;l++)n.push(e.querySelectorAll(t)[l]);return n}else{if(Array.from(document.querySelectorAll(t)).includes(e))return e;if(Array.from(document.querySelectorAll(o)).includes(e))return console.error(`No "${t}" element was found in "${o}".`),null;if(e.parentNode===null)console.error(`No "${t}" element was found in the webpage.`);else return findElement(e.parentNode,t,o)}}i(findElement,"findElement");async function verifyLink(e){return!!(await fetch(e)).ok}i(verifyLink,"verifyLink");function convertTime(e){let t=Math.floor(e/3600),o=Math.floor(e%3600/60),n=Math.floor(e%60);return n<10&&(n="0"+n),t?(o<10&&(o="0"+o),t+":"+o+":"+n):o+":"+n}i(convertTime,"convertTime");function atuiKernel_ClipboardCopy(e){navigator.clipboard.writeText(e)}i(atuiKernel_ClipboardCopy,"atuiKernel_ClipboardCopy");function atuiKernel_ClipboardPaste(){return navigator.clipboard.readText()}i(atuiKernel_ClipboardPaste,"atuiKernel_ClipboardPaste");function atuiKernel_ShareTool(e,t,o){navigator.share({title:e,text:t,url:o})}i(atuiKernel_ShareTool,"atuiKernel_ShareTool");function atuiKernel_ColormodeIsDark(){return document.documentElement.getAttribute("data-atui-colormode")==="dark"}i(atuiKernel_ColormodeIsDark,"atuiKernel_ColormodeIsDark");function atuiKernel_ColormodeToggle(){document.querySelectorAll(".atuiKernel_ColormodeButton").forEach(n=>{atuiKernel_ColormodeIsDark()?(document.documentElement.setAttribute("data-atui-colormode","light"),n.classList.replace("ti-moon","ti-sun")):(document.documentElement.setAttribute("data-atui-colormode","dark"),n.classList.replace("ti-sun","ti-moon"))});const e=new Date;e.setTime(e.getTime()+36e5);const t="expires="+e.toUTCString(),o="atuiKernel_ColormodeIsDark="+atuiKernel_ColormodeIsDark()+";"+t+";path=/;SameSite=Lax;";document.cookie=o}i(atuiKernel_ColormodeToggle,"atuiKernel_ColormodeToggle");function atuiKernel_ColormodeStartup(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return atuiKernel_ColormodeToggle(),console.info("Dark mode enabled according to the system preferences."),!0;const t=document.cookie.split(";");for(let o=0;o<t.length;o++){const n=t[o].trim();if(n.startsWith("atuiKernel_ColormodeIsDark=")){const l=n.substring(27,n.length);return l==="true"&&(atuiKernel_ColormodeToggle(),console.info("Dark mode enabled according to the cookies.")),l==="true"}}return!1}i(atuiKernel_ColormodeStartup,"atuiKernel_ColormodeStartup"),atuiKernel_ColormodeStartup(),document.querySelectorAll(".atuiKernel_ColormodeButton").forEach(e=>{e.addEventListener("click",()=>{atuiKernel_ColormodeToggle()})});function atuiKernel_ColoraccentMetatag(){let e=document.querySelector('meta[name="data-atui-colormode"]');e||(e=document.createElement("meta"),e.setAttribute("name","theme-color"),document.head.appendChild(e)),e.setAttribute("content",`hsl(${getComputedStyle(document.documentElement).getPropertyValue("--atuiKernel_Color-A40")})`)}i(atuiKernel_ColoraccentMetatag,"atuiKernel_ColoraccentMetatag");function atuiKernel_PopupSetup(e){const t=findElement(e,e.getAttribute("data-vk-popup-assign"));let o={type:"default",triggerEvent:"mouseenter",outEvent:"click"};t.classList.contains("atuiKernel_PopupGlobalpanel")&&(o.type="centered-hor"),e.classList.contains("optionRightclick")&&(o.triggerEvent="contextmenu"),e.addEventListener(o.triggerEvent,d=>{o.triggerEvent==="contextmenu"&&d.preventDefault(),document.querySelectorAll(".atuiKernel_PopupContextmenu, .atuiKernel_PopupTooltip, .atuiKernel_PopupGlobalpanel").forEach(u=>{c(u)}),l(e,t,o),r(t),document.addEventListener("scroll",n),o.outEvent==="click"&&document.addEventListener(o.outEvent,m);function m(u){t.contains(u.target)||(c(t),document.removeEventListener("scroll",n),document.removeEventListener("click",m))}i(m,"detectOutsideClick")});function n(){l(e,t,o)}i(n,"atuiKernel_PopupScroll");function l(d,m,u){m.style.left="0",m.style.top="0";const p={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},s=d.getBoundingClientRect(),a=m.getBoundingClientRect(),g=s.left+a.width>p.width,_=s.top+a.height>p.height;let f={left:0,top:0};u.type==="centered"||u.type==="centered-hor"?f.left=(p.width-a.width)/2:g?f.left=s.right-a.left-a.width-5:f.left=s.left-a.left+5,u.type==="centered"||u.type==="centered-ver"?f.top=(p.height-a.height)/2:_?f.top=s.top-a.top-a.height-5:f.top=s.bottom-a.top+5,m.style.left=f.left+"px",m.style.top=f.top+"px"}i(l,"atuiKernel_PopupPosition");function r(d){d.style.visibility="visible"}i(r,"atuiKernel_PopupDisplay");function c(d){d.style.visibility="hidden"}i(c,"atuiKernel_PopupHide")}i(atuiKernel_PopupSetup,"atuiKernel_PopupSetup"),document.querySelectorAll("[data-vk-popup-assign]").forEach(e=>{atuiKernel_PopupSetup(e)});try{const e=document.getElementById("atuiKernel_Header"),t=e.childNodes[1];e.style.minHeight=t.clientHeight+"px";const o=e.childNodes[3];if(document.documentElement.clientWidth>767){const n=o.clientHeight+t.clientHeight*2;o.style.height=n+"px"}o.style.paddingTop=t.clientHeight+"px"}catch{}try{const e=document.getElementById("atuiKernel_FooterInfo")}catch{}function atuiKernel_FooterLastedited(e,t,o){const n=new Date;(n.getDate()!=e||n.getMonth()+1!=t||n.getFullYear()!=o)&&atuiKernel_Metadata.in_development&&console.warn("The last modification date isn't up to date. ");const l=document.createElement("a");l.setAttribute("href",atuiKernel_Metadata.website),l.setAttribute("target","_blank"),l.innerHTML="This website uses "+atuiKernel_Metadata.name+" "+atuiKernel_Metadata.version+" . ",atuiKernel_FooterInfo.appendChild(l);const r=document.createElement("a");t=["january","february","march","april","may","june","july","august","september","october","november","december"][t-1],r.innerHTML="Latest modification on "+e+" "+t+" "+o+". ",r.setAttribute("href","./atui/kernel/about.html"),r.setAttribute("target","_blank"),atuiKernel_FooterInfo.insertBefore(r,atuiKernel_FooterInfo.firstChild)}i(atuiKernel_FooterLastedited,"atuiKernel_FooterLastedited");try{const e=document.getElementById("atuiKernel_Notification")}catch{}function atuiKernel_NotificationDisplay(e,t,o,n,l){const r=document.createElement("aside");r.classList.add("atuiKernel_NotificationElement");const c=document.createElement("div"),d=document.createElement("div"),m=new Audio("atui/kernel/assets/notification.mp3"),u=document.createElement("h3");u.textContent=n;const h=document.createElement("i");h.classList.add("ti","ti-x"),h.addEventListener("click",function(){return atuiKernel_NotificationClose(r),console.log("close")});const p=document.createElement("p");if(p.textContent=l,t=="default"&&(e=="normal"?t=[]:e=="alert"?t=["Ok","Annuler"]:e=="caution"?t=["Ok","Annuler"]:e=="confirmation"?t=["Oui","Non"]:e=="information"?t=["Ok"]:e=="insertion"&&(t="insertion")),t!="insertion")for(let s=0;s<t.length;s++){const a=document.createElement("button");a.textContent=t[s],a.addEventListener("click",function(){return atuiKernel_NotificationClose(r),o[s]}),d.appendChild(a)}else document.createElement("input").setAttribute("type","text");c.appendChild(atuiKernel_NotificationElementHeaderTypeImg),c.appendChild(u),c.appendChild(h),r.appendChild(c),r.appendChild(p),r.appendChild(d),atuiKernel_Notification.appendChild(r),m.play(),e=="normal"&&setTimeout(function(){atuiKernel_NotificationClose(r)},5e3)}i(atuiKernel_NotificationDisplay,"atuiKernel_NotificationDisplay");function atuiKernel_NotificationClose(e){e.remove()}i(atuiKernel_NotificationClose,"atuiKernel_NotificationClose");function atuiKernel_NotificationCookies(){atuiKernel_NotificationDisplay("cookies",["I agree","I disagree this time","I disagree definitely","Read more"],["console.log('accept')","console.log('not accept')","console.log('always not accept')","console.log('doc')"],"Accept cookies ?","This site uses trackers that collect information about you. According to the GDPR, you can express your consent to the use of cookies.")}i(atuiKernel_NotificationCookies,"atuiKernel_NotificationCookies"),document.querySelectorAll(".atuiKernel_SectionTabs").forEach(e=>{const o=e.querySelector(".atuiKernel_SectionTabsHeader").querySelectorAll("a"),l=e.querySelector(".atuiKernel_SectionTabsContent").querySelectorAll("div");o.forEach(r=>{r.addEventListener("click",()=>{o.forEach(c=>{c.classList.remove("optionActive")}),l.forEach(c=>{c.classList.remove("optionActive")}),r.classList.add("optionActive"),document.getElementById(r.getAttribute("data-tabs-assign")).classList.add("optionActive")})})}),document.querySelectorAll(".atuiKernel_SectionAccordion").forEach(e=>{const t=e.querySelector("header"),o=t.querySelector("i"),n=e.querySelector("section");t.addEventListener("click",()=>{window.getComputedStyle(n).display==="none"?(n.style.display="block",o.style.transform="rotate(180deg)"):window.getComputedStyle(n).display==="block"?(n.style.display="none",o.style.transform="rotate(0deg)"):console.error("An unexpected error has occurred.")})});
//# sourceMappingURL=dist.js.map
