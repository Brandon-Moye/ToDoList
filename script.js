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

  const completeButton = document.createElement("button");
  completeButton.innerHTML = "Complete";
  completeButton.classList.add("completeButton");
  newActionItem.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("deleteButton");
  newActionItem.appendChild(deleteButton);
  input.value = ""; //clearning the form after submission
}
