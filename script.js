(function () {
  var lenses = {
    analyst: "I like a question with messy data behind it. I build the model or dashboard, then test it against reality before I trust it.",
    leader: "I plan backwards from the deadline, split the work so people do what they're best at, and keep everyone talking so nothing surprises us late.",
    reader: "I read psychology for fun, so I notice what people say, what they skip, and what they actually need from the thing we're building.",
    painter: "I'm self-taught, and painting is where my mind goes quiet. It's the one place I'm not optimising anything."
  };

  var buttons = document.querySelectorAll(".lens-btn");
  var text = document.getElementById("lens-text");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      btn.setAttribute("aria-pressed", "true");
      text.textContent = lenses[btn.getAttribute("data-lens")];
    });
  });
})();

// Highlight the nav link for the section currently on screen
(function () {
  var links = document.querySelectorAll('.nav-links a[href^="#"]');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  if (!("IntersectionObserver" in window)) return;
  function atBottom() {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting && !atBottom()) {
        links.forEach(function (a) { a.removeAttribute("aria-current"); });
        var a = map[e.target.id];
        if (a) a.setAttribute("aria-current", "true");
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  // The Contact section is short, so highlight it when the page reaches the bottom
  window.addEventListener("scroll", function () {
    if (atBottom() && map.contact) {
      links.forEach(function (a) { a.removeAttribute("aria-current"); });
      map.contact.setAttribute("aria-current", "true");
    }
  }, { passive: true });
  Object.keys(map).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) io.observe(el);
  });
})();
