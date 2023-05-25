"use strict";var b=Object.defineProperty;var r=(e,t)=>b(e,"name",{value:t,configurable:!0});/*!
* ATUI v0.4.0-rc (https://github.com/alcapitan/atui)
* This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
*/const atuiKernel_Metadata={name:"ATUI",author:"alcapitan (on GitHub)",version:"v0.4.0-rc",website:"https://github.com/alcapitan/atui",in_development:!1};atuiKernel_MetadataDisplay(atuiKernel_Metadata);function atuiKernel_MetadataDisplay(e){console.group("Metadata of "+e.name),console.log("Author : "+e.author),console.log("Version : "+e.version),console.log("Website : "+e.website),console.groupEnd()}r(atuiKernel_MetadataDisplay,"atuiKernel_MetadataDisplay");function findElement(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(e.querySelectorAll(t).length===1)return e.querySelector(t);if(e.querySelectorAll(t).length>1){let i=[];for(let o=0;o<e.querySelectorAll(t).length;o++)i.push(e.querySelectorAll(t)[o]);return i}else{if(Array.from(document.querySelectorAll(t)).includes(e))return e;if(Array.from(document.querySelectorAll(n)).includes(e))return console.error(`No "${t}" element was found in "${n}".`),null;if(e.parentNode===null)console.error(`No "${t}" element was found in the webpage.`);else return findElement(e.parentNode,t,n)}}r(findElement,"findElement");async function verifyLink(e){return!!(await fetch(e)).ok}r(verifyLink,"verifyLink");function convertTime(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),i=Math.floor(e%60);return i<10&&(i="0"+i),t?(n<10&&(n="0"+n),t+":"+n+":"+i):n+":"+i}r(convertTime,"convertTime");function atuiKernel_ClipboardCopy(e){navigator.clipboard.writeText(e)}r(atuiKernel_ClipboardCopy,"atuiKernel_ClipboardCopy");function atuiKernel_ClipboardPaste(){return navigator.clipboard.readText()}r(atuiKernel_ClipboardPaste,"atuiKernel_ClipboardPaste");function atuiKernel_ShareTool(e,t,n){navigator.share({title:e,text:t,url:n})}r(atuiKernel_ShareTool,"atuiKernel_ShareTool");function atuiKernel_ColormodeIsDark(){return document.documentElement.getAttribute("data-atui-colormode")==="dark"}r(atuiKernel_ColormodeIsDark,"atuiKernel_ColormodeIsDark");function atuiKernel_ColormodeToggle(){document.querySelectorAll(".atuiKernel_ColormodeButton").forEach(i=>{atuiKernel_ColormodeIsDark()?(document.documentElement.setAttribute("data-atui-colormode","light"),i.classList.replace("ti-moon","ti-sun")):(document.documentElement.setAttribute("data-atui-colormode","dark"),i.classList.replace("ti-sun","ti-moon"))});const e=new Date;e.setTime(e.getTime()+36e5);const t="expires="+e.toUTCString(),n="atuiKernel_ColormodeIsDark="+atuiKernel_ColormodeIsDark()+";"+t+";path=/;SameSite=Lax;";document.cookie=n}r(atuiKernel_ColormodeToggle,"atuiKernel_ColormodeToggle");function atuiKernel_ColormodeStartup(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return atuiKernel_ColormodeToggle(),console.info("Dark mode enabled according to the system preferences."),!0;const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const i=t[n].trim();if(i.startsWith("atuiKernel_ColormodeIsDark=")){const o=i.substring(27,i.length);return o==="true"&&(atuiKernel_ColormodeToggle(),console.info("Dark mode enabled according to the cookies.")),o==="true"}}return!1}r(atuiKernel_ColormodeStartup,"atuiKernel_ColormodeStartup"),atuiKernel_ColormodeStartup(),document.querySelectorAll(".atuiKernel_ColormodeButton").forEach(e=>{e.addEventListener("click",()=>{atuiKernel_ColormodeToggle()})});function atuiKernel_ColoraccentMetatag(){let e=document.querySelector('meta[name="data-atui-colormode"]');e||(e=document.createElement("meta"),e.setAttribute("name","theme-color"),document.head.appendChild(e)),e.setAttribute("content",`hsl(${getComputedStyle(document.documentElement).getPropertyValue("--atuiKernel_Color-A40")})`)}r(atuiKernel_ColoraccentMetatag,"atuiKernel_ColoraccentMetatag");function atuiKernel_PopupSetup(e){const t=findElement(e,e.getAttribute("data-vk-popup-assign"));let n={type:"default",triggerEvent:"mouseover",outEvent:"click"};t.classList.contains("atuiKernel_PopupGlobalpanel")&&(n.type="centered-hor"),e.classList.contains("optionRightclick")&&(n.triggerEvent="contextmenu"),e.addEventListener(n.triggerEvent,l=>{n.triggerEvent==="contextmenu"&&l.preventDefault(),document.querySelectorAll(".atuiKernel_PopupContextmenu, .atuiKernel_PopupTooltip, .atuiKernel_PopupGlobalpanel").forEach(u=>{a(u)}),g(e,t,n),s(t),document.addEventListener("scroll",o),window.addEventListener("resize",o),document.addEventListener(n.outEvent,u=>{i(u)})});function i(l){!t.contains(l.target)&&!e.contains(l.target)&&a(t)}r(i,"detectOutsideClick");function o(){g(e,t,n)}r(o,"atuiKernel_PopupReload");function a(l){document.removeEventListener("scroll",o),window.removeEventListener("resize",o),document.removeEventListener("click",i),l.style.visibility="hidden"}r(a,"atuiKernel_PopupHide");function s(l){l.style.visibility="visible"}r(s,"atuiKernel_PopupDisplay");function g(l,u,p){u.style.left="0",u.style.top="0";const d={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},f=l.getBoundingClientRect(),c=u.getBoundingClientRect(),y=f.left+c.width>d.width,v=f.top+c.height>d.height;let m={left:0,top:0};p.type==="centered"||p.type==="centered-hor"?m.left=(d.width-c.width)/2:y?m.left=f.right-c.left-c.width-5:m.left=f.left-c.left+5,p.type==="centered"||p.type==="centered-ver"?m.top=(d.height-c.height)/2:v?m.top=f.top-c.top-c.height+5:m.top=f.bottom-c.top-5,u.style.left=m.left+"px",u.style.top=m.top+"px"}r(g,"atuiKernel_PopupPosition")}r(atuiKernel_PopupSetup,"atuiKernel_PopupSetup"),document.querySelectorAll("[data-vk-popup-assign]").forEach(e=>{atuiKernel_PopupSetup(e)});function atuiKernel_NotificationPush(e){function t(){const o=new Notification(e.title,{body:e.text||"",icon:e.image?e.image:e.icon?`https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${e.icon}.svg`:""});o.onclick=a=>{e.link&&e.link!==""&&(a.preventDefault(),window.open(e.link))}}r(t,"systemPush");function n(){const o=document.createElement("div");o.classList.add("atuiKernel_Notification");const a=document.createElement("header");let s;e.image?(s=document.createElement("img"),s.setAttribute("src",e.image)):e.icon&&(s=document.createElement("i"),s.classList.add("ti",`ti-${e.icon}`));const g=document.createElement("p");g.textContent=e.title,a.appendChild(s),a.appendChild(g),o.appendChild(a);const l=document.createElement("section"),u=document.createElement("p");u.innerHTML=e.text,l.appendChild(u),o.appendChild(l);const p=document.createElement("footer");e.buttons.forEach(d=>{const f=document.createElement("div");f.classList.add("atuiKernel_Button","optionAccent",`option${d.option}`);const c=document.createElement("p");c.textContent=d.text,f.appendChild(c),f.addEventListener("click",()=>{d.action(),o.remove()}),p.appendChild(f)}),o.appendChild(p);let h=document.querySelector(".atuiKernel_NotificationContainer");if(h||(h=document.createElement("div"),h.classList.add("atuiKernel_NotificationContainer"),document.body.appendChild(h)),h.insertBefore(o,h.firstChild),e.close!==!1){let d=!1;o.addEventListener("mouseenter",()=>{d=!0}),o.addEventListener("mouseleave",()=>{d=!1}),setTimeout(()=>{d?o.addEventListener("mouseleave",()=>{setTimeout(()=>{o.remove()},2e3)}):o.remove()},e.close||5e3)}}r(n,"internPush");async function i(){return Notification.permission==="granted"?!0:(await Notification.requestPermission(),Notification.permission==="granted")}r(i,"verifyPermission"),i().then(o=>{if(!o)return console.error("Notification cannot be displayed because permission has been denied.");if(!e.title||e.title==="")return console.error("Notification should have a title.");e.system?t():(n(),"sound"in e?e.sound&&new Audio(e.sound).play():new Audio(atuiKernel_NotificationSound).play())})}r(atuiKernel_NotificationPush,"atuiKernel_NotificationPush");let atuiKernel_NotificationSound="atui/kernel/assets/notification.mp3";const atuiKernel_HeaderFixCarousel=r(()=>{document.querySelectorAll(".atuiKernel_Header.optionCarousel").forEach(e=>{let t=findElement(e,".atuiKernel_Carousel",".atuiKernel_BodyContent"),n=findElement(e,".atuiKernel_Carousel > div > div",".atuiKernel_BodyContent");Array.isArray(n)||(n=[n]),t.style.minHeight=e.offsetHeight*2+"px",n.forEach(i=>{i.style.paddingTop=e.offsetHeight+20+"px"})})},"atuiKernel_HeaderFixCarousel");atuiKernel_HeaderFixCarousel(),window.addEventListener("resize",atuiKernel_HeaderFixCarousel),document.querySelectorAll(".atuiKernel_SectionTabs").forEach(e=>{const n=e.querySelector(".atuiKernel_SectionTabsHeader").querySelectorAll("a"),o=e.querySelector(".atuiKernel_SectionTabsContent").querySelectorAll("div");n.forEach(a=>{a.addEventListener("click",()=>{n.forEach(s=>{s.classList.remove("optionActive")}),o.forEach(s=>{s.classList.remove("optionActive")}),a.classList.add("optionActive"),document.getElementById(a.getAttribute("data-tabs-assign")).classList.add("optionActive")})})}),document.querySelectorAll(".atuiKernel_SectionAccordion").forEach(e=>{const t=e.querySelector("header"),n=t.querySelector("i"),i=e.querySelector("section");t.addEventListener("click",()=>{window.getComputedStyle(i).display==="none"?(i.style.display="block",n.style.transform="rotate(180deg)"):window.getComputedStyle(i).display==="block"?(i.style.display="none",n.style.transform="rotate(0deg)"):console.error("An unexpected error has occurred.")})});try{const e=document.getElementById("atuiKernel_FooterInfo")}catch{}function atuiKernel_FooterLastedited(e,t,n){const i=new Date;(i.getDate()!=e||i.getMonth()+1!=t||i.getFullYear()!=n)&&atuiKernel_Metadata.in_development&&console.warn("The last modification date isn't up to date. ");const o=document.createElement("a");o.setAttribute("href",atuiKernel_Metadata.website),o.setAttribute("target","_blank"),o.innerHTML="This website uses "+atuiKernel_Metadata.name+" "+atuiKernel_Metadata.version+" . ",atuiKernel_FooterInfo.appendChild(o);const a=document.createElement("a");t=["january","february","march","april","may","june","july","august","september","october","november","december"][t-1],a.innerHTML="Latest modification on "+e+" "+t+" "+n+". ",a.setAttribute("href","./atui/kernel/about.html"),a.setAttribute("target","_blank"),atuiKernel_FooterInfo.insertBefore(a,atuiKernel_FooterInfo.firstChild)}r(atuiKernel_FooterLastedited,"atuiKernel_FooterLastedited");
//# sourceMappingURL=dist.js.map
