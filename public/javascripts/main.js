
// console.log("script working!");
var vid = document.querySelector('#vid');

window.addEventListener("load", showVideo);
function showVideo() {

  // create source video element according to screen size
  if (window.matchMedia("(max-width: 700px)").matches) {
    this.videoSource(vid, "video/tidal_mobile.mp4", "video/mp4");

  } else if (window.matchMedia("(max-width: 999px)").matches) {
    this.videoSource(vid, "video/tidal_desktop.mp4", "video/mp4");

  } else if (window.matchMedia("(min-width: 1000px)").matches) {
    this.videoSource(vid, "video/tidal_desktop.mp4", "video/mp4");

  }
}

function videoSource(element, src, type) {
  var source = document.createElement("source");

  source.src = src;
  source.type = type;

  element.appendChild(source);
}
