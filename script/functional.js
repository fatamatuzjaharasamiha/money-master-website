//get input value
function getInputValue(inputId) {
    const inputAmount = document.getElementById(inputId);
    const inputText = inputAmount.value;
    const inputTextToNum = parseFloat(inputText);
    return inputTextToNum;
}
//total expense calculation
function balanceUpdate() {
    const expense = getInputValue('food-cost') + getInputValue('rent-cost') + getInputValue('cloth-cost');
    return expense;
}
document.getElementById('Calculate-btn').addEventListener('click', function () {
    const incomeField = getInputValue('income-amount');
    console.log(incomeField);
    const foodField = getInputValue('food-cost');
    const rentField = getInputValue('rent-cost');
    const clothField = getInputValue('cloth-cost');
    document.getElementById('total').innerText = balanceUpdate();
    console.log(total);
    document.getElementById('update-balance').innerText = incomeField - balanceUpdate();
})
document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = getInputValue('save-input');
    // console.log(saveInput);
    const incomeField = getInputValue('income-amount');
    const savingAmount = (incomeField * saveInput) / 100;
    // console.log(savingAmount)
    const savingAmountValue = document.getElementById('saving-amount');
    const save = savingAmountValue.innerText = savingAmount;

    //balance theke saving amount biyog
    const remainingBalance = document.getElementById('remaining');
    // const remainingText = remainingBalance.innerText
    const remainingUpdate = (incomeField - balanceUpdate()) - save;
    remainingBalance.innerText = remainingUpdate;
});
