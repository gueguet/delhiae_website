function menuFunction() {
    var x = document.getElementById("menu-ctn");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }