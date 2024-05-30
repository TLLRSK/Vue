const button = document.querySelector("button");
const input = document.querySelector("#goal");
const list = document.querySelector("ul");

const addGoal = () => {
    const enteredValue = input.value;
    const listItem = document.createElement("li");
    listItem.textContent = enteredValue;
    list.appendChild(listItem);
    input.value = "";
}

button.addEventListener("click", addGoal);