(function () {
  var clock = document.getElementById("clock");
  var year = document.getElementById("year");
  var fmt = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
  });

  function tick() {
    clock.textContent = fmt.format(new Date());
  }

  year.textContent = new Date().getFullYear();
  tick();
  setInterval(tick, 1000);
})();
