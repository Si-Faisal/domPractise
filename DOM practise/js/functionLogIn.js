//FindValue From input  text...

function FindValueFromInputText(inputtextID) {
    const inputTextValue = inputtextID.value;
    // console.log(inputTextValue);
    const inputValueTofloat = parseFloat(inputTextValue);
    // console.log(typeof (inputValueTofloat));
    inputtextID.value = '';
    return inputValueTofloat;


}

//find value of deposit text...
function FindValueFromText(textId) {
    const textValue = textId.innerText;
    const textValueToFloat = parseFloat(textValue);
    // console.log(typeof(textValueToFloat) );

    return textValueToFloat;
    
}

// //calculation function...

// function calculation(prev, curr) {
//     const TotalDepositValue = prev + curr;
//     // return TotalDepositValue;
// }

//set Value To inner Text ....

function SetValueToInnerText(textOFID, total) {
    textOFID.innerText = total;
}



//after click  button find the value..

document.getElementById('depositbtn').addEventListener('click', function () {

    //deposit part start
    const depositInputID = document.getElementById('DepositInput');
    const TofunctionForInputValue = FindValueFromInputText(depositInputID);

    const depositText = document.getElementById('depositamount');
    const TofunctionFortextValue = FindValueFromText(depositText);

    // const Tocalculation = calculation(inputValueTofloat , textValueToFloat);
   const totaldepositToinnerText = TofunctionForInputValue + TofunctionFortextValue;
    

    const ToSetValueToinnerText = SetValueToInnerText(depositText, totaldepositToinnerText);
    
    //deposit part end...

    //balance for deposit part start
    const FindtextBalance = document.getElementById('textbalance');
    const SenttextBalanceTofunction = FindValueFromText(FindtextBalance);

    const TotalBalance = SenttextBalanceTofunction + TofunctionForInputValue;
    const setBalanceToinnertext = SetValueToInnerText(FindtextBalance, TotalBalance);

    //balance for deposit part end

    
    
   

})
//withdraw part start ..
document.getElementById('withdrawbtn').addEventListener('click', function () {
    const withdrawInputField = document.getElementById('withdraw-input');
    const sentIdTofunctionForwithdrawValue = FindValueFromInputText(withdrawInputField);

    const textFromwithdrawId = document.getElementById('withdrawAmount');
    const senttextTofunctionForValue = FindValueFromText(textFromwithdrawId);

    // const Tocalculation = calculation(inputValueTofloat , textValueToFloat);
   const TotalwithdrawBalance = sentIdTofunctionForwithdrawValue + senttextTofunctionForValue;
    

    const setTotalValueTowithdrawInner = SetValueToInnerText(textFromwithdrawId, TotalwithdrawBalance);

    // withdraw part end

    //after withdraw total balance....

    const FindtextBalance = document.getElementById('textbalance');
    const SenttextBalanceTofunction = FindValueFromText(FindtextBalance);

    const TotalBalanceAfterWithdraw = SenttextBalanceTofunction - sentIdTofunctionForwithdrawValue;
    const setBalanceToinnertext = SetValueToInnerText(FindtextBalance, TotalBalanceAfterWithdraw);



})