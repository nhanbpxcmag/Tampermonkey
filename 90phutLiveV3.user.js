// ==UserScript==
// @name         90phut live v3
// @namespace    http://tampermonkey.net/
// @version      2024-06-21
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

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
  // source.setAttribute('type','application/x-mpegURL');
  source.src='https://apisportvb90xltcbk-secure.nsnd.live/-LPqKqxiYB9hfCb7Zu_6jQ/Fv2lucGIbhPi2caWYvF5Lg/1720170946234/live/sd-6MrAR8fRCsfwHuqS3M/playlist.m3u8';

video.setAttribute('crossorigin','anonymous')
video.setAttribute("controls","controls")
// video.setAttribute("x-webkit-airplay","allow")
video.setAttribute("playsinline","playsinline")
video.appendChild(source)
document.body.appendChild(video);
video.disableRemotePlayback = false;
if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource('https://apisportvb90xltcbk-secure.nsnd.live/-LPqKqxiYB9hfCb7Zu_6jQ/Fv2lucGIbhPi2caWYvF5Lg/1720170946234/live/sd-6MrAR8fRCsfwHuqS3M/playlist.m3u8');
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED,function() {
    video.play();
  });
}
// var player = new Plyr(video);
}

})();






