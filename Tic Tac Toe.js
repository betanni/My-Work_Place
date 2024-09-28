let boxs = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-game");
let TurnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    TurnO = true;
    enableBoxs(); // Renamed this function to clear the boxes and enable them
    msgcontainer.classList.add("hide");
};
const DrawGame = ()=>{
    box.innerText="O,x";
    msg.innerText="Match Draw";
}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box are clicked");
        if (TurnO) {
            box.innerHTML = "O";
            TurnO = false;
        } else {
            box.innerHTML = "X";
            TurnO = true;
        }
      box.disabled= true;
        

      checkwinner()
    });
});


const checkwinner =() => {
    for(let pattern of winpatterns){
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos2val != "" && pos3val != ""){

            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner" , pos1val);
                showWineer(pos1val)
            }
        } 
}
};
const disableBoxes = () => {
    for (let box of boxs) {
        box.disabled = true; // Enable the boxes after reset
           DrawGame()
    }
};

const enableBoxs = ()=>{
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";  
    }
}


const showWineer = (winner)=> {
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disableBoxes()
}


newGame.addEventListener("click" , resetGame)
resetBtn.addEventListener("click" , resetGame)

                                         //Game end here||

// for (let i = 0; i < 9; i++) {
//    setTimeout(() => {
//     console.log(i);
//    },3000);
// }