// AYRA website — small interactions only. No tracking, no network calls.
(function () {
  "use strict";

  // Mobile nav toggle
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("navLinks");
  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Light / dark theme toggle (moon button). Default is dark.
  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    try {
      if (localStorage.getItem("ayra-theme") === "light") {
        document.body.classList.add("light");
        themeBtn.innerHTML = "&#9788;";
      }
    } catch (e) { /* storage unavailable — ignore */ }
    themeBtn.addEventListener("click", function () {
      var light = document.body.classList.toggle("light");
      themeBtn.innerHTML = light ? "&#9788;" : "&#9790;";
      try { localStorage.setItem("ayra-theme", light ? "light" : "dark"); } catch (e) { /* ignore */ }
    });
  }

  // "Use AYRA on Web" — there is no web app yet. Scroll to the app preview
  // and show an honest "coming soon" note instead of faking a web assistant.
  var webNote = document.getElementById("webNote");
  document.querySelectorAll("[data-web-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (webNote) {
        webNote.classList.add("show");
        setTimeout(function () { webNote.classList.remove("show"); }, 12000);
      }
    });
  });
})();
