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

function convertTime(time) {
    // Converti les nombres en format de durée
    let hours = Math.floor(time / 3600);
    let mins = Math.floor((time % 3600) / 60);
    let secs = Math.floor(time % 60);
    if (secs < 10) {
        secs = "0" + secs;
    }
    if (hours) {
        if (mins < 10) {
            mins = "0" + mins;
        }
        return hours + ":" + mins + ":" + secs; // hh:mm:ss
    } else {
        return mins + ":" + secs; // mm:ss
    }
}

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

/* Update progress time and bar */

/*atuiMediasplayer_AudioplayerMusic.addEventListener(
    "timeupdate",
    atuiMediasplayer_AudioplayerMusicUpdate
); // Met à jour le minuteur
function atuiMediasplayer_AudioplayerMusicUpdate() {
    const atuiMediasplayer_AudioplayerMusicListened =
        atuiMediasplayer_AudioplayerMusic.currentTime; // Temps écoulé de la musique
    const atuiMediasplayer_AudioplayerMusicDuration =
        atuiMediasplayer_AudioplayerMusic.duration; // Durée totale de la musique
    let atuiMediasplayer_AudioplayerMusicPercentlistened =
        atuiMediasplayer_AudioplayerMusicListened /
        atuiMediasplayer_AudioplayerMusicDuration;
    atuiMediasplayer_AudioplayerMusicPercentlistened = Math.round(
        atuiMediasplayer_AudioplayerMusicPercentlistened * 100
    ); // Converti la valeur en pourcentage
    document.getElementById(
        "atuiMediasplayer_AudioplayerProgressbarInside"
    ).style.width = atuiMediasplayer_AudioplayerMusicPercentlistened + "%"; // Actualise le width de la progressbar selon le temps écoulé de la musique
    document.getElementById(
        "atuiMediasplayer_AudioplayerTimerListened"
    ).textContent = convertTime(atuiMediasplayer_AudioplayerMusicListened);
    document.getElementById(
        "atuiMediasplayer_AudioplayerTimerDuration"
    ).textContent = convertTime(atuiMediasplayer_AudioplayerMusicDuration);
}*/

/* Play and pause an audio */

document.querySelectorAll(".atuiMediasplayer_AudioplayerButtonsBasicRun").forEach(function (button) {
    button.addEventListener("click", function () {
        let audio;
        if (this.getAttribute("data-audio") !== null) {
            audio = document.querySelector(`audio[data-audio="${this.getAttribute("data-audio")}"]`);
        } else {
            audio = findElement(this, "audio", ".atuiMediasplayer_Audioplayer");
        }
        if (this.getAttribute("src") == "atui/MediasPlayer/medias/play.png") {
            audio.play();
            this.setAttribute("src", "atui/MediasPlayer/medias/pause.png");
            this.setAttribute("alt", "Musique lancée");
        } else {
            audio.pause();
            this.setAttribute("src", "atui/MediasPlayer/medias/play.png");
            this.setAttribute("alt", "Musique arrêtée");
        }
    });
});

/* Renvoi de durée écoulée de musique */

/*const atuiMediasplayer_AudioplayerControlsProgress = document.getElementById(
    "atuiMediasplayer_AudioplayerProgressbar"
);
atuiMediasplayer_AudioplayerControlsProgress.addEventListener(
    "click",
    atuiMediasplayer_AudioplayerControlsProgressChange
);
function atuiMediasplayer_AudioplayerControlsProgressChange() {
    // Fonctionnalité à totalement nettoyer
    const atuiMediasplayer_AudioplayerControlsProgressX = getPosition(
        atuiMediasplayer_AudioplayerControlsProgress
    ); // La position absolue de la progressBar
    const atuiMouseX = event.pageX; // L'endroit de la progressBar où on a cliqué
    const diff =
        atuiMouseX -
        atuiMediasplayer_AudioplayerControlsProgressX +
        10; /* +10 est très important car empêche décalage/temps à cause du transform X dans CSS *
    const wrapperWidth =
        atuiMediasplayer_AudioplayerControlsProgress.offsetWidth;
    const percent = Math.round((diff / wrapperWidth) * 100);
    const duration = atuiMediasplayer_AudioplayerMusic.duration;
    atuiMediasplayer_AudioplayerMusic.currentTime = (duration * percent) / 100;
}*/

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
        if (this.getAttribute("src") == "atui/MediasPlayer/medias/noloop.png") {
            this.setAttribute("src", "atui/MediasPlayer/medias/loop.png");
            this.setAttribute("alt", "Boucle musique activé");
        } else {
            this.setAttribute("src", "atui/MediasPlayer/medias/noloop.png");
            this.setAttribute("alt", "Boucle musique désactivé");
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
