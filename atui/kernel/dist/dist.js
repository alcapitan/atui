"use strict";var v=Object.defineProperty;var i=(e,t)=>v(e,"name",{value:t,configurable:!0});/*!
* ATUI v0.4.0 (https://github.com/alcapitan/atui)
* This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
*/const atuiKernel_Metadata={name:"ATUI",author:"alcapitan (on GitHub)",version:"v0.4.0",website:"https://github.com/alcapitan/atui",in_development:!0};atuiKernel_MetadataDisplay(atuiKernel_Metadata);function atuiKernel_MetadataDisplay(e){console.group("Metadata of "+e.name),console.log("Author : "+e.author),console.log("Version : "+e.version),console.log("Website : "+e.website),console.groupEnd()}i(atuiKernel_MetadataDisplay,"atuiKernel_MetadataDisplay");function findElement(e,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(e.querySelectorAll(t).length===1)return e.querySelector(t);if(e.querySelectorAll(t).length>1){let n=[];for(let r=0;r<e.querySelectorAll(t).length;r++)n.push(e.querySelectorAll(t)[r]);return n}else{if(Array.from(document.querySelectorAll(t)).includes(e))return e;if(Array.from(document.querySelectorAll(o)).includes(e))return console.error(`No "${t}" element was found in "${o}".`),null;if(e.parentNode===null)console.error(`No "${t}" element was found in the webpage.`);else return findElement(e.parentNode,t,o)}}i(findElement,"findElement");async function verifyLink(e){return!!(await fetch(e)).ok}i(verifyLink,"verifyLink");function convertTime(e){let t=Math.floor(e/3600),o=Math.floor(e%3600/60),n=Math.floor(e%60);return n<10&&(n="0"+n),t?(o<10&&(o="0"+o),t+":"+o+":"+n):o+":"+n}i(convertTime,"convertTime");function atuiKernel_ClipboardCopy(e){navigator.clipboard.writeText(e)}i(atuiKernel_ClipboardCopy,"atuiKernel_ClipboardCopy");function atuiKernel_ClipboardPaste(){return navigator.clipboard.readText()}i(atuiKernel_ClipboardPaste,"atuiKernel_ClipboardPaste");function atuiKernel_ShareTool(e,t,o){navigator.share({title:e,text:t,url:o})}i(atuiKernel_ShareTool,"atuiKernel_ShareTool");function atuiKernel_ColormodeIsDark(){return document.documentElement.getAttribute("data-atui-colormode")==="dark"}i(atuiKernel_ColormodeIsDark,"atuiKernel_ColormodeIsDark");function atuiKernel_ColormodeToggle(){document.querySelectorAll(".atuiKernel_ColormodeButton").forEach(n=>{atuiKernel_ColormodeIsDark()?(document.documentElement.setAttribute("data-atui-colormode","light"),n.classList.replace("ti-moon","ti-sun")):(document.documentElement.setAttribute("data-atui-colormode","dark"),n.classList.replace("ti-sun","ti-moon"))});const e=new Date;e.setTime(e.getTime()+36e5);const t="expires="+e.toUTCString(),o="atuiKernel_ColormodeIsDark="+atuiKernel_ColormodeIsDark()+";"+t+";path=/;SameSite=Lax;";document.cookie=o}i(atuiKernel_ColormodeToggle,"atuiKernel_ColormodeToggle");function atuiKernel_ColormodeStartup(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return atuiKernel_ColormodeToggle(),console.info("Dark mode enabled according to the system preferences."),!0;const t=document.cookie.split(";");for(let o=0;o<t.length;o++){const n=t[o].trim();if(n.startsWith("atuiKernel_ColormodeIsDark=")){const r=n.substring(27,n.length);return r==="true"&&(atuiKernel_ColormodeToggle(),console.info("Dark mode enabled according to the cookies.")),r==="true"}}return!1}i(atuiKernel_ColormodeStartup,"atuiKernel_ColormodeStartup"),atuiKernel_ColormodeStartup(),document.querySelectorAll(".atuiKernel_ColormodeButton").forEach(e=>{e.addEventListener("click",()=>{atuiKernel_ColormodeToggle()})});function atuiKernel_ColoraccentMetatag(){let e=document.querySelector('meta[name="data-atui-colormode"]');e||(e=document.createElement("meta"),e.setAttribute("name","theme-color"),document.head.appendChild(e)),e.setAttribute("content",`hsl(${getComputedStyle(document.documentElement).getPropertyValue("--atuiKernel_Color-A40")})`)}i(atuiKernel_ColoraccentMetatag,"atuiKernel_ColoraccentMetatag");function atuiKernel_PopupSetup(e){const t=findElement(e,e.getAttribute("data-vk-popup-assign"));let o={type:"default",triggerEvent:"mouseover",outEvent:"click"};t.classList.contains("atuiKernel_PopupGlobalpanel")&&(o.type="centered-hor"),e.classList.contains("optionRightclick")&&(o.triggerEvent="contextmenu"),e.addEventListener(o.triggerEvent,l=>{o.triggerEvent==="contextmenu"&&l.preventDefault(),document.querySelectorAll(".atuiKernel_PopupContextmenu, .atuiKernel_PopupTooltip, .atuiKernel_PopupGlobalpanel").forEach(c=>{a(c)}),h(e,t,o),d(t),document.addEventListener("scroll",r),window.addEventListener("resize",r),document.addEventListener(o.outEvent,c=>{n(c)})});function n(l){!t.contains(l.target)&&!e.contains(l.target)&&a(t)}i(n,"detectOutsideClick");function r(){h(e,t,o)}i(r,"atuiKernel_PopupReload");function a(l){document.removeEventListener("scroll",r),window.removeEventListener("resize",r),document.removeEventListener("click",n),l.style.visibility="hidden"}i(a,"atuiKernel_PopupHide");function d(l){l.style.visibility="visible"}i(d,"atuiKernel_PopupDisplay");function h(l,c,m){c.style.left="0",c.style.top="0";const p={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},f=l.getBoundingClientRect(),s=c.getBoundingClientRect(),g=f.left+s.width>p.width,y=f.top+s.height>p.height;let u={left:0,top:0};m.type==="centered"||m.type==="centered-hor"?u.left=(p.width-s.width)/2:g?u.left=f.right-s.left-s.width-5:u.left=f.left-s.left+5,m.type==="centered"||m.type==="centered-ver"?u.top=(p.height-s.height)/2:y?u.top=f.top-s.top-s.height+5:u.top=f.bottom-s.top-5,c.style.left=u.left+"px",c.style.top=u.top+"px"}i(h,"atuiKernel_PopupPosition")}i(atuiKernel_PopupSetup,"atuiKernel_PopupSetup"),document.querySelectorAll("[data-vk-popup-assign]").forEach(e=>{atuiKernel_PopupSetup(e)});try{const e=document.getElementById("atuiKernel_FooterInfo")}catch{}function atuiKernel_FooterLastedited(e,t,o){const n=new Date;(n.getDate()!=e||n.getMonth()+1!=t||n.getFullYear()!=o)&&atuiKernel_Metadata.in_development&&console.warn("The last modification date isn't up to date. ");const r=document.createElement("a");r.setAttribute("href",atuiKernel_Metadata.website),r.setAttribute("target","_blank"),r.innerHTML="This website uses "+atuiKernel_Metadata.name+" "+atuiKernel_Metadata.version+" . ",atuiKernel_FooterInfo.appendChild(r);const a=document.createElement("a");t=["january","february","march","april","may","june","july","august","september","october","november","december"][t-1],a.innerHTML="Latest modification on "+e+" "+t+" "+o+". ",a.setAttribute("href","./atui/kernel/about.html"),a.setAttribute("target","_blank"),atuiKernel_FooterInfo.insertBefore(a,atuiKernel_FooterInfo.firstChild)}i(atuiKernel_FooterLastedited,"atuiKernel_FooterLastedited");function atuiKernel_NotificationPush(e){function t(){return new Notification(e.title,{title:e.title,body:e.text,icon:`https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${e.icon}.svg`})}if(i(t,"systemPush"),e.system){if(Notification.permission==="granted")return t();Notification.permission!=="denied"&&Notification.requestPermission().then(t())}}i(atuiKernel_NotificationPush,"atuiKernel_NotificationPush");function atuiKernel_NotificationClose(e){e.remove()}i(atuiKernel_NotificationClose,"atuiKernel_NotificationClose");function atuiKernel_NotificationCookies(){atuiKernel_NotificationDisplay("cookies",["I agree","I disagree this time","I disagree definitely","Read more"],["console.log('accept')","console.log('not accept')","console.log('always not accept')","console.log('doc')"],"Accept cookies ?","This site uses trackers that collect information about you. According to the GDPR, you can express your consent to the use of cookies.")}i(atuiKernel_NotificationCookies,"atuiKernel_NotificationCookies"),document.querySelectorAll(".atuiKernel_SectionTabs").forEach(e=>{const o=e.querySelector(".atuiKernel_SectionTabsHeader").querySelectorAll("a"),r=e.querySelector(".atuiKernel_SectionTabsContent").querySelectorAll("div");o.forEach(a=>{a.addEventListener("click",()=>{o.forEach(d=>{d.classList.remove("optionActive")}),r.forEach(d=>{d.classList.remove("optionActive")}),a.classList.add("optionActive"),document.getElementById(a.getAttribute("data-tabs-assign")).classList.add("optionActive")})})}),document.querySelectorAll(".atuiKernel_SectionAccordion").forEach(e=>{const t=e.querySelector("header"),o=t.querySelector("i"),n=e.querySelector("section");t.addEventListener("click",()=>{window.getComputedStyle(n).display==="none"?(n.style.display="block",o.style.transform="rotate(180deg)"):window.getComputedStyle(n).display==="block"?(n.style.display="none",o.style.transform="rotate(0deg)"):console.error("An unexpected error has occurred.")})});const atuiKernel_HeaderFixCarousel=i(()=>{document.querySelectorAll(".atuiKernel_Header.optionCarousel").forEach(e=>{const t=e.offsetHeight+20;let o=findElement(e,".atuiKernel_Carousel",".atuiKernel_BodyContent"),n=findElement(e,".atuiKernel_Carousel > div > div",".atuiKernel_BodyContent"),r=0;Array.isArray(n)?n.forEach(a=>{a.offsetHeight>r&&(r=a.offsetHeight,n=a)}):r=n.offsetHeight,o.style.minHeight=`max(25vh, ${r}px)`,n.style.paddingTop=t+"px"})},"atuiKernel_HeaderFixCarousel");atuiKernel_HeaderFixCarousel(),window.addEventListener("resize",atuiKernel_HeaderFixCarousel);
//# sourceMappingURL=dist.js.map
