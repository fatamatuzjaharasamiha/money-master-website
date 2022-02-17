function getInputValue(boxId){
    let inputBox = document.getElementById(boxId);
    let inputAmount = parseFloat
}


document.getElementById('Calculate-btn').addEventListener('click', function () {

    const incomeAmount = document.getElementById('income-amount')
    const incomeValue = parseFloat(incomeAmount.value);
    const foodCost = document.getElementById('food-cost');
    const foodValue = parseFloat(foodCost.value);
    const rentCost = document.getElementById('rent-cost');
    const rentValue = parseFloat(rentCost.value);
    const clothCost = document.getElementById('cloth-cost');
    const clothValue = parseFloat(clothCost.value);
    //total expanses calculation
    let totalExpanse = foodValue + rentValue + clothValue;
    const total = document.getElementById('total')
    total.innerText = totalExpanse;

    //Balance Calculation
    let Balance = incomeValue - totalExpanse;
    const updateBalance = document.getElementById('update-balance');
    updateBalance.innerText = Balance;


})
//Saving part

document.getElementById('save-button').addEventListener('click', function () {

    const saveInput = document.getElementById('save-input');
    const saveValue = parseFloat(saveInput.value);

    const incomeAmount = document.getElementById('income-amount')
    const incomeValue = parseFloat(incomeAmount.value);

    const saving = (incomeValue * saveValue) / 100;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = saving;

    const updateBalance = document.getElementById('update-balance');
    const balance = updateBalance.innerText
    let remainingBalance = balance - saving
    let remainingText = document.getElementById('remaining');
    remainingText.innerText = remainingBalance;






})

