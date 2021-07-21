/* Sélection des musiques */

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

/* Calcul de la longueur du player */

while (0 == 1)
{
	var wdh = document.body.clientWidth;
	wdh = wdh - 63;
	document.getElementById('player').style.width = wdh;
}
console.info("Calcul de la longueur du player terminé.");

/* Manipulation du player audio */

function play(idPlayer, control)
{
	if (audioPlayer.src == '')
	{
		return;
	}
	var player = document.getElementById('player');
	player.style.display = 'block';
	var player = document.querySelector('#' + idPlayer);
	var imgbtnplay = document.getElementById('imgplay');
	imgbtnplay.parentNode.removeChild(imgbtnplay);
	var imgbtnplay = document.createElement('img');
	imgbtnplay.id = 'imgplay';
	imgbtnplay.src = 'images-system/pause.jpg';
	document.getElementById('btnplay').appendChild(imgbtnplay);
	if (player.paused)
	{
 		player.play();
		var imgbtnplay = document.getElementById('imgplay');
		imgbtnplay.parentNode.removeChild(imgbtnplay);
		var imgbtnplay = document.createElement('img');
		imgbtnplay.id = 'imgplay';
		imgbtnplay.src = 'images-system/pause.jpg';
		document.getElementById('btnplay').appendChild(imgbtnplay);
		console.info("La musique a démarré.");
 	}
	else
	{
		player.pause();	
		var imgbtnplay = document.getElementById('imgplay');
		imgbtnplay.parentNode.removeChild(imgbtnplay);
		var imgbtnplay = document.createElement('img');
		imgbtnplay.id = 'imgplay';
		imgbtnplay.src = 'images-system/play.jpg';
		document.getElementById('btnplay').appendChild(imgbtnplay);
		console.info("La musique a été mise en pause.");
	}
}

function update(player)
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

function reculer(idPlayer, reculer)
{
	var player = document.querySelector('#' + idPlayer);
	var duration = player.currentTime;
	player.currentTime = duration - 10;
	console.info("La musique a été reculée de 10 secondes.");
}

function avancer(idPlayer, avancer)
{
	var player = document.querySelector('#' + idPlayer);
	var duration = player.currentTime;
	player.currentTime = duration + 10;
	console.info("La musique a été avancée de 10 secondes.");
}

function changevol(idPlayer)
{
	var vol = document.getElementById("iptvol").value;
	document.getElementById('nivvol').innerHTML = vol;
	var player = document.querySelector('#' + idPlayer);
	var regvol = (vol / 100)
    player.volume = regvol;
	console.info("Le volume a été modifié.");
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