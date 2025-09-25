const mapBtn = document.getElementById("map-button");
const map = document.getElementById("map");
const banner = document.getElementsByClassName("banner")[0];
mapBtn.addEventListener("click", (event) => {
    event.preventDefault();
    map.removeAttribute("hidden")
});