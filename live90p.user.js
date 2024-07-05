
(function() {
  'use strict';
  document.getElementById('vbplayer')?.remove()
let i = 0;
var script = document.createElement('script');
script.onload = function () {
  var script = document.createElement('script');
  script.onload = function () {
    var style = document.createElement('link');
    style.onload = function () {
      loadVideo()
    };
    style.href = 'https://cdn.plyr.io/3.7.8/plyr.css';
    style.rel = 'stylesheet';  
    document.head.appendChild(style);
  };
  script.src = 'https://cdn.plyr.io/3.7.8/plyr.js';  
  document.head.appendChild(script);
};
script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1';  
document.head.appendChild(script);
  function loadScript(src){
    var script = document.createElement('script');
    script.onload = function () {
      i++
    };
    script.src = src;  
    document.head.appendChild(script);
  }
  function loadCSS(src){
    var style = document.createElement('link');
    style.onload = function () {
      i++
    };
    style.href = src;
    style.rel = 'stylesheet';  
    document.head.appendChild(style);
  }
 if(i === 3){
  console.log('abc')
 }
function loadVideo(){
  var video = document.createElement('video');
  var source = document.createElement('source');
  source.setAttribute('type','application/x-mpegURL');
  source.src='https://apisportvb90xltcbk-secure.nsnd.live/-LPqKqxiYB9hfCb7Zu_6jQ/Fv2lucGIbhPi2caWYvF5Lg/1720170946234/live/sd-6MrAR8fRCsfwHuqS3M/playlist.m3u8';
// video.style.position = 'fixed';
// video.style.top = '0';
// video.style.zIndex = 9999;
video.setAttribute('crossorigin','anonymous')
video.setAttribute("controls","controls")
video.appendChild(source)
document.body.appendChild(video);
console.log(Hls.isSupported())
if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource('https://apisportvb90xltcbk-secure.nsnd.live/-LPqKqxiYB9hfCb7Zu_6jQ/Fv2lucGIbhPi2caWYvF5Lg/1720170946234/live/sd-6MrAR8fRCsfwHuqS3M/playlist.m3u8');
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED,function() {
    video.play();
  });
}
var player = new Plyr(video);
}

})();

