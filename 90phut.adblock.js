// ==UserScript==
// @name         90phut adblock
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
  let regex = /([a-z0-9-]*.*90phut*.*[a-z0-9-]*)/;
  let domain = window.location.hostname;
  let check = domain.includes('90phut') || domain.includes('vebo');


  let helper = {
  removeClass: function(classname){
    let x = document.getElementsByClassName(classname);
    if(x.length > 0) { x[0].classList.remove(classname); }
  },
  removeElementsByClass: function(className){
      const elements = document.getElementsByClassName(className);
      while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
      }
  }
  }
  function adblock(){
  if(!check) return;
  document.body.classList.remove('overflow-hide');
  helper.removeClass('bg-overlay');
  helper.removeElementsByClass('modal')
  helper.removeElementsByClass('g-imgtop')
  helper.removeElementsByClass('g-imgbot')
  }
  adblock();


})();