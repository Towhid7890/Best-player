// For calculate the expenses for a player
document
  .getElementById("budget-calculate")
  .addEventListener("click", function () {
    const nodeList = document.querySelectorAll("ol li");
    const nodeLength = nodeList.length;
    const playerBudget = document.getElementById("perplayer-ammount").value;
    if (typeof playerBudget !== "number" || playerBudget < 0) {
      return alert("Please enter a Positive Number value");
    }
    const playerBudgetValue = parseFloat(playerBudget);
    const playerExpenses = document.getElementById("player-expenses");
    const expenses = nodeLength * playerBudgetValue;
    playerExpenses.innerText = expenses;
  });

function addListener(name, id) {
  document.getElementById(id).addEventListener("click", function () {
    addPlayer(name);
    document.getElementById(id).classList.add("disabled");
  });
}
addListener("sakib", "select");
addListener("tamim", "select2");
addListener("masrafi", "select3");
addListener("musfiq", "select4");
addListener("taskin", "select5");
addListener("anamul", "select6");

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
    const total = managerValue + coachValue + playerExpensesValue;
    finalTotal.innerText = total;
  });
