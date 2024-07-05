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

(function () {
  "use strict";
  var arrClassRemove = ["modal", "g-imgtop", "g-imgbot", "show", "fixbot", "fixside", "xmenu", "sidebar-right"];
  var arrClassRemoveRegex = ["-single", "-dual", "-top", "sidebar-right"];
  var arrIdRemove = ["xmenu"];
  var arrDomain = ["90phut", "vebo", "xoilac", "thapcam"];
  let id_link = "akkakakaka";
  let id_parent_frame_live = "jw-container";
  let regexp_link_libe = "live";
  let domain = window.location.hostname;
  let check = new RegExp(arrDomain.join("|")).test(domain);

  let helper = {
    removeClass: function (classname) {
      let x = document.getElementsByClassName(classname);
      if (x.length > 0) {
        x[0].classList.remove(classname);
      }
    },
    removeElementsByClass: function (className) {
      const elements = document.getElementsByClassName(className);
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
    },
    removeElementsById: function (id) {
      const elements = document.getElementById(id);
      if (elements) elements.remove();
    },
    observer: function (mutationList, observer) {
      for (const mutation of mutationList) {
        mutation.addedNodes.forEach((addedNode) => {
          if (addedNode.nodeType === 1) {
            let { className } = addedNode;
            let check = false;
            if (
              new RegExp(arrClassRemove.join("|")).test(className) ||
              new RegExp(arrIdRemove.join("|")).test(addedNode.id)
            ) {
              check = true;
            } else if (addedNode.childNodes?.length) {
              for (let i = 0; i < addedNode.childNodes.length; i++) {
                let element = addedNode.childNodes[i];
                console.log(element.className);
                if (
                  new RegExp(arrClassRemoveRegex.join("|")).test(element.className) ||
                  new RegExp(arrIdRemove.join("|")).test(element.id)
                ) {
                  check = true;
                  break;
                }
              }
            }
            if (check) {
              addedNode.remove();
            }
          }
        });
      }
    },
    getLinkLive: function () {
      document.getElementById(id_link)?.remove();
      let el = document.getElementById(id_parent_frame_live);
      let kq = "";
      if (el) {
        let iframe = el.getElementsByTagName("iframe");
        if (iframe.length) {
          for (let index = 0; index < iframe.length; index++) {
            const element = iframe[index];
            if (new RegExp(regexp_link_libe).test(element.src)) {
              kq = element.src;
              break;
            }
          }
        }
      }
      if (kq) {
        let el_link = document.createElement("a");
        el_link.id = id_link;
        el_link.style.position = "fixed";
        el_link.style.right = "10px";
        el_link.style.bottom = "10px";
        el_link.style.backgroundColor = "#0c4a6e";
        el_link.style.color = "#e0f2fe";
        el_link.style.padding = "8px";
        el_link.style.fontSize = "18px";
        el_link.style.borderRadius = "8px";
        el_link.style.cursor = "pointer";
        el_link.style.zIndex = "99";
        el_link.href = kq;
        el_link.target = "_blank";

        el_link.innerHTML = "Xem";
        document.body.appendChild(el_link);
      } else {
        alert("không tồn tại");
      }
    },
    configObserver: { attributes: true, childList: true, subtree: true },
  };
  function adblock() {
    if (!check) return;
    document.body.classList.remove("overflow-hide");
    helper.removeClass("bg-overlay");
    for (let i = 0; i < arrClassRemove.length; i++) {
      helper.removeElementsByClass(arrClassRemove[i]);
    }
    for (let i = 0; i < arrIdRemove.length; i++) {
      helper.removeElementsById(arrIdRemove[i]);
    }
    let observer = new MutationObserver(helper.observer);
    observer.observe(document.body, helper.configObserver);

    let el_getlink = document.createElement("button");
    el_getlink.style.position = "fixed";
    el_getlink.style.left = "10px";
    el_getlink.style.bottom = "10px";
    el_getlink.style.backgroundColor = "#991b1b";
    el_getlink.style.color = "#e0f2fe";
    el_getlink.style.padding = "8px";
    el_getlink.style.fontSize = "18px";
    el_getlink.style.borderRadius = "8px";
    el_getlink.style.cursor = "pointer";
    el_getlink.style.zIndex = "99";
    el_getlink.onclick = helper.getLinkLive;

    el_getlink.innerHTML = "GET";

    document.body.appendChild(el_getlink);
  }
  adblock();
})();
