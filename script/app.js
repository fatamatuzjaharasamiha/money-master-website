//get value from input box
function getInputValue(input) {
    const inputValue = document.getElementById(input)
    const fieldValue = parseFloat(inputValue.value)
    if (isNaN(fieldValue) || fieldValue < 0) {
        return alert('Wrong!!!!!Please Enter Valid Amount');
    }
    else {
        return fieldValue;
    }

}
function BalanceUpdate() {
    const income = getInputValue('income-amount');
    const expenses = getInputValue('food-cost') + getInputValue('rent-cost') + getInputValue('cloth-cost');
    const totalExpanse = document.getElementById('total').innerText = expenses;
    const balance = document.getElementById('update-balance').innerText = income - totalExpanse;
    return balance;
}

document.getElementById('Calculate-btn').addEventListener('click', function () {
    BalanceUpdate();

})

// //Saving part

document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = getInputValue('save-input');
    const income = getInputValue('income-amount');
    const balance = BalanceUpdate();
    const saveAmount = (income * saveInput) / 100;
    if (saveAmount > balance) {
        alert('Invalid Save Amount.Please Enter Valid amount');
    }
    else {
        const saveBalance = document.getElementById('saving-amount').innerText = saveAmount;
        const remainingBalance = document.getElementById('remaining').innerText = balance - saveAmount;
    }

})

