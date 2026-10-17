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
