// deposit
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInfut = document.getElementById("deposit-input");
    const userInfput = depositInfut.value;
    const newDeposit = parseFloat(userInfput);
    // console.log(newDeposit);
    const depositTotal = document.getElementById("deposit-total");
    const userDeposit = depositTotal.innerText;
    const proviousDeposit = parseFloat(userDeposit);
    const totalAmount = proviousDeposit + newDeposit;
    depositTotal.innerText = totalAmount;

    // total blance
    const totalBlance = document.getElementById("balance-input");
    const userBlance = totalBlance.innerText;
    const newBlance = parseFloat(userBlance);
    const totalAmountBlance = newBlance + newDeposit;
    totalBlance.innerText = totalAmountBlance;
    // withdraw

    // caler input
    depositInfut.value = "";
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const userWhitdraw = withdrawInput.value;
    const newWhitdraw = parseFloat(userWhitdraw);
    const withdrawTotal = document.getElementById("whitdraw-total");
    // console.log(withdrawTotal.innerText);
    const whitdrawText = withdrawTotal.innerText;
    const previousWhitdraw = parseFloat(whitdrawText);
    // console.log(previousWhitdraw);
    const totalAmountWhitdraw = previousWhitdraw + newWhitdraw;
    withdrawTotal.innerText = totalAmountWhitdraw;

    // set blance
    const totalBlance = document.getElementById("balance-input");
    const userBlance = totalBlance.innerText;
    const newBlance = parseFloat(userBlance);
    const setBlance = newBlance - newWhitdraw;
    totalBlance.innerText = setBlance;

    withdrawInput.value = "";
  });
