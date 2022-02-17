//get value from input box

document.getElementById('Calculate-btn').addEventListener('click', function () {

    const incomeAmount = document.getElementById('income-amount')
    const incomeValue = parseFloat(incomeAmount.value);

    const foodCost = document.getElementById('food-cost');
    const foodValue = parseFloat(foodCost.value);

    const rentCost = document.getElementById('rent-cost');
    const rentValue = parseFloat(rentCost.value);


    const clothCost = document.getElementById('cloth-cost');
    const clothValue = parseFloat(clothCost.value);

    if (isNaN(incomeValue) || incomeValue < 0) {
        alert('Please input valid amount')
    }
    if (isNaN(foodValue) || foodValue < 0) {
        alert('Please input valid cost amount')
    }
    if (isNaN(rentValue) || rentValue < 0) {
        alert('Please input valid cost amount')
    }
    if (isNaN(clothValue) || clothValue < 0) {
        alert('Please input valid cost amount')
    }

    //total expanses calculation

    const total = document.getElementById('total')
    let totalExpanse = foodValue + rentValue + clothValue;
    total.innerText = totalExpanse;

    //Balance Calculation

    const updateBalance = document.getElementById('update-balance');
    let balance = incomeValue - totalExpanse;
    updateBalance.innerText = balance;

})
//Saving part

document.getElementById('save-button').addEventListener('click', function () {

    const saveInput = document.getElementById('save-input');
    const saveValue = parseFloat(saveInput.value);

    const incomeAmount = document.getElementById('income-amount')
    const incomeValue = parseFloat(incomeAmount.value);



    const savingAmount = document.getElementById('saving-amount');
    const saving = (incomeValue * saveValue) / 100;
    savingAmount.innerText = saving;


    const updateBalance = document.getElementById('update-balance');
    const balance = updateBalance.innerText;
    let remainingText = document.getElementById('remaining');
    let remainingBalance = balance - saving;
    remainingText.innerText = remainingBalance;
})

