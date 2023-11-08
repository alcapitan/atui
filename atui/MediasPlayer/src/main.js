/* Close Audioplayer */

document.querySelectorAll(".mpClose").forEach(function (button) {
    button.addEventListener("click", function () {
        const player = vkClosest(this, ".mpAudio, .mpVideo", ".mpAudio, .mpVideo")[0];
        const media = player.querySelector("audio, video");
        media.pause();
        player.style.display = "none";
    });
});

/* Assign an audio to an audioplayer */

function mpAssign(data) {
    /** possible attributes of data :
     - player (required)
     - media (required)
     - picture
     - title
     - description
     - source
     - date
     - playlist
     - author
     */

    // Player
    if (data.player === undefined) {
        console.error("The player attribute is required.");
        return false;
    }
    const player = document.querySelector(data.player);
    if (player === null) {
        console.error(`The player "${data.player}" has not been found in this webpage.`);
        return false;
    }

    // Media
    if (data.media === undefined) {
        console.error("The media attribute is required.");
        return false;
    }
    const media = player.querySelector("audio, video");
    if (media === null) {
        console.error(`The player ${data.player} does not have any audio or video tag.`);
        return false;
    } else {
        media.setAttribute("src", data.media);
    }

    // Picture
    if (media.tagName === "AUDIO") {
        const picture = player.querySelector(".mpMediaPicture img, .mpMediaPicture i");
        if (picture === null && data.picture !== undefined) {
            console.error(`The player ${data.player} does not have any album cover element.`);
            return false;
        }
        picture.setAttribute(
            "src",
            data.picture !== undefined ? data.picture : "https://unpkg.com/@tabler/icons/icons/disc.svg",
        );
    } else if (media.tagName === "VIDEO") {
        media.setAttribute("poster", data.picture !== undefined ? data.picture : "");
        // TODO: there is no default poster for video
    }

    // Title
    const title = player.querySelector(".mpMediaTitle");
    if (title === null && data.title !== undefined) {
        console.error(`The player ${data.player} does not have any title element.`);
        return false;
    }
    if (title !== null) title.innerHTML = data.title !== undefined ? data.title : "";

    // Description
    const description = player.querySelector(".mpMediaDescription");
    if (description === null && data.description !== undefined) {
        console.error(`The player ${data.player} does not have any description element.`);
        return false;
    }
    if (description !== null) description.innerHTML = data.description !== undefined ? data.description : "";

    // Source
    const source = player.querySelector(".mpMediaSource");
    if (source === null && data.source !== undefined) {
        console.error(`The player ${data.player} does not have any source element.`);
        return false;
    }
    if (source !== null) {
        if (data.source === undefined) source.style.display = "none";
        else {
            source.setAttribute("href", data.source);
            source.style.display = "inherit";
        }
    }

    // Date
    const date = player.querySelector(".mpMediaDate");
    if (date === null && data.date !== undefined) {
        console.error(`The player ${data.player} does not have any date element.`);
        return false;
    }
    if (date !== null) {
        if (data.date === undefined) date.style.display = "none";
        else {
            date.innerHTML = data.date;
            date.style.display = "inherit";
        }
    }

    // Playlist
    const playlist = player.querySelector(".mpMediaPlaylist");
    if (playlist === null && data.playlist !== undefined) {
        console.error(`The player ${data.player} does not have any playlist element.`);
        return false;
    }
    if (playlist !== null) {
        if (data.playlist === undefined) playlist.style.display = "none";
        else {
            playlist.setAttribute("href", data.playlist);
            playlist.style.display = "inherit";
        }
    }

    // Author
    const author = player.querySelector(".mpMediaAuthor");
    if (author === null && data.author !== undefined) {
        console.error(`The player ${data.player} does not have any author element.`);
        return false;
    }
    if (author !== null) {
        if (data.author === undefined) author.style.display = "none";
        else {
            author.innerHTML = data.author;
            author.style.display = "inherit";
        }
    }

    return true;
}

/* Manage media loading errors */

function mpRaiseError(player, text) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("vkBox", "styleDanger");

    const alertIcon = document.createElement("i");
    alertIcon.classList.add("ti", "ti-circle-x");
    alertBox.appendChild(alertIcon);

    const alertText = document.createElement("p");
    alertText.innerHTML = text;
    alertBox.appendChild(alertText);

    if (player.classList.contains("mpVideo")) {
        player.querySelector("article").prepend(alertBox);
        media.setAttribute("poster", "");
    } else {
        player.prepend(alertBox);
    }
}

document.querySelectorAll(".mpAudio, .mpVideo").forEach((player) => {
    const media = player.querySelector("audio, video");
    media.addEventListener("error", () => {
        player.querySelectorAll(".vkBox.styleDanger").forEach((alertBox) => {
            alertBox.remove();
        });

        let text = `ERROR : `;
        switch (error.code) {
            case 1:
                text += `Media loading has been interrupted by the user. `;
                break;
            case 2:
                text += `Media loading was interrupted due to a network problem. `;
                break;
            case 3:
                text += `Media cannot be read due to a file decoding error. `;
                break;
            case 4:
                text += `Media has not been found. `;
                break;
            default:
                text += `An unexpected error has occurred. `;
        }
        const mediaLink = player.querySelector("audio, video").getAttribute("src");
        text += `<hr /><small>Media link : <code>${mediaLink}</code></small>`;
        text += `<br /><small>Technical error: <code>${error.code} ${error.message}</code></small>`;
        mpRaiseError(player, text);
    });
});

/* Play and pause a media */

function mpRun(playerSelector) {
    const player = document.querySelector(playerSelector);
    const media = player.querySelector("audio, video");
    const button = player.querySelector(".mpRun");
    if (media.getAttribute("src") === null) {
        let text = `ERROR : This player ${playerSelector} does not have any media assigned.`;
        text += `<hr /><small>MediaPlayer querySelector : <code>${playerSelector}</code></small>`;
        mpRaiseError(player, text);
        return 0;
    }
    if (media.paused === true) {
        mpStop();
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
        mpRun(`#${player.getAttribute("id")}`);
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
