const billAmount = document.getElementById("billAmount");
const tipPercent = document.getElementById("tipPercent");
const calculateBtn = document.getElementById("calculateBtn");

const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");

calculateBtn.addEventListener("click", () => {
    const bill = parseFloat(billAmount.value);
    const tip = parseFloat(tipPercent.value);

    if (isNaN(bill) || isNaN(tip) || bill <= 0 || tip < 0) {
        alert("Please enter valid values!");
        return;
    }

    const tipValue = (bill * tip) / 100;
    const total = bill + tipValue;

    tipAmount.textContent = tipValue.toFixed(2);
    totalAmount.textContent = total.toFixed(2);
});