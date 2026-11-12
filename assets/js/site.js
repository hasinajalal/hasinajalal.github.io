/*
 * Marks the in-page section the reader is looking at, so the masthead nav can
 * show it (one persistent underline plus aria-current). Progressive
 * enhancement only: without this file the nav is a plain list of working
 * anchors, and no section of the page depends on it to read.
 *
 * It also publishes the masthead's own height as --masthead-offset before any
 * of that, because the masthead wraps to two rows on a narrow screen and the
 * scroll-margin above each anchor target has to follow it. When this file does
 * not run, the stylesheet falls back to its --masthead-height token.
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var masthead = document.querySelector(".masthead");

  if (masthead) {
    var measureMasthead = function () {
      root.style.setProperty("--masthead-offset", masthead.offsetHeight + "px");
    };

    measureMasthead();
    window.addEventListener("resize", measureMasthead);
  }

  var nav = document.querySelector("[data-section-nav]");
  if (!nav || !("IntersectionObserver" in window)) {
    return;
  }

  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var sections = links
    .map(function (link) {
      return document.getElementById(link.getAttribute("href").slice(1));
    })
    .filter(Boolean);

  if (sections.length !== links.length) {
    return;
  }

  var visible = [];

  /* A null id means "no section is being read" — the hero, or any scroll
     position between two sections — so no link is marked. */
  var markCurrent = function (id) {
    links.forEach(function (link) {
      if (id && link.getAttribute("href") === "#" + id) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  var update = function () {
    /* The rootMargin leaves a thin band across the middle of the viewport,
       so normally exactly one section is in it. When two are, the later one
       in document order wins — that is the section being read. */
    var current = null;
    sections.forEach(function (section) {
      if (visible.indexOf(section) !== -1) {
        current = section;
      }
    });

    /* At the end of the document there is nothing left to scroll into the
       band, so on a tall viewport the last section would never be marked;
       the reader is looking at it, so mark it. */
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2
    ) {
      current = sections[sections.length - 1];
    }

    /* The mirror of that at the other end: at the top of the page the hero
       is what is being read, even when a tall viewport lets the band just
       catch the next section's first pixels. */
    if (window.scrollY === 0) {
      current = null;
    }

    markCurrent(current ? current.id : null);
  };

  /* The observer reports when a section enters or leaves the band, which is
     what keeps `visible` right — but it fires on changes only, so a scroll
     *inside* a long section, or an in-page jump within it, reports nothing.
     The scroll listener re-runs the decision on the next frame so the
     underline follows those too; one frame per scroll, not one per event. */
  var pending = false;
  var scheduleUpdate = function () {
    if (pending) {
      return;
    }

    pending = true;
    window.requestAnimationFrame(function () {
      pending = false;
      update();
    });
  };

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var index = visible.indexOf(entry.target);
        if (entry.isIntersecting && index === -1) {
          visible.push(entry.target);
        } else if (!entry.isIntersecting && index !== -1) {
          visible.splice(index, 1);
        }
      });

      scheduleUpdate();
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
})();
