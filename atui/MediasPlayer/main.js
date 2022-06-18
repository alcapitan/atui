/* Metadata */

const atuiMediasplayer_Metadata = {
     name : "Medias Player",
     author : "alcapitan (on GitHub)",
     version : "developer branch",
     website : "https://github.com/alcapitan/atui",
}
//atuiKernel_MetadataDisplay(atuiMediasplayer_Metadata);


/* Contents : 
- Common
- Audio
	- Execution musique
	- Hide Audioplayer
	- Update progress time and bar
	- Gestionnaire Play/Pause
	- Renvoi de durée écoulée de musique
	- Playlist
	- Infos
	- J'aime / Je n'aime pas cette musique
	- Loop
- Video
	- Update progress time and bar
	- Gestionnaire Play/Pause
	- Renvoi de durée écoulée de video
	- Playlist
	- Infos
	- J'aime / Je n'aime pas cette video
	- Loop
*/


/* Common */

function convertTime(time) // Converti les nombres en format de durée
{
	let hours = Math.floor(time / 3600);
	let mins = Math.floor((time % 3600) / 60);
 	let secs = Math.floor(time % 60);
	if (secs < 10)
	{
		secs = "0" + secs;
	}
	if (hours)
	{
		if (mins < 10)
		{
			mins = "0" + mins;
		}
		return hours + ":" + mins + ":" + secs; // hh:mm:ss
	}
	else
	{
		return mins + ":" + secs; // mm:ss
	}
}

function getPosition(element)
{
	let left = 0;
	do {
	    left += element.offsetLeft;
	} while (element = element.offsetParent);
	
	return left;
}


/* Audio */

const atuiMediasplayer_Audioplayer = document.getElementById('atuiMediasplayer_Audioplayer'); // Element audioPlayer
const atuiMediasplayer_AudioplayerMusic = document.getElementById('atuiMediasplayer_AudioplayerMusic'); // Balise HTML <audio> diffusant la musique
atuiMediasplayer_AudioplayerMusic.addEventListener("timeupdate",atuiMediasplayer_AudioplayerMusicUpdate); // Met à jour le minuteur
atuiMediasplayer_AudioplayerMusic.addEventListener("ended",atuiMediasplayer_AudioplayerClose); // Ferme AudioPlayer quand la musique est finie

	/* Execution d'une musique */

function atuiMediasplayer_AudioplayerMusicChange(atuiMediasplayer_AudioplayerMusicChosen)
{
	atuiMediasplayer_Audioplayer.style.display = "flex";
	if (atuiMediasplayer_AudioplayerMusic.src != atuiMediasplayer_AudioplayerMusicChosen[0]) /* Si la musique n'est pas la même que celle précédemment sélectionné */
	{
		atuiMediasplayer_AudioplayerMusic.src = atuiMediasplayer_AudioplayerMusicChosen[0]; /* Chemin vers la musique */
		atuiMediasplayer_Audioplayer.childNodes[3].src = atuiMediasplayer_AudioplayerMusicChosen[1]; /* Chemin vers la couverture d'album */
		document.getElementById("atuiMediasplayer_AudioplayerMusicinformations").childNodes[1].innerHTML = atuiMediasplayer_AudioplayerMusicChosen[2];
		document.getElementById("atuiMediasplayer_AudioplayerMusicinformations").childNodes[3].innerHTML = atuiMediasplayer_AudioplayerMusicChosen[3];
		document.getElementById("atuiMediasplayer_AudioplayerMusicinformationsAdvanced").childNodes[1].childNodes[1].childNodes[1].innerHTML = atuiMediasplayer_AudioplayerMusicChosen[4];
		document.getElementById("atuiMediasplayer_AudioplayerMusicinformationsAdvanced").childNodes[3].childNodes[1].childNodes[1].innerHTML = atuiMediasplayer_AudioplayerMusicChosen[5];
	}
	atuiMediasplayer_AudioplayerMusicPlayPause();
}

	/* Hide Audioplayer */

document.getElementById("atuiMediasplayer_AudioplayerClose").addEventListener("click",atuiMediasplayer_AudioplayerClose);
function atuiMediasplayer_AudioplayerClose() // Ferme l'audioplayer
{
	atuiMediasplayer_Audioplayer.style.display = "none";
}

	/* Update progress time and bar */

function atuiMediasplayer_AudioplayerMusicUpdate()
{	
	const atuiMediasplayer_AudioplayerMusicDuration = atuiMediasplayer_AudioplayerMusic.duration; // Durée totale de la musique
	const atuiMediasplayer_AudioplayerMusicListened = atuiMediasplayer_AudioplayerMusic.currentTime; // Temps écoulé de la musique
	let atuiMediasplayer_AudioplayerMusicPercentlistened = atuiMediasplayer_AudioplayerMusicListened / atuiMediasplayer_AudioplayerMusicDuration;
	atuiMediasplayer_AudioplayerMusicPercentlistened = Math.round(atuiMediasplayer_AudioplayerMusicPercentlistened * 100); // Converti la valeur en pourcentage
	document.getElementById("atuiMediasplayer_AudioplayerProgressbar").childNodes[1].style.width = atuiMediasplayer_AudioplayerMusicPercentlistened + '%'; // Actualise le width de la progressbar selon le temps écoulé de la musique
	document.getElementById("atuiMediasplayer_AudioplayerTimer").childNodes[1].textContent = convertTime(atuiMediasplayer_AudioplayerMusicListened);
	document.getElementById("atuiMediasplayer_AudioplayerTimer").childNodes[5].textContent = convertTime(atuiMediasplayer_AudioplayerMusicDuration);
}

	/* Gestionnaire Play/Pause */

document.getElementById("atuiMediasplayer_AudioplayerButtonsBasic").childNodes[3].addEventListener("click",atuiMediasplayer_AudioplayerMusicPlayPause);
function atuiMediasplayer_AudioplayerMusicPlayPause()
{
	const atuiMediasplayer_AudioplayerControlsButtonsPlayPause = document.getElementById('atuiMediasplayer_AudioplayerButtonsBasic').childNodes[3];
	if (atuiMediasplayer_AudioplayerMusic.paused)
	{
 		atuiMediasplayer_AudioplayerMusic.play();
		atuiMediasplayer_AudioplayerControlsButtonsPlayPause.setAttribute("src","atui/MediasPlayer/medias/pause.png");
		atuiMediasplayer_AudioplayerControlsButtonsPlayPause.setAttribute("alt","Pause music");
 	}
	else
	{
		atuiMediasplayer_AudioplayerMusic.pause();
		atuiMediasplayer_AudioplayerControlsButtonsPlayPause.setAttribute("src","atui/MediasPlayer/medias/play.png");
		atuiMediasplayer_AudioplayerControlsButtonsPlayPause.setAttribute("alt","Play music");
	}
}

	/* Renvoi de durée écoulée de musique */

document.getElementById("atuiMediasplayer_AudioplayerProgressbar").addEventListener("click",function(){atuiMediasplayer_AudioplayerControlsProgressChange(this);});
function atuiMediasplayer_AudioplayerControlsProgressChange(control) // Fonctionnalité à totalement nettoyer
{
	const atuiMediasplayer_AudioplayerControlsProgress = document.getElementById("atuiMediasplayer_AudioplayerProgressbar");
	const atuiMediasplayer_AudioplayerControlsProgressX = getPosition(atuiMediasplayer_AudioplayerControlsProgress); // La position absolue de la progressBar
	const atuiMouseX = event.pageX; // L'endroit de la progressBar où on a cliqué
	const diff = atuiMouseX - atuiMediasplayer_AudioplayerControlsProgressX + 10; /* +10 est très important car empêche décalage/temps à cause du transform X dans CSS */
	const wrapperWidth = atuiMediasplayer_AudioplayerControlsProgress.offsetWidth;
	const percent = Math.round((diff / wrapperWidth) * 100); 
	const duration = atuiMediasplayer_AudioplayerMusic.duration;
	atuiMediasplayer_AudioplayerMusic.currentTime = (duration * percent) / 100;
}

	/* Playlist */

atuiKernel_ToolsContextmenu("atuiMediasplayer_AudioplayerPlaylists");

	/* Infos */

atuiKernel_ToolsContextmenu("atuiMediasplayer_AudioplayerInfos");

	/* Je n'aime / Je n'aime pas cette musique */

let atuiMediasplayer_AudioplayerMusicLikeStatus = false;
const atuiMediasplayer_AudioplayerMusicLikeIcon = document.getElementById("atuiMediasplayer_AudioplayerButtonsAdvanced").childNodes[3];
atuiMediasplayer_AudioplayerMusicLikeIcon.addEventListener("click",atuiMediasplayer_AudioplayerMusicLike);
function atuiMediasplayer_AudioplayerMusicLike()
{
	if (atuiMediasplayer_AudioplayerMusicLikeStatus)
	{
		atuiMediasplayer_AudioplayerMusicLikeStatus = false;
		atuiMediasplayer_AudioplayerMusicLikeIcon.setAttribute("src","atui/MediasPlayer/medias/like.png");
		atuiMediasplayer_AudioplayerMusicLikeIcon.setAttribute("alt","Je n'aime pas cette musique");
	}
	else
	{
		atuiMediasplayer_AudioplayerMusicLikeStatus = true;
		atuiMediasplayer_AudioplayerMusicLikeIcon.setAttribute("src","atui/MediasPlayer/medias/liked.png");
		atuiMediasplayer_AudioplayerMusicLikeIcon.setAttribute("alt","J'aime cette musique");
	}
}

	/* Loop */

let atuiMediasplayer_AudioplayerMusicLoopStatus = false;
const atuiMediasplayer_AudioplayerMusicLoopIcon = document.getElementById("atuiMediasplayer_AudioplayerButtonsAdvanced").childNodes[5];
atuiMediasplayer_AudioplayerMusicLoopIcon.addEventListener("click",atuiMediasplayer_AudioplayerMusicLoop);
function atuiMediasplayer_AudioplayerMusicLoop()
{
	if (!atuiMediasplayer_AudioplayerMusicLoopStatus)
	{
		atuiMediasplayer_AudioplayerMusicLoopStatus = true;
		atuiMediasplayer_AudioplayerMusicLoopIcon.setAttribute("src","atui/MediasPlayer/medias/loop.png");
		atuiMediasplayer_AudioplayerMusicLoopIcon.setAttribute("alt","Boucle musique activé");
	}
	else
	{
		atuiMediasplayer_AudioplayerMusicLoopStatus = false;
		atuiMediasplayer_AudioplayerMusicLoopIcon.setAttribute("src","atui/MediasPlayer/medias/noloop.png");
		atuiMediasplayer_AudioplayerMusicLoopIcon.setAttribute("alt","Boucle musique désactivé");
	}
}


/* Video */

const atuiMediasplayer_Videoplayer = document.getElementsByClassName('atuiMediasplayer_Video')[0].childNodes[1]; // Element VideoPlayer
const atuiMediasplayer_VideoplayerVideo = atuiMediasplayer_Videoplayer.childNodes[1]; // Balise HTML <Video> diffusant la musique
atuiMediasplayer_VideoplayerVideo.addEventListener("timeupdate",atuiMediasplayer_VideoplayerVideoUpdate); // Met à jour le minuteur

	/* Update progress time and bar */

function atuiMediasplayer_VideoplayerVideoUpdate()
{	
	const atuiMediasplayer_VideoplayerVideoDuration = atuiMediasplayer_VideoplayerVideo.duration; // Durée totale de la musique
	const atuiMediasplayer_VideoplayerVideoListened = atuiMediasplayer_VideoplayerVideo.currentTime; // Temps écoulé de la musique
	let atuiMediasplayer_VideoplayerVideoPercentlistened = atuiMediasplayer_VideoplayerVideoListened / atuiMediasplayer_VideoplayerVideoDuration;
	atuiMediasplayer_VideoplayerVideoPercentlistened = Math.round(atuiMediasplayer_VideoplayerVideoPercentlistened * 100); // Converti la valeur en pourcentage
	document.getElementById("atuiMediasplayer_VideoplayerProgressbar").childNodes[1].style.width = atuiMediasplayer_VideoplayerVideoPercentlistened + '%'; // Actualise le width de la progressbar selon le temps écoulé de la musique
	document.getElementById("atuiMediasplayer_VideoplayerTimer").childNodes[1].textContent = convertTime(atuiMediasplayer_VideoplayerVideoListened);
	document.getElementById("atuiMediasplayer_VideoplayerTimer").childNodes[5].textContent = convertTime(atuiMediasplayer_VideoplayerVideoDuration);
}

	/* Gestionnaire Play/Pause */

document.getElementById("atuiMediasplayer_VideoplayerButtonsBasic").childNodes[3].addEventListener("click",atuiMediasplayer_VideoplayerVideoPlayPause);
function atuiMediasplayer_VideoplayerVideoPlayPause()
{
	const atuiMediasplayer_VideoplayerControlsButtonsPlayPause = document.getElementById('atuiMediasplayer_VideoplayerButtonsBasic').childNodes[3];
	if (atuiMediasplayer_VideoplayerVideo.paused)
	{
 		atuiMediasplayer_VideoplayerVideo.play();
		atuiMediasplayer_VideoplayerControlsButtonsPlayPause.setAttribute("src","atui/MediasPlayer/medias/pause.png");
		atuiMediasplayer_VideoplayerControlsButtonsPlayPause.setAttribute("alt","Pause Video");
 	}
	else
	{
		atuiMediasplayer_VideoplayerVideo.pause();
		atuiMediasplayer_VideoplayerControlsButtonsPlayPause.setAttribute("src","atui/MediasPlayer/medias/play.png");
		atuiMediasplayer_VideoplayerControlsButtonsPlayPause.setAttribute("alt","Play Video");
	}
}

	/* Renvoi de durée écoulée de vidéo */

document.getElementById("atuiMediasplayer_VideoplayerProgressbar").addEventListener("click",function(){atuiMediasplayer_VideoplayerControlsProgressChange(this);});
function atuiMediasplayer_VideoplayerControlsProgressChange(control) // Fonctionnalité à totalement nettoyer
{
	const atuiMediasplayer_VideoplayerControlsProgress = document.getElementById("atuiMediasplayer_VideoplayerProgressbar");
	const atuiMediasplayer_VideoplayerControlsProgressX = getPosition(atuiMediasplayer_VideoplayerControlsProgress); // La position absolue de la progressBar
	const atuiMouseX = event.pageX; // L'endroit de la progressBar où on a cliqué
	const diff = atuiMouseX - atuiMediasplayer_VideoplayerControlsProgressX; 
	const wrapperWidth = atuiMediasplayer_VideoplayerControlsProgress.offsetWidth;
	const percent = Math.round((diff / wrapperWidth) * 100);
	const duration = atuiMediasplayer_VideoplayerVideo.duration;
	atuiMediasplayer_VideoplayerVideo.currentTime = (duration * percent) / 100;
}

	/* Playlist */

atuiKernel_ToolsContextmenu("atuiMediasplayer_VideoplayerPlaylists");

	/* Infos */

atuiKernel_ToolsContextmenu("atuiMediasplayer_VideoplayerInfos");

	/* Je n'aime / Je n'aime pas cette musique */

let atuiMediasplayer_VideoplayerVideoLikeStatus = false;
const atuiMediasplayer_VideoplayerVideoLikeIcon = document.getElementById("atuiMediasplayer_VideoplayerButtonsAdvanced").childNodes[3];
atuiMediasplayer_VideoplayerVideoLikeIcon.addEventListener("click",atuiMediasplayer_VideoplayerVideoLike);
function atuiMediasplayer_VideoplayerVideoLike()
{
	if (atuiMediasplayer_VideoplayerVideoLikeStatus)
	{
		atuiMediasplayer_VideoplayerVideoLikeStatus = false;
		atuiMediasplayer_VideoplayerVideoLikeIcon.setAttribute("src","atui/MediasPlayer/medias/like.png");
		atuiMediasplayer_VideoplayerVideoLikeIcon.setAttribute("alt","Je n'aime pas cette musique");
	}
	else
	{
		atuiMediasplayer_VideoplayerVideoLikeStatus = true;
		atuiMediasplayer_VideoplayerVideoLikeIcon.setAttribute("src","atui/MediasPlayer/medias/liked.png");
		atuiMediasplayer_VideoplayerVideoLikeIcon.setAttribute("alt","J'aime cette musique");
	}
}

	/* Sound */

let atuiMediasplayer_VideoplayerVideoSoundStatus = true;
const atuiMediasplayer_VideoplayerVideoSoundIcon = document.getElementById("atuiMediasplayer_VideoplayerButtonsAdvanced").childNodes[5];
atuiMediasplayer_VideoplayerVideoSoundIcon.addEventListener("click",atuiMediasplayer_VideoplayerVideoSound);
function atuiMediasplayer_VideoplayerVideoSound()
{
	if (!atuiMediasplayer_VideoplayerVideoSoundStatus)
	{
		atuiMediasplayer_VideoplayerVideoSoundStatus = true;
		atuiMediasplayer_VideoplayerVideo.muted = false;
		atuiMediasplayer_VideoplayerVideoSoundIcon.setAttribute("src","atui/MediasPlayer/medias/sound.png");
		atuiMediasplayer_VideoplayerVideoSoundIcon.setAttribute("alt","Son activé");
	}
	else
	{
		atuiMediasplayer_VideoplayerVideoSoundStatus = false;
		atuiMediasplayer_VideoplayerVideo.muted = true;
		atuiMediasplayer_VideoplayerVideoSoundIcon.setAttribute("src","atui/MediasPlayer/medias/nosound.png");
		atuiMediasplayer_VideoplayerVideoSoundIcon.setAttribute("alt","Son désactivé");
	}
}

