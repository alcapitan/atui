/*!
 * ATUI v0.4.1 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

atuiKernel_FooterLastedited(26, 6, 2023);

const testActionBtnNotif = () => {
    console.log("coucou milan !");
};

document.getElementById("pushNotification").addEventListener("click", function () {
    atuiKernel_NotificationPush({
        system: false,
        icon: "flask",
        image: "patch/icons/logo.png",
        title: "autogen notif",
        text: "hey yo, you read an autogen notif",
        buttons: [
            {
                option: "Filled",
                text: "click here",
                action: () => {
                    testActionBtnNotif();
                    console.log("congrats");
                },
            },
        ],
        link: "https://alcapitan.github.io/atui/",
    });
});

document.getElementById("clipboardButton").addEventListener("click", async function () {
    const text = document.getElementById("clipboardInput").value;
    atuiKernel_ClipboardCopy(text);
    const clipboardText = await atuiKernel_ClipboardPaste();
    document.getElementById("clipboard-paste").innerText = clipboardText;
});

document.getElementById("shareButton").addEventListener("click", function () {
    atuiKernel_ShareTool("ATUI", "Meet the new web UI framework", "https://alcapitan.github.io/atui/");
});

document.getElementById("playAudio1").addEventListener("click", () => {
    atuiMediasplayer_Run("audioplayer1");
});
document.getElementById("playAudio2").addEventListener("click", () => {
    atuiMediasplayer_Assign({
        player: "audioplayer2",
        media: "patch/musics/test-audioplayer.mp3",
        cover: "patch/musics/test-audioplayer.png",
        title: "Uplink",
        author: "Sinking Ship",
        albumName: "undefined",
        releaseDate: "2022",
        origin: "http://ncs.io/SinkingShip",
    });
    atuiMediasplayer_Run("audioplayer2");
});

document.getElementById("playVideo").addEventListener("click", () => {
    atuiMediasplayer_Assign({
        player: "videoplayer",
        media: "patch/videos/test-videoplayer.mp4",
        origin: "https://pixabay.com/users/justyøu-587443/",
    });
    atuiMediasplayer_Run("videoplayer");
});
