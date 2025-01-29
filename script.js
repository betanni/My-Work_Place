const con = document.querySelector(".container");
const card = document.querySelector(".card");
const like = document.querySelector("#like");

card.addEventListener("dblclick", () => {
    like.style.transform= "translate(-50%, -50%) scale(1.2)"; 

    setTimeout(() => {
        like.style.transform= "translate(-50%, -50%) scale(0)"; 
        
    }, 2000);
})