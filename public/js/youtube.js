// get all URIs for album
const urlArray = document.querySelectorAll('.url');

// get video id from URI
function getId(url){
  let urlString = url.split('=');
  let urlVidId = urlString[1];
  return urlVidId.trim();
}

// for loop with function to get video id and create array of video Ids
const videoIdArray = [];
for (let i = 0; i < urlArray.length; i++){
  let url = urlArray[i].innerHTML;
  videoIdArray.push(getId(url));
}

// take video id array and use video Id to run iframe in each youtube container
const ytContArray = document.querySelectorAll('.youtubeCont');
for (let i = 0; i < videoIdArray.length; i++){
  const iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
      + videoIdArray[i] + '" frameborder="0" allowfullscreen></iframe>';
  pushVideo(ytContArray[i], iframeMarkup);
}

function pushVideo(ytContainer, iframeMarkup){
    ytContainer.innerHTML += iframeMarkup;
}