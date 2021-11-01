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