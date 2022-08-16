/*
Dashboard Section JavaScript
*/


document.getElementById('btn-deposit').addEventListener('click', function () {
    let depositInputField = document.getElementById('deposit-input');
    let depositInputValue = parseFloat(depositInputField.value);
    if (typeof depositInputValue === 'number' && depositInputValue > 0) {
        let perviousDepositString = document.getElementById('previous-deposit-value');
        let perviousDepositValue = parseFloat(perviousDepositString.innerText);
        let newDepositValue = perviousDepositValue + depositInputValue;
        perviousDepositString.innerText = newDepositValue;

        let perviousBalanceString = document.getElementById('previous-balance-value');
        let perviousBalanceValue = parseFloat(perviousBalanceString.innerText);
        let newBalanceValue = perviousBalanceValue + depositInputValue;
        perviousBalanceString.innerText = newBalanceValue;
        depositInputField.value = '';
    }
    else {
        alert('Please, Input Valid Number Type Deposit Amount');
        depositInputField.value = '';
    }
})