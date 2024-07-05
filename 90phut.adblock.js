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
  var arrClassRemove = ['modal', 'g-imgtop', 'g-imgbot','show','fixbot','fixside','xmenu','sidebar-right'];
  var arrClassRemoveRegex = ['-single','-dual','-top','sidebar-right'];
  var arrIdRemove = ['xmenu'];
  var arrDomain = ['90phut', 'vebo', 'xoilac','thapcam'];
  let domain = window.location.hostname;
  let check = new RegExp(arrDomain.join('|')).test(domain);


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
    },
    removeElementsById: function(id){
      const elements = document.getElementById(id);
      if(elements) elements.remove()
  },
    observer: function (mutationList, observer) {
      for (const mutation of mutationList) {
        mutation.addedNodes.forEach((addedNode) => {

          if (addedNode.nodeType === 1) {
            let {className} = addedNode;
            let check = false;
            if(new RegExp(arrClassRemove.join('|')).test(className) || new RegExp(arrIdRemove.join('|')).test(addedNode.id)){
              check = true;
            }else if(addedNode.childNodes?.length){
              for (let i = 0; i < addedNode.childNodes.length; i++) {
                let element = addedNode.childNodes[i];
                console.log(element.className)
                if(new RegExp(arrClassRemoveRegex.join('|')).test(element.className) || new RegExp(arrIdRemove.join('|')).test(element.id)){
                  check = true;
                  break;
                }

              }
            }
            if(check){
              addedNode.remove();
            }
          }
        });
      }
    },
    configObserver: { attributes: true, childList: true, subtree: true }
  }
  function adblock(){
    if(!check) return;
    document.body.classList.remove('overflow-hide');
    helper.removeClass('bg-overlay');
    for (let i = 0; i < arrClassRemove.length; i++) {
      helper.removeElementsByClass(arrClassRemove[i]);
    }
    for (let i = 0; i < arrIdRemove.length; i++) {
      helper.removeElementsById(arrIdRemove[i]);
    }
    let observer = new MutationObserver(helper.observer);
    observer.observe(document.body, helper.configObserver);
  }
  adblock();

})();
