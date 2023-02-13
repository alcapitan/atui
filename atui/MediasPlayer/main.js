/*!
 * ATUI v0.3.0 (https://github.com/alcapitan/atui)
 * This code is released under GNU General Public Licence (https://github.com/alcapitan/atui/blob/dev/LICENSE.md)
 */

/* Metadata */

const atuiMediasplayer_Metadata = {
    name: "Medias Player",
    author: "alcapitan (on GitHub)",
    version: "v0.3.0",
    website: "https://github.com/alcapitan/atui",
    in_development: true,
};
// atuiKernel_MetadataDisplay(atuiMediasplayer_Metadata);

/* Common */

function getPosition(element) {
    let left = 0;
    do {
        left += element.offsetLeft;
    } while ((element = element.offsetParent));

    return left;
}

/* Audio */

const atuiMediasplayer_Audioplayer = document.getElementById("atuiMediasplayer_Audioplayer"); // Element audioPlayer
const atuiMediasplayer_AudioplayerMusic = document.getElementById("atuiMediasplayer_AudioplayerMusic"); // Balise HTML <audio> diffusant la musique

/* Execution d'une musique */

function atuiMediasplayer_AudioplayerMusicChange(atuiMediasplayer_AudioplayerMusicChosen) {
    atuiMediasplayer_Audioplayer.style.display = "flex";
    if (atuiMediasplayer_AudioplayerMusic.src != atuiMediasplayer_AudioplayerMusicChosen[0]) {
        /* Si la musique n'est pas la même que celle précédemment sélectionné */
        atuiMediasplayer_AudioplayerMusic.src = atuiMediasplayer_AudioplayerMusicChosen[0]; /* Chemin vers la musique */
        document.getElementById("atuiMediasplayer_AudioplayerMusicinformationsCover").src =
            atuiMediasplayer_AudioplayerMusicChosen[1]; /* Chemin vers la couverture d'album */
        document.getElementById("atuiMediasplayer_AudioplayerMusicinformations").childNodes[1].innerHTML =
            atuiMediasplayer_AudioplayerMusicChosen[2];
        document.getElementById("atuiMediasplayer_AudioplayerMusicinformations").childNodes[3].innerHTML =
            atuiMediasplayer_AudioplayerMusicChosen[3];
        document.getElementById(
            "atuiMediasplayer_AudioplayerMusicinformationsAdvanced"
        ).childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerHTML =
            atuiMediasplayer_AudioplayerMusicChosen[4];
        document.getElementById(
            "atuiMediasplayer_AudioplayerMusicinformationsAdvanced"
        ).childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerHTML =
            atuiMediasplayer_AudioplayerMusicChosen[5];
    }
    atuiMediasplayer_AudioplayerMusicRun();
}

/* Hide Audioplayer */

/*document
    .getElementById("atuiMediasplayer_AudioplayerClose")
    .addEventListener("click", atuiMediasplayer_AudioplayerClose);
atuiMediasplayer_AudioplayerMusic.addEventListener(
    "ended",
    atuiMediasplayer_AudioplayerClose
); // Ferme AudioPlayer quand la musique est finie
function atuiMediasplayer_AudioplayerClose() {
    // Arrête la musique et ferme l'audioplayer.
    atuiMediasplayer_AudioplayerMusic.pause();
    // Le minuteur n'est pas remis à 0 ici, car prochainement si la prochaine musique est différente le compteur reviendra automatiquement à 0, si c'est la même ça reprend là où c'était pour la praticité.
    atuiMediasplayer_Audioplayer.style.display = "none";
}*/

/* Assign an audio to an audioplayer */

function atuiMediasplayer_AudioplayerMusicAssign(data) {
    player = document.getElementById(data['player']);
    audio = player.querySelector("audio");
    button = player.querySelector(".atuiMediasplayer_AudioplayerButtonsBasicRun");
    cover = player.querySelector(".atuiMediasplayer_AudioplayerCover img");
    title = player.querySelector(".atuiMediasplayer_AudioplayerInformationTitle");
    author = player.querySelector(".atuiMediasplayer_AudioplayerInformationAuthor");
    albumName = player.querySelector(".atuiMediasplayer_AudioplayerInformationAlbumName");
    releaseDate = player.querySelector(".atuiMediasplayer_AudioplayerInformationReleaseDate");
    origin = player.querySelector(".atuiMediasplayer_AudioplayerInformationOrigin");
    
    audio.setAttribute("src", data["music"]);
    cover.setAttribute("src", data["cover"]);
    title.innerHTML = data["title"];
    author.innerHTML = data["author"];
    albumName.innerHTML = data["albumName"];
    releaseDate.innerHTML = data["releaseDate"];
    origin.setAttribute("href", data["origin"]);
}

/* Play and pause an audio */

document.querySelectorAll(".atuiMediasplayer_AudioplayerButtonsBasicRun").forEach(function (button) {
    button.addEventListener("click", function () {
        let audio;
        if (this.getAttribute("data-mp-target") !== null) {
            audio = document.querySelector(`${this.getAttribute("data-mp-target")} audio`);
            button = findElement(
                audio,
                ".atuiMediasplayer_AudioplayerButtonsBasicRun",
                ".atuiMediasplayer_Audioplayer"
            );
            if (this.getAttribute("data-mp-assign") !== null)
            {
                data = JSON.parse(this.getAttribute("data-mp-assign"));
                atuiMediasplayer_AudioplayerMusicAssign(data);
            }
        } else {
            audio = findElement(this, "audio", ".atuiMediasplayer_Audioplayer");
            button = this;
        }
        if (audio.paused === true) {
            audio.play();
            button.setAttribute("src", "atui/MediasPlayer/medias/pause.png");
            button.setAttribute("alt", "Pause the audio.");
        } else if (audio.paused === false) {
            audio.pause();
            button.setAttribute("src", "atui/MediasPlayer/medias/play.png");
            button.setAttribute("alt", "Play the audio.");
        } else {
            console.error("An unexpected error has occurred.");
        }
    });
});

/* Manage when audio ends */

document.querySelectorAll(".atuiMediasplayer_Audioplayer").forEach((player) => {
    let button = player.querySelector(".atuiMediasplayer_AudioplayerButtonsBasicRun");
    let audio = player.querySelector("audio");
    audio.addEventListener("ended", () => {
        button.setAttribute("src", "atui/MediasPlayer/medias/play.png");
        button.setAttribute("alt", "Play the audio.");
    });
});

/* Update timer */

document.querySelectorAll(".atuiMediasplayer_Audioplayer").forEach((player) => {
    let audio = player.querySelector("audio");
    let timer = player.querySelector(".atuiMediasplayer_AudioplayerTimer");
    let progressBar = player.querySelector(".atuiMediasplayer_AudioplayerProgressbarInside");
    audio.addEventListener("timeupdate", () => {
        let listened = audio.currentTime;
        let duration = audio.duration;
        if (isNaN(duration))
        {
            listened, duration = 0;
        }
        let percent = Math.round((listened / duration) * 100);
        timer.innerText = `${convertTime(listened)} - ${convertTime(duration)}`;
        progressBar.style.width = `${percent}%`;
    });
});

/* Go forward or backward */

document.querySelectorAll(".atuiMediasplayer_Audioplayer").forEach((player) => {
    let backward = player.querySelector(".atuiMediasplayer_AudioplayerButtonsBasicBackward");
    let forward = player.querySelector(".atuiMediasplayer_AudioplayerButtonsBasicForward");
    let audio = player.querySelector("audio");
    backward.addEventListener("click", () => {
        audio.currentTime -= 10;
    });
    forward.addEventListener("click", () => {
        audio.currentTime += 10;
    });
});

/* Change playback */

document.querySelectorAll(".atuiMediasplayer_AudioplayerProgressbar").forEach((progressbar) => {
    progressbar.addEventListener("click", (event) => {
        let audio = findElement(progressbar, "audio", ".atuiMediasplayer_Audioplayer");
        let percent = (event.offsetX / progressbar.offsetWidth) * 100;
        audio.currentTime = (audio.duration * percent) / 100;
        progressbar.querySelector(".atuiMediasplayer_AudioplayerProgressbarInside").style.width = `${percent}%`;
    });
});

/* Infos */

document.querySelectorAll(".atuiMediasplayer_AudioplayerInfos").forEach(function (button) {
    button.addEventListener("mouseenter", function () {
        atuiKernel_ToolsContextmenuDisplay(this, true, false);
    });
    button.addEventListener("mouseleave", function () {
        atuiKernel_ToolsContextmenuDisplay(this, false, undefined);
    });
});

/* Loop */

document.querySelectorAll(".atuiMediasplayer_AudioplayerButtonsAdvancedLoop").forEach(function (button) {
    button.addEventListener("click", function () {
        let audio = findElement(this, "audio", ".atuiMediasplayer_Audioplayer");
        if (audio.loop === false) {
            audio.loop = true;
            this.setAttribute("src", "atui/MediasPlayer/medias/noloop.png");
            this.setAttribute("alt", "Stop playing the audio in a loop.");
        } else if (audio.loop === true) {
            audio.loop = false;
            this.setAttribute("src", "atui/MediasPlayer/medias/loop.png");
            this.setAttribute("alt", "Play the audio in a loop.");
        } else {
            console.error("An unexpected error has occurred.");
        }
    });
});

/* Video */

const atuiMediasplayer_Videoplayer = document.getElementsByClassName("atuiMediasplayer_Videoplayer")[0].childNodes[1]; // Element VideoPlayer
const atuiMediasplayer_VideoplayerVideo = document.getElementById("atuiMediasplayer_VideoplayerVideo"); // Balise HTML <video>

/* Update progress time and bar */

atuiMediasplayer_VideoplayerVideo.addEventListener("timeupdate", atuiMediasplayer_VideoplayerVideoUpdate); // Met à jour le minuteur
function atuiMediasplayer_VideoplayerVideoUpdate() {
    const atuiMediasplayer_VideoplayerVideoListened = atuiMediasplayer_VideoplayerVideo.currentTime; // Temps écoulé de la musique
    const atuiMediasplayer_VideoplayerVideoDuration = atuiMediasplayer_VideoplayerVideo.duration; // Durée totale de la musique
    let atuiMediasplayer_VideoplayerVideoPercentlistened =
        atuiMediasplayer_VideoplayerVideoListened / atuiMediasplayer_VideoplayerVideoDuration;
    atuiMediasplayer_VideoplayerVideoPercentlistened = Math.round(
        atuiMediasplayer_VideoplayerVideoPercentlistened * 100
    ); // Converti la valeur en pourcentage
    document.getElementById("atuiMediasplayer_VideoplayerProgressbarInside").style.width =
        atuiMediasplayer_VideoplayerVideoPercentlistened + "%"; // Actualise le width de la progressbar selon le temps écoulé de la musique
    document.getElementById("atuiMediasplayer_VideoplayerListened").textContent = convertTime(
        atuiMediasplayer_VideoplayerVideoListened
    );
    document.getElementById("atuiMediasplayer_VideoplayerDuration").textContent = convertTime(
        atuiMediasplayer_VideoplayerVideoDuration
    );
}

/* Gestionnaire Play/Pause */

const atuiMediasplayer_VideoplayerButtonsBasicRun = document.getElementById(
    "atuiMediasplayer_VideoplayerButtonsBasicRun"
);
document
    .getElementById("atuiMediasplayer_VideoplayerButtonsBasicRun")
    .addEventListener("click", atuiMediasplayer_VideoplayerVideoPlayPause);
function atuiMediasplayer_VideoplayerVideoPlayPause() {
    if (atuiMediasplayer_VideoplayerVideo.paused) {
        atuiMediasplayer_VideoplayerVideo.play();
        atuiMediasplayer_VideoplayerButtonsBasicRun.setAttribute("src", "atui/MediasPlayer/medias/pause.png");
        atuiMediasplayer_VideoplayerButtonsBasicRun.setAttribute("alt", "Pause Video");
    } else {
        atuiMediasplayer_VideoplayerVideo.pause();
        atuiMediasplayer_VideoplayerButtonsBasicRun.setAttribute("src", "atui/MediasPlayer/medias/play.png");
        atuiMediasplayer_VideoplayerButtonsBasicRun.setAttribute("alt", "Play Video");
    }
}

/* Renvoi de durée écoulée de vidéo */

document
    .getElementById("atuiMediasplayer_VideoplayerProgressbar")
    .addEventListener("click", atuiMediasplayer_VideoplayerControlsProgressChange);
function atuiMediasplayer_VideoplayerControlsProgressChange() {
    // Fonctionnalité à totalement nettoyer
    const atuiMediasplayer_VideoplayerControlsProgress = document.getElementById(
        "atuiMediasplayer_VideoplayerProgressbar"
    );
    const atuiMediasplayer_VideoplayerControlsProgressX = getPosition(atuiMediasplayer_VideoplayerControlsProgress); // La position absolue de la progressBar
    const atuiMouseX = event.pageX; // L'endroit de la progressBar où on a cliqué
    const diff = atuiMouseX - atuiMediasplayer_VideoplayerControlsProgressX;
    const wrapperWidth = atuiMediasplayer_VideoplayerControlsProgress.offsetWidth;
    const percent = Math.round((diff / wrapperWidth) * 100);
    const duration = atuiMediasplayer_VideoplayerVideo.duration;
    atuiMediasplayer_VideoplayerVideo.currentTime = (duration * percent) / 100;
}

/* Infos */

atuiKernel_ToolsContextmenu("atuiMediasplayer_VideoplayerInfos");

/* Sound */

let atuiMediasplayer_VideoplayerVideoSoundStatus = true;
const atuiMediasplayer_VideoplayerButtonsAdvancedSound = document.getElementById(
    "atuiMediasplayer_VideoplayerButtonsAdvancedSound"
);
atuiMediasplayer_VideoplayerButtonsAdvancedSound.addEventListener("click", atuiMediasplayer_VideoplayerVideoSound);
function atuiMediasplayer_VideoplayerVideoSound() {
    if (!atuiMediasplayer_VideoplayerVideoSoundStatus) {
        atuiMediasplayer_VideoplayerVideoSoundStatus = true;
        atuiMediasplayer_VideoplayerVideo.muted = false;
        atuiMediasplayer_VideoplayerButtonsAdvancedSound.setAttribute("src", "atui/MediasPlayer/medias/sound.png");
        atuiMediasplayer_VideoplayerButtonsAdvancedSound.setAttribute("alt", "Son activé. ");
    } else {
        atuiMediasplayer_VideoplayerVideoSoundStatus = false;
        atuiMediasplayer_VideoplayerVideo.muted = true;
        atuiMediasplayer_VideoplayerButtonsAdvancedSound.setAttribute("src", "atui/MediasPlayer/medias/nosound.png");
        atuiMediasplayer_VideoplayerButtonsAdvancedSound.setAttribute("alt", "Son désactivé. ");
    }
}

/* Full screen */

let atuiMediasplayer_VideoplayerVideoFullscreenStatus = false;
const atuiMediasplayer_VideoplayerButtonsAdditionalsFullscreen = document.getElementById(
    "atuiMediasplayer_VideoplayerButtonsAdditionalsFullscreen"
);
atuiMediasplayer_VideoplayerButtonsAdditionalsFullscreen.addEventListener(
    "click",
    atuiMediasplayer_VideoplayerVideoFullscreenChange
);
function atuiMediasplayer_VideoplayerVideoFullscreenChange() {
    if (!atuiMediasplayer_VideoplayerVideoFullscreenStatus) {
        atuiMediasplayer_VideoplayerVideoFullscreenStatus = true;
        atuiMediasplayer_VideoplayerButtonsAdditionalsFullscreen.setAttribute(
            "src",
            "atui/MediasPlayer/medias/collapse.png"
        );
        atuiMediasplayer_VideoplayerButtonsAdditionalsFullscreen.setAttribute("alt", "Désactiver le mode plein écran");
    } else {
        atuiMediasplayer_VideoplayerVideoFullscreenStatus = false;
        atuiMediasplayer_VideoplayerButtonsAdditionalsFullscreen.setAttribute(
            "src",
            "atui/MediasPlayer/medias/expand.png"
        );
        atuiMediasplayer_VideoplayerButtonsAdditionalsFullscreen.setAttribute("alt", "Activer le mode plein écran");
    }
}
