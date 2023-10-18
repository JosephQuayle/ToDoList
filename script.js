const todoList = [];
const todoListContainer = document.getElementById("todoList"); // Get the container element

function storeInput() {
  const input = document.getElementById("toDoInput");
  const inputValue = input.value;
  todoList.push(inputValue);
  console.log(todoList);

  //resets the input so user has clear box to type in
  input.value = "";

  // Remove all child nodes starting from the second child
  while (todoListContainer.childNodes.length > 2) {
    todoListContainer.removeChild(todoListContainer.childNodes[2]);
  }

  for (let index = 0; index < todoList.length; index++) {
    const todoValue = todoList[index];
    console.log(todoValue);
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "check-div");
    newDiv.setAttribute("id", "checkDiv");
    const check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    check.setAttribute("name", todoValue + index);
    check.setAttribute("value", todoValue);
    const checkLabel = document.createElement("label");
    checkLabel.setAttribute("for", todoValue + index);
    checkLabel.innerHTML = todoValue;
    document.getElementById("todoList").appendChild(newDiv);
    newDiv.appendChild(check);
    newDiv.appendChild(checkLabel);
  }
}
