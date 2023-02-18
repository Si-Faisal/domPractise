// get input value by id
function getElemntValueByID(id) {
    const inputElement = document.getElementById(id);
    const inputNumber = parseFloat(inputElement.value);
    inputElement.value = "";
    return inputNumber;
  }
  
  // get element value
  
  function getElementTextValueByID(id) {
    const element = document.getElementById(id);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
  }
  
  // set element value
  
  function setElementValue(id, value) {
    const element = document.getElementById(id);
    return (element.innerText = value);
  }
  
  // to fixed balance
  function fixedValue(amount) {
    return amount.toFixed(2);
  }



document.getElementById("deposit").addEventListener("click", function () {
    // get input value
    const depositValue = getElemntValueByID("deposit-input");
    if (!depositValue) {
      alert("please provide a valid amont");
      return;
    } else if (!(depositValue > 0)) {
      alert("minimum deposit amount should be greater then 0");
      return;
    } else {
      // getting previous deposit total
      const previousDeposit = getElementTextValueByID("deposit-total");
      // calculating deposit total
      const depositTotal = previousDeposit + depositValue;
      //setting total balance
      const previousBalance = getElementTextValueByID("balance-total");
      const balanceTotal = previousBalance + depositValue;
  
      setElementValue("deposit-total", fixedValue(depositTotal));
      setElementValue("balance-total", fixedValue(balanceTotal));
    }
  
    console.log("Deposit successfull");
});
  


document.getElementById("withdraw").addEventListener("click", function () {
    // get input value
    const withdrawValue = getElemntValueByID("withdraw-input");
    const previousBalance = getElementTextValueByID("balance-total");
    if (!withdrawValue) {
      alert("please provide a valid amount");
      return;
    } else if (!(withdrawValue > 0)) {
      alert("minimum withdraw amount should be greater then 0");
      return;
    } else if (withdrawValue > previousBalance) {
      alert("insufficient balance");
      return;
    } else {
      // getting previous deposit total
      const previousWithdraw = getElementTextValueByID("withdraw-total");
      // calculating deposit total
      const withdrawTotal = previousWithdraw + withdrawValue;
  
      //setting total balance
  
      const balanceTotal = previousBalance - withdrawValue;
  
      setElementValue("withdraw-total", fixedValue(withdrawTotal));
      setElementValue("balance-total", fixedValue(balanceTotal));
    }
  
    console.log("withdraw successfull");
  });


