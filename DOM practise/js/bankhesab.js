document.getElementById('depositbtn').addEventListener('click', function () {
    const depositInput = document.getElementById('DepositInput');
    const DepositInputValue = depositInput.value;
     
    const InputDepositNumber = parseFloat(DepositInputValue);


    // console.log(InputDepositNumber);

    const amountDeposit = document.getElementById('depositamount');
    const amountDepositValue = amountDeposit.innerText;
    const TofloatDepositValue = parseFloat(amountDepositValue);
    // console.log(TofloatDepositValue);
    
    // console.log(TotalDepositValue);
    const TotalDepositValue = (InputDepositNumber + TofloatDepositValue);
            amountDeposit.innerText = TotalDepositValue;
            depositInput.value = '';
            
    


    

})