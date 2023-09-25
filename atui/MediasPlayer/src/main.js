/* Close Audioplayer */

document.querySelectorAll(".mpClose").forEach(function (button) {
    button.addEventListener("click", function () {
        const player = vkClosest(this, ".mpAudio, .mpVideo", ".mpAudio, .mpVideo")[0];
        const media = player.querySelector("audio, video");
        media.pause();
        player.style.display = "none";
    });
});

/* Display error for broken media link */

function mpLinkBroken(player, mediaLink) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("vkBox", "styleDanger");
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
    if (player.classList.contains("mpVideo")) {
        player.querySelector("article").prepend(alertBox);
    } else {
        player.prepend(alertBox);
    }
}

/* Assign an audio to an audioplayer */

function mpAssign(data) {
    const player = document.getElementById(data.player);
    const media = player.querySelector("audio, video");
    const cover = player.querySelector(".mpCover img, .mpCover i");
    const title = player.querySelector(".mpInfoTitle");
    const author = player.querySelector(".mpInfoAuthor");
    const albumName = player.querySelector(".mpInfoAlbumName");
    const releaseDate = player.querySelector(".mpInfoReleaseDate");
    const origin = player.querySelector(".mpInfoOrigin");

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

function mpRun(player) {
    player = document.getElementById(player);
    const media = player.querySelector("audio, video");
    const button = player.querySelector(".mpRun");
    if (media.paused === true) {
        mpStop();
        player.querySelectorAll(".vkBox.styleDanger").forEach((alertBox) => {
            alertBox.remove();
        });
        const mediaLink = media.getAttribute("src");
        const mediaLinkIsOk = verifyLink(mediaLink);
        mediaLinkIsOk.then((response) => {
            if (!response) {
                mpLinkBroken(player, mediaLink);
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

document.querySelectorAll(".mpAudio, .mpVideo").forEach((player) => {
    player.querySelector(".mpRun").addEventListener("click", () => {
        mpRun(player.getAttribute("id"));
    });
});

/* Manage when audio ends */

document.querySelectorAll(".mpAudio, .mpVideo").forEach((player) => {
    const button = player.querySelector(".mpRun");
    const media = player.querySelector("audio, video");
    media.addEventListener("ended", () => {
        button.classList.replace("ti-player-pause", "ti-player-play");
        if (player.classList.contains("styleFloating")) {
            player.style.display = "none";
        }
    });
});

/* Stop all others medias when playing a new one */

function mpStop() {
    const medias = document.querySelectorAll("audio, video");
    medias.forEach(function (media) {
        media.pause();
    });
    document.querySelectorAll(".mpRun").forEach(function (button) {
        button.classList.replace("ti-player-pause", "ti-player-play");
    });
}

/* Update timer */

document.querySelectorAll(".mpAudio, .mpVideo").forEach((player) => {
    const media = player.querySelector("audio, video");
    const timer = player.querySelector(".mpTimer");
    const progressBar = player.querySelector(".mpProgressInside");
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

document.querySelectorAll(".mpAudio, .mpVideo").forEach((player) => {
    const backward = player.querySelector(".mpBackward");
    const forward = player.querySelector(".mpForward");
    const media = player.querySelector("audio, video");
    backward.addEventListener("click", () => {
        media.currentTime -= 10;
    });
    forward.addEventListener("click", () => {
        media.currentTime += 10;
    });
});

/* Change playback */

document.querySelectorAll(".mpProgress").forEach((progressBar) => {
    progressBar.addEventListener("click", (event) => {
        const media = vkClosest(progressBar, "audio, video", ".mpAudio, .mpVideo")[0];
        const percent = (event.offsetX / progressBar.offsetWidth) * 100;
        media.currentTime = (media.duration * percent) / 100;
        progressBar.querySelector(".mpProgressInside").style.width = `${percent}%`;
    });
});

/* Loop */

document.querySelectorAll(".mpLoop").forEach(function (button) {
    button.addEventListener("click", function () {
        const media = vkClosest(this, "audio, video", ".mpAudio, .mpVideo")[0];
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

document.querySelectorAll(".mpSound").forEach(function (button) {
    button.addEventListener("click", function () {
        const media = vkClosest(this, "audio, video", ".mpAudio, .mpVideo")[0];
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

document.querySelectorAll(".mpFullscreen").forEach((button) => {
    button.addEventListener("click", () => {
        const media = vkClosest(button, "video", ".mpVideo")[0];
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

document.querySelectorAll(".mpPip").forEach((button) => {
    button.addEventListener("click", () => {
        const media = vkClosest(button, "video", ".mpVideo")[0];
        if (media !== document.pictureInPictureElement) {
            media.requestPictureInPicture();
        } else {
            document.exitPictureInPicture();
        }
    });
});
