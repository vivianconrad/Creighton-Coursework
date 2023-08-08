const fahrenheitInput = document.getElementById('fahrenheitInput');
const convertButton = document.getElementById('convertButton');
const celsiusResult = document.getElementById('celsiusResult');

convertButton.addEventListener('click', () => {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
        const celsiusValue = ((fahrenheitValue - 32) * 5 / 9).toFixed(2);
        celsiusResult.textContent = `${celsiusValue} °C`;
    } else {
        celsiusResult.textContent = 'Invalid input';
    }
});
