/* Metadata : 
Auteur (github) : alcapitan
Nom du module : Medias Player
Version : developer branch
*/

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
	var hours = Math.floor(time / 3600);
	var mins  = Math.floor((time % 3600) / 60);
 	var secs  = Math.floor(time % 60);
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
	var left = 0;
	do {
	    left += element.offsetLeft;
	} while (element = element.offsetParent);
	
	return left;
}


/* Audio */

var atuiMediasPlayer_Audioplayer = document.getElementById('atuiMediasPlayer_Audioplayer'); // Element audioPlayer
var atuiMediasPlayer_AudioplayerMusic = document.getElementById('atuiMediasPlayer_AudioplayerMusic'); // Balise HTML <audio> diffusant la musique
atuiMediasPlayer_AudioplayerMusic.addEventListener("timeupdate",atuiMediasPlayer_AudioplayerMusicUpdate); // Met à jour le minuteur
atuiMediasPlayer_AudioplayerMusic.addEventListener("ended",atuiMediasPlayer_AudioplayerClose); // Ferme AudioPlayer quand la musique est finie

	/* Execution d'une musique */

function atuiMediasPlayer_AudioplayerMusicChange(atuiMediasPlayer_AudioplayerMusicChosen)
{
	atuiMediasPlayer_Audioplayer.style.display = "block";
	if (atuiMediasPlayer_AudioplayerMusic.src != atuiMediasPlayer_AudioplayerMusicChosen[0]) /* Si la musique n'est pas la même que celle précédement sélectionné */
	{
		atuiMediasPlayer_AudioplayerMusic.src = atuiMediasPlayer_AudioplayerMusicChosen[0]; /* Chemin vers la musique */
		atuiMediasPlayer_Audioplayer.childNodes[3].src = atuiMediasPlayer_AudioplayerMusicChosen[1]; /* Chemin vers la couverture d'album */
		document.getElementById("atuiMediasPlayer_AudioplayerMusicinformations").childNodes[1].innerHTML = atuiMediasPlayer_AudioplayerMusicChosen[2];
		document.getElementById("atuiMediasPlayer_AudioplayerMusicinformations").childNodes[3].innerHTML = atuiMediasPlayer_AudioplayerMusicChosen[3];
		document.getElementById("atuiMediasPlayer_AudioplayerMusicinformationsAdvanced").childNodes[1].childNodes[1].childNodes[1].innerHTML = atuiMediasPlayer_AudioplayerMusicChosen[4];
		document.getElementById("atuiMediasPlayer_AudioplayerMusicinformationsAdvanced").childNodes[3].childNodes[1].childNodes[1].innerHTML = atuiMediasPlayer_AudioplayerMusicChosen[5];
	}
	atuiMediasPlayer_AudioplayerMusicPlayPause();
}

	/* Hide Audioplayer */

document.getElementById("atuiMediasPlayer_AudioplayerClose").addEventListener("click",atuiMediasPlayer_AudioplayerClose);
function atuiMediasPlayer_AudioplayerClose() // Ferme l'audioplayer
{
	atuiMediasPlayer_Audioplayer.style.display = "none";
}

	/* Update progress time and bar */

function atuiMediasPlayer_AudioplayerMusicUpdate()
{	
	var atuiMediasPlayer_AudioplayerMusicDuration = atuiMediasPlayer_AudioplayerMusic.duration; // Durée totale de la musique
	var atuiMediasPlayer_AudioplayerMusicListened = atuiMediasPlayer_AudioplayerMusic.currentTime; // Temps écoulé de la musique
	var atuiMediasPlayer_AudioplayerMusicPercentlistened = atuiMediasPlayer_AudioplayerMusicListened / atuiMediasPlayer_AudioplayerMusicDuration;
	var atuiMediasPlayer_AudioplayerMusicPercentlistened  = Math.round(atuiMediasPlayer_AudioplayerMusicPercentlistened * 100); // Converti la valeur en poucentage
	document.getElementById("atuiMediasPlayer_AudioplayerProgressbar").childNodes[1].style.width = atuiMediasPlayer_AudioplayerMusicPercentlistened + '%'; // Actualise le width de la progressbar selon le temps écoulé de la musique
	document.getElementById("atuiMediasPlayer_AudioplayerTimer").childNodes[1].textContent = convertTime(atuiMediasPlayer_AudioplayerMusicListened);
	document.getElementById("atuiMediasPlayer_AudioplayerTimer").childNodes[5].textContent = convertTime(atuiMediasPlayer_AudioplayerMusicDuration);
}

	/* Gestionnaire Play/Pause */

document.getElementById("atuiMediasPlayer_AudioplayerButtonsBasic").childNodes[3].addEventListener("click",atuiMediasPlayer_AudioplayerMusicPlayPause);
function atuiMediasPlayer_AudioplayerMusicPlayPause()
{
	var atuiMediasPlayer_AudioplayerControlsButtonsPlayPause = document.getElementById('atuiMediasPlayer_AudioplayerButtonsBasic').childNodes[3];
	if (atuiMediasPlayer_AudioplayerMusic.paused)
	{
 		atuiMediasPlayer_AudioplayerMusic.play();
		atuiMediasPlayer_AudioplayerControlsButtonsPlayPause.setAttribute("src","atui/MediasPlayer/medias/pause.png");
		atuiMediasPlayer_AudioplayerControlsButtonsPlayPause.setAttribute("alt","Pause music");
 	}
	else
	{
		atuiMediasPlayer_AudioplayerMusic.pause();
		atuiMediasPlayer_AudioplayerControlsButtonsPlayPause.setAttribute("src","atui/MediasPlayer/medias/play.png");
		atuiMediasPlayer_AudioplayerControlsButtonsPlayPause.setAttribute("alt","Play music");
	}
}

	/* Renvoi de durée écoulée de musique */

document.getElementById("atuiMediasPlayer_AudioplayerProgressbar").addEventListener("click",function(){atuiMediasPlayer_AudioplayerControlsProgressChange(this);});
function atuiMediasPlayer_AudioplayerControlsProgressChange(control) // Fonctionnalité à totalement nettoyer
{
	var atuiMediasPlayer_AudioplayerControlsProgress = document.getElementById("atuiMediasPlayer_AudioplayerProgressbar");
	var atuiMediasPlayer_AudioplayerControlsProgressX = getPosition(atuiMediasPlayer_AudioplayerControlsProgress); // La position absolue de la progressBar
	var atuiMouseX = event.pageX; // L'endroit de la progressBar où on a cliqué
	var diff = atuiMouseX - atuiMediasPlayer_AudioplayerControlsProgressX; 
	var wrapperWidth = atuiMediasPlayer_AudioplayerControlsProgress.offsetWidth;
	var percent = Math.round(((diff / wrapperWidth) * 100) + 51); 
	var duration = atuiMediasPlayer_AudioplayerMusic.duration;
	atuiMediasPlayer_AudioplayerMusic.currentTime = (duration * percent) / 100;
}

	/* Playlist */

atuiKernel_ToolsContextmenu("atuiMediasPlayer_AudioplayerPlaylists");

	/* Infos */

atuiKernel_ToolsContextmenu("atuiMediasPlayer_AudioplayerInfos");

	/* Je n'aime / Je n'aime pas cette musique */

var atuiMediasPlayer_AudioplayerMusicLikeStatus = false;
var atuiMediasPlayer_AudioplayerMusicLikeIcon = document.getElementById("atuiMediasPlayer_AudioplayerButtonsAdvanced").childNodes[3];
atuiMediasPlayer_AudioplayerMusicLikeIcon.addEventListener("click",atuiMediasPlayer_AudioplayerMusicLike);
function atuiMediasPlayer_AudioplayerMusicLike()
{
	if (atuiMediasPlayer_AudioplayerMusicLikeStatus)
	{
		atuiMediasPlayer_AudioplayerMusicLikeStatus = false;
		atuiMediasPlayer_AudioplayerMusicLikeIcon.setAttribute("src","atui/MediasPlayer/medias/like.png");
		atuiMediasPlayer_AudioplayerMusicLikeIcon.setAttribute("alt","Je n'aime pas cette musique");
	}
	else
	{
		atuiMediasPlayer_AudioplayerMusicLikeStatus = true;
		atuiMediasPlayer_AudioplayerMusicLikeIcon.setAttribute("src","atui/MediasPlayer/medias/liked.png");
		atuiMediasPlayer_AudioplayerMusicLikeIcon.setAttribute("alt","J'aime cette musique");
	}
}

	/* Loop */

var atuiMediasPlayer_AudioplayerMusicLoopStatus = false;
var atuiMediasPlayer_AudioplayerMusicLoopIcon = document.getElementById("atuiMediasPlayer_AudioplayerButtonsAdvanced").childNodes[5];
atuiMediasPlayer_AudioplayerMusicLoopIcon.addEventListener("click",atuiMediasPlayer_AudioplayerMusicLoop);
function atuiMediasPlayer_AudioplayerMusicLoop()
{
	if (!atuiMediasPlayer_AudioplayerMusicLoopStatus)
	{
		atuiMediasPlayer_AudioplayerMusicLoopStatus = true;
		atuiMediasPlayer_AudioplayerMusicLoopIcon.setAttribute("src","atui/MediasPlayer/medias/loop.png");
		atuiMediasPlayer_AudioplayerMusicLoopIcon.setAttribute("alt","Boucle musique activé");
	}
	else
	{
		atuiMediasPlayer_AudioplayerMusicLoopStatus = false;
		atuiMediasPlayer_AudioplayerMusicLoopIcon.setAttribute("src","atui/MediasPlayer/medias/noloop.png");
		atuiMediasPlayer_AudioplayerMusicLoopIcon.setAttribute("alt","Boucle musique désactivé");
	}
}


/* Video */

var atuiMediasPlayer_Videoplayer = document.getElementsByClassName('atuiMediasPlayer_Video')[0].childNodes[1]; // Element VideoPlayer
var atuiMediasPlayer_VideoplayerVideo = atuiMediasPlayer_Videoplayer.childNodes[1]; // Balise HTML <Video> diffusant la musique
atuiMediasPlayer_VideoplayerVideo.addEventListener("timeupdate",atuiMediasPlayer_VideoplayerVideoUpdate); // Met à jour le minuteur

	/* Update progress time and bar */

function atuiMediasPlayer_VideoplayerVideoUpdate()
{	
	var atuiMediasPlayer_VideoplayerVideoDuration = atuiMediasPlayer_VideoplayerVideo.duration; // Durée totale de la musique
	var atuiMediasPlayer_VideoplayerVideoListened = atuiMediasPlayer_VideoplayerVideo.currentTime; // Temps écoulé de la musique
	var atuiMediasPlayer_VideoplayerVideoPercentlistened = atuiMediasPlayer_VideoplayerVideoListened / atuiMediasPlayer_VideoplayerVideoDuration;
	var atuiMediasPlayer_VideoplayerVideoPercentlistened  = Math.round(atuiMediasPlayer_VideoplayerVideoPercentlistened * 100); // Converti la valeur en poucentage
	document.getElementById("atuiMediasPlayer_VideoplayerProgressbar").childNodes[1].style.width = atuiMediasPlayer_VideoplayerVideoPercentlistened + '%'; // Actualise le width de la progressbar selon le temps écoulé de la musique
	document.getElementById("atuiMediasPlayer_VideoplayerTimer").childNodes[1].textContent = convertTime(atuiMediasPlayer_VideoplayerVideoListened);
	document.getElementById("atuiMediasPlayer_VideoplayerTimer").childNodes[5].textContent = convertTime(atuiMediasPlayer_VideoplayerVideoDuration);
}

	/* Gestionnaire Play/Pause */

document.getElementById("atuiMediasPlayer_VideoplayerButtonsBasic").childNodes[3].addEventListener("click",atuiMediasPlayer_VideoplayerVideoPlayPause);
function atuiMediasPlayer_VideoplayerVideoPlayPause()
{
	var atuiMediasPlayer_VideoplayerControlsButtonsPlayPause = document.getElementById('atuiMediasPlayer_VideoplayerButtonsBasic').childNodes[3];
	if (atuiMediasPlayer_VideoplayerVideo.paused)
	{
 		atuiMediasPlayer_VideoplayerVideo.play();
		atuiMediasPlayer_VideoplayerControlsButtonsPlayPause.setAttribute("src","atui/MediasPlayer/medias/pause.png");
		atuiMediasPlayer_VideoplayerControlsButtonsPlayPause.setAttribute("alt","Pause Video");
 	}
	else
	{
		atuiMediasPlayer_VideoplayerVideo.pause();
		atuiMediasPlayer_VideoplayerControlsButtonsPlayPause.setAttribute("src","atui/MediasPlayer/medias/play.png");
		atuiMediasPlayer_VideoplayerControlsButtonsPlayPause.setAttribute("alt","Play Video");
	}
}

	/* Renvoi de durée écoulée de vidéo */

document.getElementById("atuiMediasPlayer_VideoplayerProgressbar").addEventListener("click",function(){atuiMediasPlayer_VideoplayerControlsProgressChange(this);});
function atuiMediasPlayer_VideoplayerControlsProgressChange(control) // Fonctionnalité à totalement nettoyer
{
	var atuiMediasPlayer_VideoplayerControlsProgress = document.getElementById("atuiMediasPlayer_VideoplayerProgressbar");
	var atuiMediasPlayer_VideoplayerControlsProgressX = getPosition(atuiMediasPlayer_VideoplayerControlsProgress); // La position absolue de la progressBar
	var atuiMouseX = event.pageX; // L'endroit de la progressBar où on a cliqué
	var diff = atuiMouseX - atuiMediasPlayer_VideoplayerControlsProgressX; 
	var wrapperWidth = atuiMediasPlayer_VideoplayerControlsProgress.offsetWidth;
	var percent = Math.round((diff / wrapperWidth) * 100);    
	var duration = atuiMediasPlayer_VideoplayerVideo.duration;
	atuiMediasPlayer_VideoplayerVideo.currentTime = (duration * percent) / 100;
}

	/* Playlist */

atuiKernel_ToolsContextmenu("atuiMediasPlayer_VideoplayerPlaylists");

	/* Infos */

atuiKernel_ToolsContextmenu("atuiMediasPlayer_VideoplayerInfos");

	/* Je n'aime / Je n'aime pas cette musique */

var atuiMediasPlayer_VideoplayerVideoLikeStatus = false;
var atuiMediasPlayer_VideoplayerVideoLikeIcon = document.getElementById("atuiMediasPlayer_VideoplayerButtonsAdvanced").childNodes[3];
atuiMediasPlayer_VideoplayerVideoLikeIcon.addEventListener("click",atuiMediasPlayer_VideoplayerVideoLike);
function atuiMediasPlayer_VideoplayerVideoLike()
{
	if (atuiMediasPlayer_VideoplayerVideoLikeStatus)
	{
		atuiMediasPlayer_VideoplayerVideoLikeStatus = false;
		atuiMediasPlayer_VideoplayerVideoLikeIcon.setAttribute("src","atui/MediasPlayer/medias/like.png");
		atuiMediasPlayer_VideoplayerVideoLikeIcon.setAttribute("alt","Je n'aime pas cette musique");
	}
	else
	{
		atuiMediasPlayer_VideoplayerVideoLikeStatus = true;
		atuiMediasPlayer_VideoplayerVideoLikeIcon.setAttribute("src","atui/MediasPlayer/medias/liked.png");
		atuiMediasPlayer_VideoplayerVideoLikeIcon.setAttribute("alt","J'aime cette musique");
	}
}

	/* Sound */

var atuiMediasPlayer_VideoplayerVideoSoundStatus = true;
var atuiMediasPlayer_VideoplayerVideoSoundIcon = document.getElementById("atuiMediasPlayer_VideoplayerButtonsAdvanced").childNodes[5];
atuiMediasPlayer_VideoplayerVideoSoundIcon.addEventListener("click",atuiMediasPlayer_VideoplayerVideoSound);
function atuiMediasPlayer_VideoplayerVideoSound()
{
	if (!atuiMediasPlayer_VideoplayerVideoSoundStatus)
	{
		atuiMediasPlayer_VideoplayerVideoSoundStatus = true;
		atuiMediasPlayer_VideoplayerVideo.muted = false;
		atuiMediasPlayer_VideoplayerVideoSoundIcon.setAttribute("src","atui/MediasPlayer/medias/sound.png");
		atuiMediasPlayer_VideoplayerVideoSoundIcon.setAttribute("alt","Son activé");
	}
	else
	{
		atuiMediasPlayer_VideoplayerVideoSoundStatus = false;
		atuiMediasPlayer_VideoplayerVideo.muted = true;
		atuiMediasPlayer_VideoplayerVideoSoundIcon.setAttribute("src","atui/MediasPlayer/medias/nosound.png");
		atuiMediasPlayer_VideoplayerVideoSoundIcon.setAttribute("alt","Son désactivé");
	}
}

