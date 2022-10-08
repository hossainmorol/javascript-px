function getInput(inputId) {
  const input = document.getElementById(inputId);
  const inputVlaue = input.value;
  const totalInputVlaue = parseFloat(inputVlaue);
  input.value = "";
  return totalInputVlaue;
}

function updatInputFlied(inputFlied, totalInputVlaue) {
  const inputText = document.getElementById(inputFlied);
  const inputTextVlaue = inputText.innerText;
  const inputTotal = parseFloat(inputTextVlaue);
  const totalAmount = inputTotal + totalInputVlaue;
  inputText.innerText = totalAmount;
}

function updateBlance(totalInputVlaue, isAdd) {
  const blance = document.getElementById("balance-input");
  const blanceVlaue = blance.innerText;
  const blanceTotal = parseFloat(blanceVlaue);
  if (isAdd == true) {
    blance.innerText = blanceTotal + totalInputVlaue;
  } else {
    blance.innerText = blanceTotal - totalInputVlaue;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const totalInputVlaue = getInput("deposit-input");
    updatInputFlied("deposit-total", totalInputVlaue);
    updateBlance(totalInputVlaue, true);
  });
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawValue = getInput("withdraw-input");
    updatInputFlied("whitdraw-total", withdrawValue);
    updateBlance(withdrawValue, false);
  });
