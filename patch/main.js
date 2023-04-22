/*!
 * ATUI v0.4.0 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

atuiKernel_FooterLastedited(22, 4, 2023);

/*atuiMediasplayer_Assign({
    player: 'audioplayer2',
    media: 'patch/musics/test-audioplayer.mp3',
    cover: 'patch/musics/test-audioplayer.png',
    title: 'Uplink',
    author: 'Sinking Ship',
    albumName: undefined,
    releaseDate: '2022',
    origin: 'http://ncs.io/SinkingShip',

/*atuiKernel_NotificationDisplay('alert','default',["console.log('ok')"],["console.log('annuler')"],'Maecenas dictum felis tristique lectus imperdiet aliquet. ','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, turpis vel efficitur dictum, ipsum tortor pharetra velit, at mollis nisl ligula pellentesque mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ');*/
/*atuiKernel_NotificationCookies();*/

document.getElementById("clipboardButton").addEventListener("click", async function () {
    const text = document.getElementById("clipboardInput").value;
    atuiKernel_ClipboardCopy(text);
    const clipboardText = await atuiKernel_ClipboardPaste();
    document.getElementById("clipboard-paste").innerText = clipboardText;
});

document.getElementById("shareButton").addEventListener("click", function () {
    atuiKernel_ShareTool("ATUI", "Meet the new web UI framework", "https://alcapitan.github.io/atui/");
});

