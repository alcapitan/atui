/* Modification des articles */

numero = 1;
limite = 47;
while (numero != limite + 1)
{
	var musiqueImage = document.getElementById(numero).childNodes[1];
	musiqueImage.src = 'musiques/images/' + numero + '.jpg';
	var musiqueAlbum = document.getElementById(numero).childNodes[3].childNodes[5];
	musiqueAlbum.innerHTML = album[numero - 1];
	var musiqueDate = document.getElementById(numero).childNodes[3].childNodes[7];
	musiqueDate.innerHTML = date[numero - 1];
	var musiqueTitre = document.getElementById(numero).childNodes[3].childNodes[3];
	musiqueTitre.innerHTML = titre[numero - 1];
	var musiqueArtiste = document.getElementById(numero).childNodes[3].childNodes[1];
	musiqueArtiste.innerHTML = artiste[numero - 1];
	var musiqueDuree = document.getElementById(numero).childNodes[5].childNodes[1];
	musiqueDuree.innerHTML = duree[numero - 1];
	var musiqueDownload = document.createElement('a');
	musiqueDownload.className = 'download';
	musiqueDownload.href = 'musiques/' + artiste[numero - 1] + ' - ' + titre[numero - 1] + '.mp3';
	musiqueDownload.download = 'musiques/' + artiste[numero - 1] + ' - ' + titre[numero - 1] + '.mp3';
	musiqueDownload.textContent = 'Télécharger';
	musiqueDownload.onclick = 'download(numero)';
	document.getElementById(numero).childNodes[5].appendChild(musiqueDownload);
	var youtubeLink = document.createElement('a');
	youtubeLink.className = 'youtube';
	youtubeLink.href = 'https://www.youtube.com/watch?v=' + youtube[numero - 1];
	youtubeLink.target = '_blank';
	document.getElementById(numero).childNodes[5].appendChild(youtubeLink);
	var youtubeLink = document.createElement('img');
	youtubeLink.src = 'images-system/youtube.png';
	document.getElementById(numero).childNodes[5].childNodes[6].appendChild(youtubeLink);
	numero++;
}

/* Controle menu */

nav.style.width = "80px";
var categorieA = document.getElementById('a').childNodes[0];
var categorieB = document.getElementById('b').childNodes[0];
var categorieC = document.getElementById('c').childNodes[0];
var categorieD = document.getElementById('d').childNodes[0];
var categorieE = document.getElementById('e').childNodes[0];
var categorieF = document.getElementById('f').childNodes[0];
var categorieG = document.getElementById('g').childNodes[0];
var textA = document.getElementById('a').childNodes[1];
var textB = document.getElementById('b').childNodes[1];
var textC = document.getElementById('c').childNodes[1];
var textD = document.getElementById('d').childNodes[1];
var textE = document.getElementById('e').childNodes[1];
var textF = document.getElementById('f').childNodes[1];
var textG = document.getElementById('g').childNodes[1];
function menu()
{
	if (nav.style.width == "80px")
	{
		nav.style.width = "240px";
		categorieA.style.width = "200px";
		categorieB.style.width = "200px";
		categorieC.style.width = "200px";
		categorieD.style.width = "200px";
		categorieE.style.width = "200px";
		categorieF.style.width = "200px";
		categorieG.style.width = "200px";
	}
	else
	{
		nav.style.width = "80px";
		categorieA.style.width = "20px";
		categorieB.style.width = "20px";
		categorieC.style.width = "20px";
		categorieD.style.width = "20px";
		categorieE.style.width = "20px";
		categorieF.style.width = "20px";
		categorieG.style.width = "20px";
	}
}

textA.addEventListener("mouseover", function( event )
{
	if (nav.style.width != '80px')
	{
		event.target.style.height = "18px";
		setTimeout(function() {event.target.style.height = "0px";}, 1000);
		event.target.style.opacity = "100%";
		setTimeout(function() {event.target.style.opacity = "0%";}, 1000);
	}
});
textB.addEventListener("mouseover", function( event )
{
	if (nav.style.width != '80px')
	{
		event.target.style.height = "18px";
		setTimeout(function() {event.target.style.height = "0px";}, 1000);
		event.target.style.opacity = "100%";
		setTimeout(function() {event.target.style.opacity = "0%";}, 1000);
	}
});
textC.addEventListener("mouseover", function( event )
{
	if (nav.style.width != '80px')
	{
		event.target.style.height = "18px";
		setTimeout(function() {event.target.style.height = "0px";}, 1000);
		event.target.style.opacity = "100%";
		setTimeout(function() {event.target.style.opacity = "0%";}, 1000);
	}
});
textD.addEventListener("mouseover", function( event )
{
	if (nav.style.width != '80px')
	{
		event.target.style.height = "18px";
		setTimeout(function() {event.target.style.height = "0px";}, 1000);
		event.target.style.opacity = "100%";
		setTimeout(function() {event.target.style.opacity = "0%";}, 1000);
	}
});
textE.addEventListener("mouseover", function( event )
{
	if (nav.style.width != '80px')
	{
		event.target.style.height = "18px";
		setTimeout(function() {event.target.style.height = "0px";}, 1000);
		event.target.style.opacity = "100%";
		setTimeout(function() {event.target.style.opacity = "0%";}, 1000);
	}
});
textF.addEventListener("mouseover", function( event )
{
	if (nav.style.width != '80px')
	{
		event.target.style.height = "18px";
		setTimeout(function() {event.target.style.height = "0px";}, 1000);
		event.target.style.opacity = "100%";
		setTimeout(function() {event.target.style.opacity = "0%";}, 1000);
	}
});
textG.addEventListener("mouseover", function( event )
{
	if (nav.style.width != '80px')
	{
		event.target.style.height = "18px";
		setTimeout(function() {event.target.style.height = "0px";}, 1000);
		event.target.style.opacity = "100%";
		setTimeout(function() {event.target.style.opacity = "0%";}, 1000);
	}
});