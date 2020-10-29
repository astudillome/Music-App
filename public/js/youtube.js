const url = document.querySelector('.url').innerHTML;

function getId(url){
  let urlString = url.split('=');
  let videoId = urlString[1];
  return videoId;
}

const videoId = getId(url);
const iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
    + videoId + '" frameborder="0" allowfullscreen></iframe>';

document.querySelectorAll('.youtubeCont').innerHTML += iframeMarkup;