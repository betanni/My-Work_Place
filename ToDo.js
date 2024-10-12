// Write your code here ToDo List Js
const inputs = document.getElementById("input");
const text = document.querySelector(".text");

function Add() {
  if (inputs.value == "") {
    alert("Please Enter Task"); 
  } else {
    let newEle = document.createElement("ul");
    text.appendChild(
      newEle
    ).innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    inputs.value = "";
    newEle.addEventListener("click", function () {
      newEle.remove();
    });
  }
}