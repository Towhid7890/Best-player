// For calculate the expenses for a player
document
  .getElementById("budget-calculate")
  .addEventListener("click", function () {
    const nodeList = document.querySelectorAll("ol li");
    const nodeLength = nodeList.length;
    const playerBudget = document.getElementById("perplayer-ammount").value;
    const playerBudgetValue = parseInt(playerBudget);
    if (playerBudgetValue < 0) {
      return alert("Give positive value please");
    }
    const playerExpenses = document.getElementById("player-expenses");
    const expenses = nodeLength * playerBudgetValue;
    playerExpenses.innerText = expenses;
    console.log(expenses);
  });

//function for add click for select  player

function addListener(name, id) {
  document.getElementById(id).addEventListener("click", function () {
    addPlayer(name);
    document.getElementById(id).classList.add("disabled");
  });
}
// call function from common function
addListener("sakib", "select");
addListener("tamim", "select2");
addListener("masrafi", "select3");
addListener("musfiq", "select4");
addListener("taskin", "select5");
addListener("anamul", "select6");
addListener("mahmud", "select8");
addListener("mehedi", "select9");

// function for calculate total

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const managerInput = document.getElementById("manager-input").value;
    const managerValue = parseInt(managerInput);
    const coachInput = document.getElementById("coach-input").value;
    const coachValue = parseInt(coachInput);
    const playerExpenses = document.getElementById("player-expenses").innerText;
    const playerExpensesValue = parseInt(playerExpenses);
    const finalTotal = document.getElementById("total-final");
    if (managerValue < 0 || coachValue < 0 || playerExpensesValue < 0) {
      return alert("Please enter a positive value");
    }
    const total = managerValue + coachValue + playerExpensesValue;
    finalTotal.innerText = total;
  });
