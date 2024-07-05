// ==UserScript==
// @name         90phut live Safari
// @namespace    http://tampermonkey.net/
// @version      2024-06-21
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function init(link_src) {
    let i = 0;
    var script = document.createElement("script");
    script.onload = function () {
      var script = document.createElement("script");
      script.onload = function () {
        var style = document.createElement("link");
        style.onload = function () {
          loadVideo();
        };
        style.href = "https://cdn.plyr.io/3.7.8/plyr.css";
        style.rel = "stylesheet";
        document.head.appendChild(style);
      };
      script.src = "https://cdn.plyr.io/3.7.8/plyr.js";
      document.head.appendChild(script);
    };
    script.src = "https://cdn.jsdelivr.net/npm/hls.js@1";
    document.head.appendChild(script);
    function loadScript(src) {
      var script = document.createElement("script");
      script.onload = function () {
        i++;
      };
      script.src = src;
      document.head.appendChild(script);
    }
    function loadCSS(src) {
      var style = document.createElement("link");
      style.onload = function () {
        i++;
      };
      style.href = src;
      style.rel = "stylesheet";
      document.head.appendChild(style);
    }
    function loadVideo() {
      var video = document.createElement("video");
      var source = document.createElement("source");
      source.src = link_src;

      video.setAttribute("crossorigin", "anonymous");
      video.setAttribute("controls", "controls");
      video.setAttribute("playsinline", "playsinline");
      video.appendChild(source);
      document.body.appendChild(video);
      video.disableRemotePlayback = false;
    }
  }
  if (document.getElementById("vbplayer")) {
    document.getElementById("vbplayer")?.remove();
    let _url = new URL(window.location);
    let link_src = "";
    if (_url.searchParams.get("link")) {
      init(_url.searchParams.get("link"));
    }
  }
})();
