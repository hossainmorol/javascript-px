const calculateExpense = () => {
  const incom = document.getElementById("income").value;
  const food = document.getElementById("food").value;
  const rect = document.getElementById("rent").value;
  const clothes = document.getElementById("clothes").value;
  const expense = parseInt(food) + parseInt(rect) + parseInt(clothes);

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs your  positive numbers");
  }
  const balance = parseInt(income.value) - expense;
  if (expense > income.value) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};
document.getElementById("calculate-btn").addEventListener("click", function () {
  calculateExpense();
});
// saving part
document.getElementById("small-btn").addEventListener("click", function () {
  const savePercentage = document.getElementById("save").value;
  // const saveAmount = ;
  console.log(saveAmount);
  const balance = document.getElementById("balance");
  // console.log(typeof balance);

  // const balance = document.getElementById("balance").innerText;

  // // const totoal = balance / 2;

  // console.log(totoal);
  // const remainingBalance = balance - saveAmoun;

  // document.getElementById("saving-amount").innerText = saveAmoun;
  // document.getElementById("remaining-balance").innerText = remainingBalance;
});
