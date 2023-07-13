"use strict";var d=Object.defineProperty;var l=(e,i)=>d(e,"name",{value:i,configurable:!0});/*!
* ATUI v0.4.1 (https://github.com/alcapitan/atui)
* This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
*/document.querySelectorAll(".atuiMediasplayer_Close").forEach(function(e){e.addEventListener("click",function(){const i=atuiKernel_ToolsFindElement(this,".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer",".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer")[0];i.querySelector("audio, video").pause(),i.style.display="none"})});function atuiMediasplayer_BrokenLink(e,i){const t=document.createElement("div");t.classList.add("atuiKernel_SectionBox","optionAlert");const r=document.createElement("i");r.classList.add("ti","ti-circle-x");const a=document.createElement("p");i!==null?a.innerHTML=`ERROR : The media "<code>${i}</code>" is not reachable.`:a.innerHTML="ERROR : There is no media in this mediasplayer.",t.appendChild(r),t.appendChild(a),e.classList.contains("atuiMediasplayer_Videoplayer")?e.querySelector("article").prepend(t):e.prepend(t)}l(atuiMediasplayer_BrokenLink,"atuiMediasplayer_BrokenLink");function atuiMediasplayer_Assign(e){const i=document.getElementById(e.player),t=i.querySelector("audio, video"),r=i.querySelector(".atuiMediasplayer_Cover img, .atuiMediasplayer_Cover i"),a=i.querySelector(".atuiMediasplayer_InformationTitle"),o=i.querySelector(".atuiMediasplayer_InformationAuthor"),n=i.querySelector(".atuiMediasplayer_InformationAlbumName"),s=i.querySelector(".atuiMediasplayer_InformationReleaseDate"),u=i.querySelector(".atuiMediasplayer_InformationOrigin");t.setAttribute("src",e.media),e.cover!==void 0&&r.setAttribute("src",e.cover),e.title!==void 0&&(a.innerHTML=e.title),e.author!==void 0&&(o.innerHTML=e.author),e.albumName!==void 0&&(n.innerHTML=e.albumName),e.releaseDate!==void 0&&(s.innerHTML=e.releaseDate),e.origin!==void 0&&u.setAttribute("href",e.origin)}l(atuiMediasplayer_Assign,"atuiMediasplayer_Assign");function atuiMediasplayer_Run(e){e=document.getElementById(e);const i=e.querySelector("audio, video"),t=e.querySelector(".atuiMediasplayer_Run");if(i.paused===!0){atuiMediasplayer_StopAllMedia(),e.querySelectorAll(".atuiKernel_SectionBox.optionAlert").forEach(o=>{o.remove()});const r=i.getAttribute("src");verifyLink(r).then(o=>{o||atuiMediasplayer_BrokenLink(e,r)}),i.play(),window.getComputedStyle(e).display==="none"&&(e.style.display="block"),t.classList.replace("ti-player-play","ti-player-pause")}else i.paused===!1?(i.pause(),t.classList.replace("ti-player-pause","ti-player-play")):console.error("An unexpected error has occurred.")}l(atuiMediasplayer_Run,"atuiMediasplayer_Run"),document.querySelectorAll(".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer").forEach(e=>{e.querySelector(".atuiMediasplayer_Run").addEventListener("click",()=>{atuiMediasplayer_Run(e.getAttribute("id"))})}),document.querySelectorAll(".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer").forEach(e=>{const i=e.querySelector(".atuiMediasplayer_Run");e.querySelector("audio, video").addEventListener("ended",()=>{i.classList.replace("ti-player-pause","ti-player-play"),e.classList.contains("optionFloating")&&(e.style.display="none")})});function atuiMediasplayer_StopAllMedia(){document.querySelectorAll("audio, video").forEach(function(i){i.pause()}),document.querySelectorAll(".atuiMediasplayer_Run").forEach(function(i){i.classList.replace("ti-player-pause","ti-player-play")})}l(atuiMediasplayer_StopAllMedia,"atuiMediasplayer_StopAllMedia"),document.querySelectorAll(".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer").forEach(e=>{const i=e.querySelector("audio, video"),t=e.querySelector(".atuiMediasplayer_Timer"),r=e.querySelector(".atuiMediasplayer_ProgressbarInside");i.addEventListener("timeupdate",()=>{let a=i.currentTime,o=i.duration;isNaN(o)&&(a=o=0);const n=Math.round(a/o*100);t.innerText=`${convertTime(a)} - ${convertTime(o)}`,r.style.width=`${n}%`})}),document.querySelectorAll(".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer").forEach(e=>{const i=e.querySelector(".atuiMediasplayer_Backward"),t=e.querySelector(".atuiMediasplayer_Forward"),r=e.querySelector("audio, video");i.addEventListener("click",()=>{r.currentTime-=10}),t.addEventListener("click",()=>{r.currentTime+=10})}),document.querySelectorAll(".atuiMediasplayer_Progressbar").forEach(e=>{e.addEventListener("click",i=>{const t=atuiKernel_ToolsFindElement(e,"audio, video",".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer")[0],r=i.offsetX/e.offsetWidth*100;t.currentTime=t.duration*r/100,e.querySelector(".atuiMediasplayer_ProgressbarInside").style.width=`${r}%`})}),document.querySelectorAll(".atuiMediasplayer_Loop").forEach(function(e){e.addEventListener("click",function(){const i=atuiKernel_ToolsFindElement(this,"audio, video",".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer")[0];i.loop===!1?(i.loop=!0,this.classList.replace("ti-repeat","ti-repeat-off")):i.loop===!0?(i.loop=!1,this.classList.replace("ti-repeat-off","ti-repeat")):console.error("An unexpected error has occurred.")})}),document.querySelectorAll(".atuiMediasplayer_Sound").forEach(function(e){e.addEventListener("click",function(){const i=atuiKernel_ToolsFindElement(this,"audio, video",".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer")[0];i.muted===!1?(i.muted=!0,this.classList.replace("ti-volume","ti-volume-off")):i.muted===!0?(i.muted=!1,this.classList.replace("ti-volume-off","ti-volume")):console.error("An unexpected error has occurred.")})}),document.querySelectorAll(".atuiMediasplayer_Fullscreen").forEach(e=>{e.addEventListener("click",()=>{const i=atuiKernel_ToolsFindElement(e,"video",".atuiMediasplayer_Videoplayer")[0];i.requestFullscreen?i.requestFullscreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen():console.error("The browser does not support fullscreen mode.")})}),document.querySelectorAll(".atuiMediasplayer_Pip").forEach(e=>{e.addEventListener("click",()=>{const i=atuiKernel_ToolsFindElement(e,"video",".atuiMediasplayer_Videoplayer")[0];i!==document.pictureInPictureElement?i.requestPictureInPicture():document.exitPictureInPicture()})});
//# sourceMappingURL=dist.js.map
