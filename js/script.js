(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     Reveal-on-scroll
  --------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------------------------------------------------------
     Fixed site mark — appears once hero is scrolled past,
     switches to dark text once over light sections.
  --------------------------------------------------------- */
  var siteMark = document.getElementById("siteMark");
  var hero = document.querySelector(".hero");
  var lightSections = document.querySelectorAll(".intro, .menu-intro, .menu-archive");

  if (siteMark && hero && "IntersectionObserver" in window) {
    var heroObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            siteMark.classList.remove("is-visible");
          } else {
            siteMark.classList.add("is-visible");
          }
        });
      },
      { threshold: 0 }
    );
    heroObserver.observe(hero);

    var onLightObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            siteMark.classList.add("on-light");
          } else {
            siteMark.classList.remove("on-light");
          }
        });
      },
      { threshold: [0, 0.5, 1] }
    );
    lightSections.forEach(function (el) { onLightObserver.observe(el); });
  } else if (siteMark) {
    siteMark.classList.add("is-visible");
  }

  /* ---------------------------------------------------------
     Gentle parallax on hero & finale chapter background media
  --------------------------------------------------------- */
  if (!reduceMotion) {
    var heroMedia = document.getElementById("heroMedia");
    var finaleMedia = document.getElementById("finaleMedia");
    var ticking = false;

    function updateParallax() {
      var y = window.scrollY || window.pageYOffset;

      if (heroMedia) {
        var heroImg = heroMedia.querySelector("img");
        if (heroImg) {
          var heroShift = Math.min(y * 0.18, 120);
          heroImg.style.transform = "scale(1.08) translateY(" + heroShift + "px)";
        }
      }

      if (finaleMedia) {
        var rect = finaleMedia.getBoundingClientRect();
        var vh = window.innerHeight;
        if (rect.top < vh && rect.bottom > 0) {
          var progress = (vh - rect.top) / (vh + rect.height);
          var shift = (progress - 0.5) * 60;
          var finaleImg = finaleMedia.querySelector("img");
          if (finaleImg) {
            finaleImg.style.transform = "translateY(" + shift + "px) scale(1.06)";
          }
        }
      }
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      },
      { passive: true }
    );
    updateParallax();
  }
})();
