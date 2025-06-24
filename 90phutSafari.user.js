// ==UserScript==
// @name         90phutSafari
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
  var arrDomain = ["90phut", "vebo", "xoilac", "thapcam"];
  let domain = window.location.hostname;
  let check = new RegExp(arrDomain.join("|")).test(domain);
  // Kiểm tra nếu có ít nhất 1 iframe trong trang
  function checkAndAddButton() {
    const iframe = document.querySelector("iframe");
    if (iframe && iframe.src) {
      if (document.getElementById("my-fixed-btn")) return;

      const btn = document.createElement("button");
      btn.id = "my-fixed-btn";
      btn.textContent = "🔗 Xem live";
      Object.assign(btn.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "9999",
        padding: "10px 16px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontSize: "14px",
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      });

      btn.onclick = () => {
        window.open(iframe.src, "_blank");
      };

      document.body.appendChild(btn);
    }
  }

  if (check) {
    console.log("Run 90phut");
    // Chờ DOM load và kiểm tra
    window.addEventListener("load", () => {
      checkAndAddButton();
    });

    // Nếu iframe load sau, dùng thêm observer
    const observer = new MutationObserver(checkAndAddButton);
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
