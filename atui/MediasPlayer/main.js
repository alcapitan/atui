/* Metadata : 
Auteur (github) : alcapitan
Nom du module : Medias Player
Version : dev2
*/

var atuiAudioplayer = document.getElementById('atuiMediasPlayer_Audioplayer'); // Element audioPlayer
var atuiAudioplayerMusic = document.getElementById('atuiMediasPlayer_AudioplayerMusic'); // Balise HTML <audio> diffusant la musique


/* Execution d'une musique */

function atuiAudioplayerMusicChange(atuiAudioplayerMusicChosen)
{
	atuiAudioplayer.style.display = "block";
	atuiAudioplayerMusic.src = atuiAudioplayerMusicChosen[0]; /* Chemin vers la musique */
	atuiAudioplayer.childNodes[3].src = atuiAudioplayerMusicChosen[1]; /* Chemin vers la couverture d'album */
	document.getElementById("atuiMediasPlayer_AudioplayerMusicinformations").childNodes[1].innerHTML = atuiAudioplayerMusicChosen[2];
	document.getElementById("atuiMediasPlayer_AudioplayerMusicinformations").childNodes[3].innerHTML = atuiAudioplayerMusicChosen[3];
	document.getElementById("atuiMediasPlayer_AudioplayerMusicinformationsAdvanced").childNodes[1].innerHTML = atuiAudioplayerMusicChosen[4];
	document.getElementById("atuiMediasPlayer_AudioplayerMusicinformationsAdvanced").childNodes[3].innerHTML = atuiAudioplayerMusicChosen[5];
	/*play('Audioplayer');*/
}
/*atuiAudioplayerMusicChange(["patch/musics/santé.mp3","patch/musics/santé.png","Stromaé","Santé","Multitude","2022"])*/


/* Hide Audio Player */

function atuiAudioplayerFermer() // Ferme l'audioplayer
{
	atuiAudioplayer.style.display = "none";
}


/* Update progress time and bar */

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

function atuiAudioplayerMusicUpdate()
{	
	var atuiAudioplayerMusicDuration = atuiAudioplayerMusic.duration; // Durée totale de la musique
	var atuiAudioplayerMusicListened = atuiAudioplayerMusic.currentTime; // Temps écoulé de la musique
	var atuiAudioplayerMusicPercentlistened = atuiAudioplayerMusicListened / atuiAudioplayerMusicDuration;
	var atuiAudioplayerMusicPercentlistened  = Math.round(atuiAudioplayerMusicPercentlistened * 100); // Converti la valeur en poucentage
	document.getElementById("atuiMediasPlayer_AudioplayerProgressbar").childNodes[1].style.width = atuiAudioplayerMusicPercentlistened + '%'; // Actualise le width de la progressbar selon le temps écoulé de la musique
	document.getElementById("atuiMediasPlayer_AudioplayerTimer").childNodes[1].textContent = convertTime(atuiAudioplayerMusicListened);
	document.getElementById("atuiMediasPlayer_AudioplayerTimer").childNodes[5].textContent = convertTime(atuiAudioplayerMusicDuration);
}


/* Gestionnaire Play/Pause */

function atuiAudioplayerMusicPlayPause()
{
	atuiAudioplayer.style.display = 'block';
	var atuiAudioplayerControlsButtonsPlayPause = document.getElementById('atuiMediasPlayer_AudioplayerButtonsBasic').childNodes[3];
	if (atuiAudioplayerMusic.paused)
	{
 		atuiAudioplayerMusic.play();
		atuiAudioplayerControlsButtonsPlayPause.src = 'atui/MediasPlayer/medias/pause.png';
 	}
	else
	{
		atuiAudioplayerMusic.pause();
		atuiAudioplayerControlsButtonsPlayPause.src = 'atui/MediasPlayer/medias/play.png';
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

function atuiAudioplayerControlsProgressChange(control, event) /* Fonctionnalité à totalement nettoyer */
{
	var atuiAudioplayerControlsProgress = document.getElementById("atuiMediasPlayer_AudioplayerProgressbar");
	var atuiAudioplayerControlsProgressX = getPosition(atuiAudioplayerControlsProgress); // La position absolue de la progressBar
	var atuiMouseX = event.pageX; // L'endroit de la progressBar où on a cliqué
	var diff = atuiMouseX - atuiAudioplayerControlsProgressX; 
	var wrapperWidth = atuiAudioplayerControlsProgress.offsetWidth;
	var percent = Math.round(((diff / wrapperWidth) * 100) + 50);    
	var duration = atuiAudioplayerMusic.duration;
	atuiAudioplayerMusic.currentTime = (duration * percent) / 100;
}

