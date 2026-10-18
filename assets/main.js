(function () {
  "use strict";
  var cfg = window.TV_CONFIG || {};
  var root = document.documentElement;
  root.classList.add("js");

  // --- Links from config ---
  document.querySelectorAll(".js-appstore").forEach(function (a) {
    a.href = cfg.appStoreUrl || "#";
    a.rel = "noopener";
  });
  document.querySelectorAll(".js-contact").forEach(function (a) {
    if (cfg.contactEmail) a.href = "mailto:" + cfg.contactEmail;
  });
  document.querySelectorAll(".js-contact-text").forEach(function (el) {
    if (cfg.contactEmail) el.textContent = cfg.contactEmail;
  });

  // --- Waveforms: deterministic bar heights so every load looks the same ---
  function seeded(seed) {
    return function () {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  }
  document.querySelectorAll("[data-bars]").forEach(function (el, idx) {
    var n = parseInt(el.getAttribute("data-bars"), 10) || 12;
    var rnd = seeded(idx * 7 + 3);
    var frag = document.createDocumentFragment();
    for (var i = 0; i < n; i++) {
      var t = i / Math.max(1, n - 1);
      var envelope = 0.35 + 0.65 * Math.sin(Math.PI * t); // louder in the middle
      var h = Math.max(0.12, Math.min(1, envelope * (0.45 + rnd() * 0.75)));
      var bar = document.createElement("i");
      bar.style.setProperty("--h", h.toFixed(3));
      bar.style.setProperty("--d", (-rnd() * 1.1).toFixed(2) + "s");
      frag.appendChild(bar);
    }
    el.appendChild(frag);
  });

  // --- Hero recording timer ---
  var timer = document.querySelector(".js-timer");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (timer && !reduced) {
    var s = 3;
    setInterval(function () {
      s = s >= 12 ? 1 : s + 1;
      timer.textContent = "0:" + (s < 10 ? "0" : "") + s;
    }, 1000);
  }

  // --- Child colour picker (sage / rose / slate), remembered per viewer ---
  var KEY = "tv-child-theme";
  var swatches = document.querySelectorAll(".swatch");
  function setTheme(name) {
    root.setAttribute("data-child-theme", name);
    swatches.forEach(function (b) {
      b.setAttribute("aria-checked", String(b.getAttribute("data-theme") === name));
    });
  }
  try {
    var saved = localStorage.getItem(KEY);
    if (saved === "sage" || saved === "rose" || saved === "slate") setTheme(saved);
  } catch (e) {}
  swatches.forEach(function (b) {
    b.addEventListener("click", function () {
      var name = b.getAttribute("data-theme");
      setTheme(name);
      try { localStorage.setItem(KEY, name); } catch (e) {}
    });
  });

  // --- Sticky nav border ---
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // --- Reveal on scroll, staggered within each parent ---
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduced) {
    reveals.forEach(function (el) {
      var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) {
        return c.classList.contains("reveal");
      });
      el.style.setProperty("--rd", (sibs.indexOf(el) * 0.08).toFixed(2) + "s");
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  // --- Waitlist ---
  var form = document.querySelector(".js-waitlist");
  if (form) {
    var msg = form.querySelector(".waitlist__msg");
    var btn = form.querySelector("button");
    var input = form.querySelector("input[type=email]");
    function say(text, kind) {
      msg.textContent = text;
      msg.className = "waitlist__msg" + (kind ? " is-" + kind : "");
    }
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var email = input.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        say("Please enter a valid email address.", "err");
        input.focus();
        return;
      }
      if (!cfg.waitlistEndpoint) {
        say("The waitlist isn't open yet. Check back soon.", "err");
        return;
      }
      btn.disabled = true;
      say("Adding you…");
      fetch(cfg.waitlistEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: email }),
      })
        .then(function (r) {
          if (!r.ok) throw new Error(String(r.status));
          form.reset();
          say("You're on the list. We'll email you once, at launch.", "ok");
        })
        .catch(function () {
          say("Something went wrong. Please try again.", "err");
        })
        .finally(function () { btn.disabled = false; });
    });
  }
})();
