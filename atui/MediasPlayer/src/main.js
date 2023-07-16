/*!
 * ATUI v0.4.1 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public License (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

/* Close Audioplayer */

document.querySelectorAll(".atuiMediasplayer_Close").forEach(function (button) {
    button.addEventListener("click", function () {
        const player = atuiKernel_ToolsFindElement(
            this,
            ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer",
            ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer",
        )[0];
        const media = player.querySelector("audio, video");
        media.pause();
        player.style.display = "none";
    });
});

/* Display error for broken media link */

function atuiMediasplayer_BrokenLink(player, mediaLink) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("atuiKernel_SectionBox", "optionAlert");
    const alertIcon = document.createElement("i");
    alertIcon.classList.add("ti", "ti-circle-x");
    const alertText = document.createElement("p");
    if (mediaLink !== null) {
        alertText.innerHTML = `ERROR : The media "<code>${mediaLink}</code>" is not reachable.`;
    } else {
        alertText.innerHTML = `ERROR : There is no media in this mediasplayer.`;
    }
    alertBox.appendChild(alertIcon);
    alertBox.appendChild(alertText);
    if (player.classList.contains("atuiMediasplayer_Videoplayer")) {
        player.querySelector("article").prepend(alertBox);
    } else {
        player.prepend(alertBox);
    }
}

/* Assign an audio to an audioplayer */

function atuiMediasplayer_Assign(data) {
    const player = document.getElementById(data.player);
    const media = player.querySelector("audio, video");
    const cover = player.querySelector(".atuiMediasplayer_Cover img, .atuiMediasplayer_Cover i");
    const title = player.querySelector(".atuiMediasplayer_InformationTitle");
    const author = player.querySelector(".atuiMediasplayer_InformationAuthor");
    const albumName = player.querySelector(".atuiMediasplayer_InformationAlbumName");
    const releaseDate = player.querySelector(".atuiMediasplayer_InformationReleaseDate");
    const origin = player.querySelector(".atuiMediasplayer_InformationOrigin");

    media.setAttribute("src", data.media);
    if (data.cover !== undefined) {
        cover.setAttribute("src", data.cover);
    }
    if (data.title !== undefined) {
        title.innerHTML = data.title;
    }
    if (data.author !== undefined) {
        author.innerHTML = data.author;
    }
    if (data.albumName !== undefined) {
        albumName.innerHTML = data.albumName;
    }
    if (data.releaseDate !== undefined) {
        releaseDate.innerHTML = data.releaseDate;
    }
    if (data.origin !== undefined) {
        origin.setAttribute("href", data.origin);
    }
}

/* Play and pause a media */

function atuiMediasplayer_Run(player) {
    player = document.getElementById(player);
    const media = player.querySelector("audio, video");
    const button = player.querySelector(".atuiMediasplayer_Run");
    if (media.paused === true) {
        atuiMediasplayer_StopAllMedia();
        player.querySelectorAll(".atuiKernel_SectionBox.optionAlert").forEach((alertBox) => {
            alertBox.remove();
        });
        const mediaLink = media.getAttribute("src");
        const mediaLinkIsOk = verifyLink(mediaLink);
        mediaLinkIsOk.then((response) => {
            if (!response) {
                atuiMediasplayer_BrokenLink(player, mediaLink);
            }
        });
        media.play();
        if (window.getComputedStyle(player).display === "none") {
            player.style.display = "block";
        }
        button.classList.replace("ti-player-play", "ti-player-pause");
    } else if (media.paused === false) {
        media.pause();
        button.classList.replace("ti-player-pause", "ti-player-play");
    } else {
        console.error("An unexpected error has occurred.");
    }
}

document.querySelectorAll(".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer").forEach((player) => {
    player.querySelector(".atuiMediasplayer_Run").addEventListener("click", () => {
        atuiMediasplayer_Run(player.getAttribute("id"));
    });
});

/* Manage when audio ends */

document.querySelectorAll(".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer").forEach((player) => {
    const button = player.querySelector(".atuiMediasplayer_Run");
    const media = player.querySelector("audio, video");
    media.addEventListener("ended", () => {
        button.classList.replace("ti-player-pause", "ti-player-play");
        if (player.classList.contains("optionFloating")) {
            player.style.display = "none";
        }
    });
});

/* Stop all others medias when playing a new one */

function atuiMediasplayer_StopAllMedia() {
    const medias = document.querySelectorAll("audio, video");
    medias.forEach(function (media) {
        media.pause();
    });
    document.querySelectorAll(".atuiMediasplayer_Run").forEach(function (button) {
        button.classList.replace("ti-player-pause", "ti-player-play");
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
            listened = duration = 0;
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
        const media = atuiKernel_ToolsFindElement(
            progressbar,
            "audio, video",
            ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer",
        )[0];
        const percent = (event.offsetX / progressbar.offsetWidth) * 100;
        media.currentTime = (media.duration * percent) / 100;
        progressbar.querySelector(".atuiMediasplayer_ProgressbarInside").style.width = `${percent}%`;
    });
});

/* Loop */

document.querySelectorAll(".atuiMediasplayer_Loop").forEach(function (button) {
    button.addEventListener("click", function () {
        const media = atuiKernel_ToolsFindElement(
            this,
            "audio, video",
            ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer",
        )[0];
        if (media.loop === false) {
            media.loop = true;
            this.classList.replace("ti-repeat", "ti-repeat-off");
        } else if (media.loop === true) {
            media.loop = false;
            this.classList.replace("ti-repeat-off", "ti-repeat");
        } else {
            console.error("An unexpected error has occurred.");
        }
    });
});

/* Sound */

document.querySelectorAll(".atuiMediasplayer_Sound").forEach(function (button) {
    button.addEventListener("click", function () {
        const media = atuiKernel_ToolsFindElement(
            this,
            "audio, video",
            ".atuiMediasplayer_Audioplayer, .atuiMediasplayer_Videoplayer",
        )[0];
        if (media.muted === false) {
            media.muted = true;
            this.classList.replace("ti-volume", "ti-volume-off");
        } else if (media.muted === true) {
            media.muted = false;
            this.classList.replace("ti-volume-off", "ti-volume");
        } else {
            console.error("An unexpected error has occurred.");
        }
    });
});

/* Fullscreen */

document.querySelectorAll(".atuiMediasplayer_Fullscreen").forEach((button) => {
    button.addEventListener("click", () => {
        const media = atuiKernel_ToolsFindElement(button, "video", ".atuiMediasplayer_Videoplayer")[0];
        if (media.requestFullscreen) {
            media.requestFullscreen();
        } else if (media.webkitRequestFullscreen) {
            media.webkitRequestFullscreen();
        } else {
            console.error("The browser does not support fullscreen mode.");
        }
    });
});

/* Picture in picture */

document.querySelectorAll(".atuiMediasplayer_Pip").forEach((button) => {
    button.addEventListener("click", () => {
        const media = atuiKernel_ToolsFindElement(button, "video", ".atuiMediasplayer_Videoplayer")[0];
        if (media !== document.pictureInPictureElement) {
            media.requestPictureInPicture();
        } else {
            document.exitPictureInPicture();
        }
    });
});
