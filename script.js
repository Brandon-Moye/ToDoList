"use strict";

//Selectors
const input = document.querySelector(".input");
const submit = document.querySelector(".submit-button");
const list = document.querySelector(".list");

//Event Listeners
submit.addEventListener("click", addActionItem);
//Functions
function addActionItem(event) {
  //stopping the function from firing/reloading automatically
  event.preventDefault();
  const actionItemContainer = document.createElement("div");
  actionItemContainer.classList.add("actionItemContainer");
  const newActionItem = document.createElement("li");
  newActionItem.innerText = input.value;
  newActionItem.classList.add("actionItem");
  actionItemContainer.appendChild(newActionItem);
  list.appendChild(actionItemContainer);
  input.value = ""; //clearning the form after submission
}
