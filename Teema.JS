function vaihdaTeema() {
  const body = document.body;
  const nappi = document.getElementById("teema-nappi");

  if (body.classList.contains("vaalea")) {
    body.classList.remove("vaalea");
    nappi.textContent = "☀️";
    localStorage.setItem("teema", "tumma");
  } else {
    body.classList.add("vaalea");
    nappi.textContent = "🌙";
    localStorage.setItem("teema", "vaalea");
  }
}

window.onload = function () {
  const nappi = document.getElementById("teema-nappi");
  if (localStorage.getItem("teema") === "vaalea") {
    document.body.classList.add("vaalea");
    nappi.textContent = "🌙";
  } else {
    nappi.textContent = "☀️";
  }
};