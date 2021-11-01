/* Metadata : 
Auteur (github) : alcapitan
Nom du module : Medias Player
Version : dev2
*/

var atuiAudioPlayer = document.getElementById('atuiAudioPlayer');
var atuiAudioPlayerMusic = document.getElementById('atuiAudioPlayerMusic');

/* Fermer Audio Player */

function atuiAudioPlayerFermer()
{
	atuiAudioPlayer.style.display = "none";
}

/* Gestionnaire Play/Pause */

function atuiAudioPlayerMusicPlayPause()
{
	atuiAudioPlayer.style.display = 'block';
	var atuiAudioPlayerControlsButtonsPlayPause = document.getElementById('atuiAudioPlayerControlsButtonsBasic').childNodes[3];
	if (atuiAudioPlayerMusic.paused)
	{
 		atuiAudioPlayerMusic.play();
		atuiAudioPlayerControlsButtonsPlayPause.src = 'medias/icons/pause.png';
 	}
	else
	{
		atuiAudioPlayerMusic.pause();
		atuiAudioPlayerControlsButtonsPlayPause.src = 'medias/icons/play.png';
	}
}

/* Gestionnaire métadonnées */

var atuiAudioPlayerMusicProgress = "";
function atuiAudioPlayerMusicChange(atuiAudioPlayerMusicChosen)
{
	if (atuiAudioPlayerMusicChosen != atuiAudioPlayerMusicProgress)
	{
		atuiAudioPlayerMusicProgress = atuiAudioPlayerMusicChosen;
		var atuiAudioPlayerMusicMetadata = [atuiAudioPlayerMusicArtiste[choix - 1], atuiAudioPlayerMusicTitre[choix - 1], atuiAudioPlayerMusicAlbum[choix - 1], atuiAudioPlayerMusicDate[choix - 1]];
		document.getElementById("atuiAudioPlayerMusic").src = "medias/musics/test.mp3"; /* Musique */
		document.getElementById("atuiAudioPlayer").childNodes[8].src = 'musiques/images/' + choix + '.jpg'; /* Image */
		document.getElementById("atuiAudioPlayerInfosMusic").childNodes[1].innerHTML = atuiAudioPlayerMusicMetadata[0]; /* Artiste */
		document.getElementById("atuiAudioPlayerInfosMusic").childNodes[3].innerHTML = atuiAudioPlayerMusicMetadata[1]; /* Titre */
		document.getElementById("atuiAudioPlayerInfosMusicAdvanced").childNodes[1].innerHTML = atuiAudioPlayerMusicMetadata[2]; /* Album */
		document.getElementById("atuiAudioPlayerInfosMusicAdvanced").childNodes[3].innerHTML = atuiAudioPlayerMusicMetadata[3]; /* Date */
	}
	play('audioPlayer');
}

/* Change progress time */

function calculTime(time, duration)
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

function update(player)
{
	var duration = player.duration;    // Durée totale
	var time     = player.currentTime; // Temps écoulé
	var fraction = time / duration;
	var percent  = Math.ceil(fraction * 100);
	var progress = document.getElementById("atuiAudioPlayerControlsProgress").childNodes[1];
	progress.style.width = percent + '%';
	document.getElementById("atuiAudioPlayerControlsTime").childNodes[1].textContent = calculTime(time);
	document.getElementById("atuiAudioPlayerControlsTime").childNodes[5].textContent = calculTime(duration);
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
 
 function atuiAudioPlayerControlsProgressChange(control, event) {
	var parent = getPosition(control);    // La position absolue de la progressBar
	var target = getMousePosition(event); // L'endroit de la progressBar où on a cliqué
   
	var x = target.x - parent.x; 
	var wrapperWidth = document.getElementById('atuiAudioPlayerControlsProgress').childNodes[1].offsetWidth;
	
	var percent = Math.ceil((x / wrapperWidth) * 100);    
	var duration = atuiAudioPlayerMusic.duration;
	
	atuiAudioPlayerMusic.currentTime = (duration * percent) / 100;
 }