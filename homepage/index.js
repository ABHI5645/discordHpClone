const sideBar = document.getElementById("sideBar");
const ham = document.getElementById("ham");
const closeBtn = document.getElementById("closeBtn");

ham.addEventListener("click", function () {
  sideBar.style.width = "288px";
});

closeBtn.addEventListener("click", function () {
  sideBar.style.width = "0";
});