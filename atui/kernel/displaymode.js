/* Display mode */

const atuiKernel_ToolsSettingsDisplaymodeElement = document.getElementById("atuiKernel_ToolsSettingsDisplaymode").childNodes[1];
const atuiKernel_ToolsSettingsDisplaymodeRoot = document.documentElement;
let atuiKernel_ToolsSettingsDisplaymodeStatus = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
function atuiKernel_ToolsSettingsDisplaymodeChange()
{
     if (atuiKernel_ToolsSettingsDisplaymodeStatus)
     {
          atuiKernel_ToolsSettingsDisplaymodeStatus = false;
          atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("src","atui/kernel/medias/dark.png");
          atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("alt","Mode sombre activé");
          atuiKernel_ToolsSettingsDisplaymodeRoot.style.setProperty("--atuiKernel_ToolsSettingsDisplaymodeColor","rgb(102,102,102)");
          atuiKernel_ToolsSettingsDisplaymodeRoot.style.setProperty("--atuiKernel_ToolsSettingsDisplaymodeColorOpacity","rgb(102,102,102,0.8)");
     }
     else
     {
          atuiKernel_ToolsSettingsDisplaymodeStatus = true;
          atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("src","atui/kernel/medias/light.png");
          atuiKernel_ToolsSettingsDisplaymodeElement.setAttribute("alt","Mode clair activé");
          atuiKernel_ToolsSettingsDisplaymodeRoot.style.setProperty("--atuiKernel_ToolsSettingsDisplaymodeColor","rgb(255,255,255)");
          atuiKernel_ToolsSettingsDisplaymodeRoot.style.setProperty("--atuiKernel_ToolsSettingsDisplaymodeColorOpacity","rgb(255,255,255,0.8)");
     }
}
atuiKernel_ToolsSettingsDisplaymodeElement.addEventListener("click",atuiKernel_ToolsSettingsDisplaymodeChange);
if (!atuiKernel_ToolsSettingsDisplaymodeStatus)
{
     atuiKernel_ToolsSettingsDisplaymodeStatus = true;
     atuiKernel_ToolsSettingsDisplaymodeChange()
}


export {atuiKernel_ToolsSettingsDisplaymodeChange};