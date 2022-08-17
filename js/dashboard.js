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

document.getElementById('btn-withdraw').addEventListener('click', function () {
    let withdrawInputField = document.getElementById('withdraw-input');
    let withdrawInputValue = parseFloat(withdrawInputField.value);
    if (typeof withdrawInputValue === 'number' && withdrawInputValue > 0) {
        let perviousWithdrawString = document.getElementById('previous-withdraw-value');
        let perviousWithdrawValue = parseFloat(perviousWithdrawString.innerText);
        let newWithdrawValue = perviousWithdrawValue + withdrawInputValue;
        perviousWithdrawString.innerText = newWithdrawValue;
        let perviousBalanceString = document.getElementById('previous-balance-value');
        let perviousBalanceValue = parseFloat(perviousBalanceString.innerText);
        let newBalanceValue = perviousBalanceValue - withdrawInputValue;
        perviousBalanceString.innerText = newBalanceValue;
        withdrawInputField.value = '';
    }
    else {
        alert('Please, Input Valid Number Type Withdraw Amount');
        withdrawInputField.value = '';
    }

})