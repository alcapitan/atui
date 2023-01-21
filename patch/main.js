/*!
 * ATUI v0.3.0 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public Licence (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

atuiKernel_FooterLastedited(21, 1, 2023);
atuiKernel_ColorschemeGeneratorAuto([230, 51, 0]);

atuiKernel_ToolsContextmenu("atuiKernel_NavigationImg");
atuiKernel_ToolsContextmenu("atuiKernel_NavigationText");
atuiKernel_ToolsInfotip("atuiKernel_FooterScrolltopInfotip");
atuiKernel_NavigationGlobalpanel("atuiKernel_NavigationGlobalpanel1");

document.getElementById("testRunMusic").addEventListener("click", function () {
    atuiMediasplayer_AudioplayerMusicChange([
        "patch/musics/test-audioplayer.mp3",
        "patch/musics/test-audioplayer.png",
        "Uplink",
        "Sinking Ship",
        undefined,
        "2022",
    ]);
});

/*atuiKernel_ToolsInfotip("atuiKernel_SectionDownloadOpen");
atuiKernel_ToolsInfotip("atuiKernel_SectionDownloadDownload");
atuiKernel_ToolsInfotip("atuiKernel_SectionDownloadTorrent");
atuiKernel_ToolsInfotip("atuiKernel_SectionDownloadChecksum");*/
/*atuiKernel_NotificationDisplay('alert','default',["console.log('ok')"],["console.log('annuler')"],'Maecenas dictum felis tristique lectus imperdiet aliquet. ','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, turpis vel efficitur dictum, ipsum tortor pharetra velit, at mollis nisl ligula pellentesque mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ');*/
/*atuiKernel_NotificationCookies();*/
