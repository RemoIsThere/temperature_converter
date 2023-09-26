document.addEventListener('DOMContentLoaded', function() {
    const inputTemp = document.getElementById('inputTemp');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const convertBtn = document.getElementById('convert');
    const switchBtn = document.getElementById('switchUnits');
    const clearBtn = document.getElementById('clear');
    const resultDiv = document.getElementById('result');
    const historyDiv = document.getElementById('history');

    // Populate unit options (You'll need to add more options as per your requirements)
    const units = ['Celsius', 'Fahrenheit', 'Kelvin'];
    units.forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        const option2 = option1.cloneNode(true);
        fromUnit.appendChild(option1);
        toUnit.appendChild(option2);
    });

    // Event listeners
    convertBtn.addEventListener('click', convertTemperature);
    switchBtn.addEventListener('click', switchUnits);
    clearBtn.addEventListener('click', clearFields);

    function convertTemperature() {
        const inputTemperature = parseFloat(inputTemp.value);
        const fromUnitValue = fromUnit.value;
        const toUnitValue = toUnit.value;

        if (!isNaN(inputTemperature)) {
            let result;
            if (fromUnitValue === 'Celsius' && toUnitValue === 'Fahrenheit') {
                result = (inputTemperature * 9/5) + 32;
            } else if (fromUnitValue === 'Fahrenheit' && toUnitValue === 'Celsius') {
                result = (inputTemperature - 32) * 5/9;
            } else if (fromUnitValue === 'Celsius' && toUnitValue === 'Kelvin') {
                result = inputTemperature + 273.15;
            } else if (fromUnitValue === 'Kelvin' && toUnitValue === 'Celsius') {
                result = inputTemperature - 273.15;
            } else if (fromUnitValue === 'Fahrenheit' && toUnitValue === 'Kelvin') {
                result = (inputTemperature - 32) * 5/9 + 273.15;
            } else if (fromUnitValue === 'Kelvin' && toUnitValue === 'Fahrenheit') {
                result = (inputTemperature - 273.15) * 9/5 + 32;
            } else {
                result = inputTemperature; // If units are the same, result is unchanged
            }

            resultDiv.textContent = `Result: ${inputTemperature} ${fromUnitValue} = ${result.toFixed(2)} ${toUnitValue}`;
            // Add to history
            const historyItem = document.createElement('p');
            historyItem.textContent = `${inputTemperature} ${fromUnitValue} = ${result.toFixed(2)} ${toUnitValue}`;
            historyDiv.appendChild(historyItem);
        } else {
            resultDiv.textContent = 'Please enter a valid temperature.';
        }
    }

    function switchUnits() {
        // Swap the selected units
        const temp = fromUnit.value;
        fromUnit.value = toUnit.value;
        toUnit.value = temp;
    }

    function clearFields() {
        inputTemp.value = '';
        resultDiv.textContent = '';
    }
});
