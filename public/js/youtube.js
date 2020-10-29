const urlArray = document.querySelectorAll('.url');

// for loop with function to get vid id
// return an array that will hold the vid ids

function getId(url){
  let urlString = url.split('=');
  let urlVidId = urlString[1];
  // console.log(urlVidId);
  return urlVidId.trim();
}

const videoIdArray = [];
for (let i = 0; i < urlArray.length; i++){
  let url = urlArray[i].innerHTML;
  videoIdArray.push(getId(url));
}

console.log(videoIdArray);

// take vid id array get vidID and run to iframe per youtube container

const ytContArray = document.querySelectorAll('.youtubeCont');
for (let i = 0; i < videoIdArray.length; i++){
  // videoId = videoIdArray[i];
  // console.log(ytContArray)
  const iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
      + videoIdArray[i] + '" frameborder="0" allowfullscreen></iframe>';
  pushVideo(ytContArray[i], iframeMarkup);
}

    // console.log(iframeMarkup);
    

function pushVideo(ytContainer, iframeMarkup){
  // for(let j = 0; j < ytContainer.length; j++){
    //ytContainer[j].appendChild(iframeMarkup);
    ytContainer.innerHTML += iframeMarkup;
    console.log(ytContainer);
// }
}
