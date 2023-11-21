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

    // Clear media player
    player.querySelectorAll(".vkBox.styleDanger").forEach((alertBox) => {
        alertBox.remove();
    });
    if (player.classList.contains("mpVideo") && player.classList.contains("styleOverlay")) {
        player.querySelector(".mpDashboard").style.opacity = "1";
    }
    player.querySelector(".mpRun").classList.replace("ti-player-pause", "ti-player-play");
    player.querySelector(".mpTimer").innerText = "00:00 - 00:00";
    player.querySelector(".mpProgressInside").style.width = "0%";

    // Media
    if (data.media === undefined) {
        console.error("The media attribute is required.");
        return false;
    }
    const media = player.querySelector("audio, video");
    if (media === null) {
        // TODO: we could call mpRaiseError() here with an understandable message for the user (who is not developer !)
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

/* Raise error boxes inside the player */

function mpRaiseError(player, text) {
    player.querySelectorAll(".vkBox.styleDanger").forEach((alertBox) => {
        alertBox.remove();
    });

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
        player.querySelector("video").setAttribute("poster", "");
    } else {
        player.prepend(alertBox);
    }
    if (window.getComputedStyle(player).display === "none") {
        player.style.display = "block";
    }
}

/* Stop all others medias when playing a new one */

function mpStop() {
    const medias = document.querySelectorAll("audio, video");
    medias.forEach((media) => {
        media.pause();
    });
    document.querySelectorAll(".mpRun").forEach((button) => {
        button.classList.replace("ti-player-pause", "ti-player-play");
    });
}

/* Touch and click interactions for video player */

function toggleDashboardOpacity(player) {
    const media = player.querySelector("video");
    const dashboard = player.querySelector(".mpDashboard");

    dashboard.style.opacity = "1";
    if (media.paused === false) {
        clearTimeout(media.period);
        media.addEventListener("mouseleave", () => {
            media.period = setTimeout(() => {
                dashboard.style.opacity = "0.2";
            }, 2000);
        });
    }
}

document.querySelectorAll(".mpVideo.styleOverlay").forEach((player) => {
    const media = player.querySelector("video");
    const dashboard = player.querySelector(".mpDashboard");

    dashboard.addEventListener("mouseover", () => {
        toggleDashboardOpacity(player);
    });

    const isTouchscreen = navigator.maxTouchPoints > 0;
    if (isTouchscreen) {
        media.addEventListener("dblclick", () => {
            mpRun(`#${player.getAttribute("id")}`);
        });
    } else {
        media.addEventListener("click", () => {
            mpRun(`#${player.getAttribute("id")}`);
        });
        media.addEventListener("dblclick", () => {
            mpToggleFullscreen(player);
        });
    }
});

/* Initialize media player features */

document.querySelectorAll(".mpAudio, .mpVideo").forEach((player) => {
    const media = player.querySelector("audio, video");

    media.addEventListener("timeupdate", () => {
        mpUpdateTimer(player);
    });

    media.addEventListener("ended", () => {
        mpMediaEnded(player);
    });

    media.addEventListener("error", (error) => {
        mpLoadingError(player, error);
    });

    mpChangePlaybackByButtons(player);

    mpChangePlaybackByProgressBar(player);

    player.querySelector(".mpRun").addEventListener("click", () => {
        mpRun(`#${player.getAttribute("id")}`);
        //* This complex previous line should be kept because mpRun needs player's selector id !
    });

    player.querySelector(".mpLoop")?.addEventListener("click", () => {
        mpToggleLoop(player);
    });

    player.querySelector(".mpSound")?.addEventListener("click", () => {
        mpToggleSound(player);
    });

    player.querySelector(".mpClose")?.addEventListener("click", () => {
        mpClose(player);
    });

    player.querySelector(".mpFullscreen")?.addEventListener("click", () => {
        mpToggleFullscreen(player);
    });

    player.querySelector(".mpPip")?.addEventListener("click", () => {
        mpTogglePip(player);
    });
});

/* Update timer */

function mpUpdateTimer(player) {
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
}

/* Manage when audio ends */

function mpMediaEnded(player) {
    player.querySelector(".mpRun").classList.replace("ti-player-pause", "ti-player-play");
    if (player.classList.contains("styleFloating")) {
        player.style.display = "none";
    }
}

/* Manage media loading errors */

//* This function is almost useless and could be removed soon
function mpLoadingError(player, error) {
    let text = `ERROR : `;
    text += `The media cannot be loaded. `;
    /* switch (error.code) {
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
        case 5:
            text += `Media cannot be played due to a network error. `;
            break;
        default:
            text += `An unexpected error has occurred. `;
    } */
    const mediaLink = player.querySelector("audio, video").getAttribute("src");
    text += `<hr /><small>Media link : <code>${mediaLink}</code></small>`;
    text += `<br /><small>Technical error: <code>${error.code} - ${error.message}</code></small>`;
    console.error(text);
    mpRaiseError(player, text);
}

/* Change playback by buttons */

function mpChangePlaybackByButtons(player) {
    const media = player.querySelector("audio, video");
    const backward = player.querySelector(".mpBackward");
    const forward = player.querySelector(".mpForward");
    backward.addEventListener("click", () => {
        media.currentTime -= 10;
    });
    forward.addEventListener("click", () => {
        media.currentTime += 10;
    });
}

/* Change playback by progress bar */

function mpChangePlaybackByProgressBar(player) {
    const media = player.querySelector("audio, video");
    const progressBar = player.querySelector(".mpProgress");
    progressBar.addEventListener("click", (event) => {
        if (isNaN(media.duration)) return false;
        const percent = (event.offsetX / progressBar.offsetWidth) * 100;
        media.currentTime = (media.duration * percent) / 100;
        progressBar.querySelector(".mpProgressInside").style.width = `${percent}%`;

        return true;
    });
}

/* Play and pause a media */

function mpRun(playerSelector) {
    const player = document.querySelector(playerSelector);
    const media = player.querySelector("audio, video");
    const button = player.querySelector(".mpRun");

    if (media.paused === true) {
        mpStop();
        if (window.getComputedStyle(player).display === "none") {
            player.style.display = "block";
        }
        media.play();
        button.classList.replace("ti-player-play", "ti-player-pause");
    } else if (media.paused === false) {
        media.pause();
        button.classList.replace("ti-player-pause", "ti-player-play");
        if (player.classList.contains("mpVideo") && player.classList.contains("styleOverlay")) {
            player.querySelector(".mpDashboard").style.opacity = "1"; // Reset dashboard opacity
        }
    }

    return true;
}

/* Loop */

function mpToggleLoop(player) {
    const media = player.querySelector("audio, video");
    const button = player.querySelector(".mpLoop");
    if (media.loop === false) {
        media.loop = true;
        button.classList.replace("ti-repeat", "ti-repeat-off");
    } else if (media.loop === true) {
        media.loop = false;
        button.classList.replace("ti-repeat-off", "ti-repeat");
    }
}

/* Sound */

function mpToggleSound(player) {
    const media = player.querySelector("audio, video");
    const button = player.querySelector(".mpSound");
    if (media.muted === false) {
        media.muted = true;
        button.classList.replace("ti-volume", "ti-volume-off");
    } else if (media.muted === true) {
        media.muted = false;
        button.classList.replace("ti-volume-off", "ti-volume");
    }
}

/* Close Audioplayer */

function mpClose(player) {
    player.querySelector("audio, video").pause();
    player.style.display = "none";
}

/* Fullscreen */

function mpToggleFullscreen(player) {
    const media = player.querySelector("video");
    if (media.src === "") return 0; // don't toggle fullscreen if no media is assigned
    if (media.requestFullscreen) {
        media.requestFullscreen();
    } else if (media.webkitRequestFullscreen) {
        media.webkitRequestFullscreen();
    } else {
        console.error("The browser does not support fullscreen mode.");
    }
}

/* Picture in picture */

function mpTogglePip(player) {
    const media = player.querySelector("video");
    if (media.src === "") return 0; // don't toggle fullscreen if no media is assigned
    if (media !== document.pictureInPictureElement) {
        media.requestPictureInPicture();
    } else if (document.exitPictureInPicture) {
        document.exitPictureInPicture();
    } else {
        console.error("The browser does not support picture in picture mode.");
    }
}
