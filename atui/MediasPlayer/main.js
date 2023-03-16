/*!
 * ATUI v0.3.2 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

/* Metadata */

const atuiMediasplayer_Metadata = {
    name: "Medias Player",
    author: "alcapitan (on GitHub)",
    version: "v0.3.2",
    website: "https://github.com/alcapitan/atui",
    in_development: true,
};
// atuiKernel_MetadataDisplay(atuiMediasplayer_Metadata);

/* Close Audioplayer */

document.querySelectorAll(".atuiMediasplayer_Close").forEach(function (button) {
    button.addEventListener("click", function () {
        const player = findElement(
            this,
            ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer",
            ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer"
        );
        const media = player.querySelector("audio, video");
        media.pause();
        player.style.display = "none";
    });
});

/* Assign an audio to an audioplayer */

function atuiMediasplayer_Assign(data) {
    const player = document.getElementById(data["player"]);
    const media = player.querySelector("audio, video");
    const cover = player.querySelector(".atuiMediasplayer_Cover img");
    const title = player.querySelector(".atuiMediasplayer_InformationTitle");
    const author = player.querySelector(".atuiMediasplayer_InformationAuthor");
    const albumName = player.querySelector(".atuiMediasplayer_InformationAlbumName");
    const releaseDate = player.querySelector(".atuiMediasplayer_InformationReleaseDate");
    const origin = player.querySelector(".atuiMediasplayer_InformationOrigin");

    media.setAttribute("src", data["media"]);
    if (data["cover"] !== undefined) {
        cover.setAttribute("src", data["cover"]);
    }
    if (data["title"] !== undefined) {
        title.innerHTML = data["title"];
    }
    if (data["author"] !== undefined) {
        author.innerHTML = data["author"];
    }
    if (data["albumName"] !== undefined) {
        albumName.innerHTML = data["albumName"];
    }
    if (data["releaseDate"] !== undefined) {
        releaseDate.innerHTML = data["releaseDate"];
    }
    if (data["origin"] !== undefined) {
        origin.setAttribute("href", data["origin"]);
    }
}

/* Play and pause a media */

document.querySelectorAll(".atuiMediasplayer_Run").forEach(function (button) {
    button.addEventListener("click", function () {
        let media;
        if (this.getAttribute("data-mp-target") !== null) {
            media = document.querySelector(
                `${this.getAttribute("data-mp-target")} audio, ${this.getAttribute("data-mp-target")} video`
            );
            button = findElement(
                media,
                ".atuiMediasplayer_Run",
                ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer"
            );
            if (this.getAttribute("data-mp-assign") !== null) {
                data = JSON.parse(this.getAttribute("data-mp-assign"));
                atuiMediasplayer_Assign(data);
            }
        } else {
            media = findElement(this, "audio, video", ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer");
            button = this;
        }
        if (media.paused === true) {
            stopAllMedia();
            media.play();
            const player = findElement(
                media,
                ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer",
                ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer"
            );
            if (window.getComputedStyle(player).display === "none") {
                player.style.display = "block";
            }
            button.setAttribute("src", "atui/MediasPlayer/medias/pause.png");
            button.setAttribute("alt", "Pause the media");
        } else if (media.paused === false) {
            media.pause();
            button.setAttribute("src", "atui/MediasPlayer/medias/play.png");
            button.setAttribute("alt", "Play the media");
        } else {
            console.error("An unexpected error has occurred.");
        }
    });
});

/* Manage when audio ends */

document.querySelectorAll(".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer").forEach((player) => {
    const button = player.querySelector(".atuiMediasplayer_Run");
    const media = player.querySelector("audio, video");
    media.addEventListener("ended", () => {
        button.setAttribute("src", "atui/MediasPlayer/medias/play.png");
        button.setAttribute("alt", "Play the media.");
        if (player.classList.contains("optionFloating")) {
            player.style.display = "none";
        }
    });
});

/* Stop all others medias when playing a new one */

function stopAllMedia() {
    const medias = document.querySelectorAll("audio, video");
    medias.forEach(function (media) {
        media.pause();
    });
    document.querySelectorAll(".atuiMediasplayer_Run").forEach(function (button) {
        button.setAttribute("src", "atui/MediasPlayer/medias/play.png");
        button.setAttribute("alt", "Play the audio.");
    });
}

/* Update timer */

document.querySelectorAll(".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer").forEach((player) => {
    const media = player.querySelector("audio, video");
    const timer = player.querySelector(".atuiMediasplayer_Timer");
    const progressBar = player.querySelector(".atuiMediasplayer_ProgressbarInside");
    media.addEventListener("timeupdate", () => {
        let listened = media.currentTime;
        let duration = media.duration;
        if (isNaN(duration)) {
            (listened = 0), (duration = 0);
        }
        const percent = Math.round((listened / duration) * 100);
        timer.innerText = `${convertTime(listened)} - ${convertTime(duration)}`;
        progressBar.style.width = `${percent}%`;
    });
});

/* Go forward or backward */

document.querySelectorAll(".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer").forEach((player) => {
    const backward = player.querySelector(".atuiMediasplayer_Backward");
    const forward = player.querySelector(".atuiMediasplayer_Forward");
    const media = player.querySelector("audio, video");
    backward.addEventListener("click", () => {
        media.currentTime -= 10;
    });
    forward.addEventListener("click", () => {
        media.currentTime += 10;
    });
});

/* Change playback */

document.querySelectorAll(".atuiMediasplayer_Progressbar").forEach((progressbar) => {
    progressbar.addEventListener("click", (event) => {
        const media = findElement(
            progressbar,
            "audio, video",
            ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer"
        );
        const percent = (event.offsetX / progressbar.offsetWidth) * 100;
        media.currentTime = (media.duration * percent) / 100;
        progressbar.querySelector(".atuiMediasplayer_ProgressbarInside").style.width = `${percent}%`;
    });
});

/* Infos */

document.querySelectorAll(".atuiMediasplayer_Infos").forEach(function (button) {
    button.addEventListener("mouseenter", function () {
        atuiKernel_ToolsContextmenuDisplay(this, true, false);
    });
    button.addEventListener("mouseleave", function () {
        atuiKernel_ToolsContextmenuDisplay(this, false, undefined);
    });
});

/* Loop */

document.querySelectorAll(".atuiMediasplayer_Loop").forEach(function (button) {
    button.addEventListener("click", function () {
        const media = findElement(this, "audio, video", ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer");
        if (media.loop === false) {
            media.loop = true;
            this.setAttribute("src", "atui/MediasPlayer/medias/no_loop.png");
            this.setAttribute("alt", "Stop playing the media in a loop");
        } else if (media.loop === true) {
            media.loop = false;
            this.setAttribute("src", "atui/MediasPlayer/medias/loop.png");
            this.setAttribute("alt", "Play the media in a loop");
        } else {
            console.error("An unexpected error has occurred.");
        }
    });
});

/* Sound */

document.querySelectorAll(".atuiMediasplayer_Sound").forEach(function (button) {
    button.addEventListener("click", function () {
        const media = findElement(this, "audio, video", ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer");
        if (media.muted === false) {
            media.muted = true;
            this.setAttribute("src", "atui/MediasPlayer/medias/nosound.png");
            this.setAttribute("alt", "Mute sound.");
        } else if (media.muted === true) {
            media.muted = false;
            this.setAttribute("src", "atui/MediasPlayer/medias/sound.png");
            this.setAttribute("alt", "Enable sound.");
        } else {
            console.error("An unexpected error has occurred.");
        }
    });
});

/* Fullscreen */

document.querySelectorAll(".atuiMediasplayer_Fullscreen").forEach((button) => {
    button.addEventListener("click", () => {
        const media = findElement(button, "video", ".atuiMediasplayer_Videoplayer");
        if (media.requestFullscreen) {
            media.requestFullscreen();
        } else if (media.webkitRequestFullscreen) {
            media.webkitRequestFullscreen();
        } else {
            console.error("The browser does not support fullscreen mode.");
            return;
        }
    });
});

/* Picture in picture */

document.querySelectorAll(".atuiMediasplayer_Pip").forEach((button) => {
    button.addEventListener("click", () => {
        const media = findElement(button, "video", ".atuiMediasplayer_Videoplayer");
        if (media !== document.pictureInPictureElement) {
            media.requestPictureInPicture();
        } else {
            document.exitPictureInPicture();
        }
    });
});
