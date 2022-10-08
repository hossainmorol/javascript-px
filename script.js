// function getInputValue(inputId) {
//   const depositInput = document.getElementById(inputId);
//   const depositValue = depositInput.value;
//   const totalDeposite = parseFloat(depositValue);
//   depositInput.value = "";
//   // console.log(totalDeposite);
//   return totalDeposite;
// }

// function updateTotalFiekd(totalFliedId, totalDeposite) {
//   const depositTotal = document.getElementById(totalFliedId);
//   const userDeposit = depositTotal.innerText;
//   const proviousDeposit = parseFloat(userDeposit);
//   const totalAmount = proviousDeposit + totalDeposite;
//   depositTotal.innerText = totalAmount;
// }

// function updateBlance(totalDeposite, isAdd) {
//   const totalBlance = document.getElementById("balance-input");
//   const userBlance = totalBlance.innerText;
//   const newBlance = parseFloat(userBlance);
//   // const totalAmountBlance = newBlance + newDeposit;
//   if (isAdd == true) {
//     totalBlance.innerText = newBlance + totalDeposite;
//   } else {
//     totalBlance.innerText = newBlance - totalDeposite;
//   }
// }

// document
//   .getElementById("deposit-button")
//   .addEventListener("click", function () {
//     const totalDeposite = getInputValue("deposit-input");
//     updateTotalFiekd("deposit-total", totalDeposite);
//     updateBlance(totalDeposite, true);
//   });
// document
//   .getElementById("withdraw-button")
//   .addEventListener("click", function () {
//     const whitdrawAmount = getInputValue("withdraw-input");
//     updateTotalFiekd("whitdraw-total", whitdrawAmount);
//     updateBlance(whitdrawAmount, false);
//   });

function getInputValue(inputId) {
  const inputFlied = document.getElementById(inputId);
  const inputValue = inputFlied.value;
  const pastflotValue = parseFloat(inputValue);
  inputFlied.value = "";
  return pastflotValue;
}

function updateTotalFiekd(totalInputFlied, pastflotValue) {
  const totalText = document.getElementById(totalInputFlied);
  const totalTextValu = totalText.innerText;
  const proviouValue = parseFloat(totalTextValu);
  const totalAmount = proviouValue + pastflotValue;
  totalText.innerText = totalAmount;
}

function updateBlance(pastflotValue, isAdd) {
  const blance = document.getElementById("balance-input");
  const blanceText = blance.innerText;
  const totalBlance = parseFloat(blanceText);

  if (isAdd == true) {
    blance.innerText = totalBlance + pastflotValue;
  } else {
    blance.innerText = totalBlance - pastflotValue;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const pastflotValue = getInputValue("deposit-input");
    updateTotalFiekd("deposit-total", pastflotValue);
    updateBlance(pastflotValue, true);
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const whitdrawValue = getInputValue("withdraw-input");
    updateTotalFiekd("whitdraw-total", whitdrawValue);
    updateBlance(whitdrawValue, false);
  });
