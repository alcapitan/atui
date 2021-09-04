/* Fermer Audio Player */

function atuiAudioPlayerFermer()
{
	var atuiAudioPlayer = document.getElementById('atuiAudioPlayer');
	atuiAudioPlayer.style.display = "none";
}

/* Gestionnaire Play/Pause */

function atuiAudioPlayerMusicPlayPause()
{
	console.log("Coucou Milan !");
	var atuiAudioPlayer = document.getElementById('atuiAudioPlayer');
	atuiAudioPlayer.style.display = 'block';
	var atuiAudioPlayerMusic = document.getElementById('atuiAudioPlayerMusic');
	var atuiAudioPlayerControlsButtonsPlayPause = document.getElementById('atuiAudioPlayerControlsButtonsBasic').childNodes[3];
	if (atuiAudioPlayerMusic.paused)
	{
 		atuiAudioPlayerMusic.play();
		atuiAudioPlayerControlsButtonsPlayPause.src = 'medias/icons/play.png';
 	}
	else
	{
		atuiAudioPlayerMusic.pause();
		atuiAudioPlayerControlsButtonsPlayPause.src = 'medias/icons/pause.png';
	}
}

/* Updates des métadonnées de l'Audio Player sur la musique en cours */

var player = document.getElementById('player');
player.style.display = 'none';
let choix = 0;
var music = document.getElementById('audioPlayer');
var player = document.querySelector('#audioPlayer');
function chooseMusic(choose)
{
	if (choix != choose)
	{
		choix = choose;
		audioPlayer.src = 'musiques/' + artiste[choix - 1] + ' - ' + titre[choix - 1] + '.mp3';
		console.log('La musique est : ' + audioPlayer.src);
		var details = [album[choix - 1], date[choix - 1], titre[choix - 1], artiste[choix - 1]];
		document.getElementById('nameAlbum').innerHTML = details[0];
		document.getElementById('dateAlbum').innerHTML = details[1];
		document.getElementById('titreMusic').innerHTML = details[2];
		document.getElementById('artisteMusic').innerHTML = details[3];
		document.getElementById('imgAlbum').src = 'musiques/images/' + choix + '.jpg';
	}
	play('audioPlayer');
}

/* Changement time play music */

/* function update(player)
{
	var duration = player.duration;    // Durée totale
	var time     = player.currentTime; // Temps écoulé
	var fraction = time / duration;
	var percent  = Math.ceil(fraction * 100);
	var progress = document.querySelector('#progressBar');
	progress.style.width = percent + '%';
	document.querySelector('#progressTime').textContent = calculTime(time);
	document.querySelector('#durationTime').textContent = calculTime(duration);
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
} */

function clickProgress(idPlayer, control, event) {
    var parent = getPosition(control);    // La position absolue de la progressBar
    var target = getMousePosition(event); // L'endroit de la progressBar où on a cliqué
    var player = document.querySelector('#' + idPlayer);
  
    var x = target.x - parent.x; 
    var wrapperWidth = document.querySelector('#progressBarControl').offsetWidth;
    
    var percent = Math.ceil((x / wrapperWidth) * 100);    
    var duration = player.duration;
    
    player.currentTime = (duration * percent) / 100;
}