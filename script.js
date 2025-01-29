var main = document.querySelector(".main");
var crsr = document.querySelector("h2");

main.addEventListener("mousemove", (e) => {
    crsr.style.left = e.x + "px";
    crsr.style.top = e.y + "px";
});