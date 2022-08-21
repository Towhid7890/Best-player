// For calculate the expenses for a player
document
  .getElementById("budget-calculate")
  .addEventListener("click", function () {
    const nodeList = document.querySelectorAll("ol li");
    const nodeLength = nodeList.length;
    const playerBudget = document.getElementById("perplayer-ammount").value;
    const playerBudgetValue = parseFloat(playerBudget);
    const playerExpenses = document.getElementById("player-expenses");
    const expenses = nodeLength * playerBudgetValue;
    playerExpenses.innerText = expenses;
  });
// select player show in five section
document.getElementById("select").addEventListener("click", function () {
  addPlayer("sakib");
  document.getElementById("select").classList.add("disabled");
});
document.getElementById("select2").addEventListener("click", function () {
  addPlayer("tamim");
  document.getElementById("select2").classList.add("disabled");
});
document.getElementById("select3").addEventListener("click", function () {
  addPlayer("masrafi");
  document.getElementById("select3").classList.add("disabled");
});
document.getElementById("select4").addEventListener("click", function () {
  addPlayer("musfiq");
  document.getElementById("select4").classList.add("disabled");
});
document.getElementById("select5").addEventListener("click", function () {
  addPlayer("taskin");
  document.getElementById("select5").classList.add("disabled");
});
document.getElementById("select6").addEventListener("click", function () {
  addPlayer("anamul");
  document.getElementById("select6").classList.add("disabled");
});
