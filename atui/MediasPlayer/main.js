/* Metadata : 
Auteur (github) : alcapitan
Nom du module : Medias Player
Version : dev2
*/

var atuiAudioplayer = document.getElementById('atuiAudioplayer'); // Element audioPlayer
var atuiAudioplayerMusic = document.getElementById('atuiAudioplayerMusic'); // Balise HTML <audio> diffusant la musique


/* Execution d'une musique */

function atuiAudioplayerMusicChange(atuiAudioplayerMusicChosen)
{
	atuiAudioplayer.style.display = "block";
	console.log(atuiAudioplayerMusicChosen[1]);
	document.getElementById("atuiAudioplayerMusic").src = atuiAudioplayerMusicChosen[0]; /* Chemin vers la musique */
	document.getElementById("atuiAudioplayer").childNodes[5].src = atuiAudioplayerMusicChosen[1]; /* Chemin vers la couverture d'album */
	document.getElementById("atuiAudioplayerInfosMusic").childNodes[1].innerHTML = atuiAudioplayerMusicChosen[2]; /* Artiste */
	document.getElementById("atuiAudioplayerInfosMusic").childNodes[3].innerHTML = atuiAudioplayerMusicChosen[3]; /* Titre */
	document.getElementById("atuiAudioplayerInfosMusicAdvanced").childNodes[1].innerHTML = atuiAudioplayerMusicChosen[4]; /* Album */
	document.getElementById("atuiAudioplayerInfosMusicAdvanced").childNodes[3].innerHTML = atuiAudioplayerMusicChosen[5]; /* Date */
	play('Audioplayer');
}
atuiAudioplayerMusicChange(["patch/musics/santé.mp3","patch/musics/santé.png","Stromaé","Santé","Multitude","2022"])


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
	document.getElementById("atuiAudioplayerControlsProgress").childNodes[1].style.width = atuiAudioplayerMusicPercentlistened + '%'; // Actualise le width de la progressbar selon le temps écoulé de la musique
	document.getElementById("atuiAudioplayerControlsTime").childNodes[1].textContent = convertTime(atuiAudioplayerMusicListened);
	document.getElementById("atuiAudioplayerControlsTime").childNodes[5].textContent = convertTime(atuiAudioplayerMusicDuration);
}


/* Gestionnaire Play/Pause */

function atuiAudioplayerMusicPlayPause()
{
	atuiAudioplayer.style.display = 'block';
	var atuiAudioplayerControlsButtonsPlayPause = document.getElementById('atuiAudioplayerControlsButtonsBasic').childNodes[3];
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

function getPosition(element){
	var top = 0, left = 0;
	
	do {
	    top  += element.offsetTop;
	    left += element.offsetLeft;
	} while (element = element.offsetParent);
	
	return { x: left, y: top };
 }
 function getMousePosition(event) {
	return {
	    x: event.pageX,
	    y: event.pageY
	};
 }
 
 function atuiAudioplayerControlsProgressChange(control, event) {
	var parent = getPosition(control);    // La position absolue de la progressBar
	var target = getMousePosition(event); // L'endroit de la progressBar où on a cliqué
   
	var x = target.x - parent.x; 
	var wrapperWidth = document.getElementById('atuiAudioplayerControlsProgress').childNodes[1].offsetWidth;
	
	var percent = Math.ceil((x / wrapperWidth) * 100);    
	var duration = atuiAudioplayerMusic.duration;
	
	console.log("percent:",percent);
	console.log("duration:",duration);
	console.log("current time:",atuiAudioplayerMusic.currentTime);
	console.log("new current time:",(duration * percent) / 100);
	/*atuiAudioplayerMusic.currentTime = (duration * percent) / 100;*/
 }