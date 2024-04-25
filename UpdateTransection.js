function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";

  return inputValue;
}

function innerTextValue(fieldId) {
  const innerTextTag = document.getElementById(fieldId);
  const value = parseFloat(innerTextTag.innerText);

  return value;
}

function updateTotal(fieldId, amount) {
  const totalTag = document.getElementById(fieldId);
  const previousTotal = parseFloat(totalTag.innerText);
  const newTotal = previousTotal + amount;
  totalTag.innerText = newTotal;

  //   return newTotal;
}

function updateBalance(amount, isAdding) {
  const balanceTag = document.getElementById("blance-total-amount");
  const previousBalance = parseFloat(balanceTag.innerText);
  let newBalance;
  if (isAdding == true) {
    newBalance = previousBalance + amount;
  } else {
    newBalance = previousBalance - amount;
  }
  balanceTag.innerText = newBalance;
}

// Deposit Handel
document
  .getElementById("input-deposit-btn")
  .addEventListener("click", function () {
    const amount = getInputValue("input-deposit");
    if (amount > 0) {
      updateTotal("deposit-total", amount);
      updateBalance(amount, true);
    }
  });

// Withdraw handel
document
  .getElementById("input-withdraw-btn")
  .addEventListener("click", function () {
    const amount = getInputValue("input-withdraw");
    const balance = innerTextValue("blance-total-amount");
    if (amount > 0 && amount <= balance) {
      updateTotal("withdraw-total", amount);
      updateBalance(amount, false);
    }
  });
