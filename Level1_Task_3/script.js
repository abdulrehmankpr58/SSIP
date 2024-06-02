// JavaScript file for handling temperature conversion

function convertTemperature() {
    // Get user input
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const selectedUnit = document.getElementById("unit").value;

    // Check if the input is a valid number
    if (!isNaN(temperatureInput)) {
        // Perform temperature conversion based on selected unit
        let convertedTemperature;
        switch (selectedUnit) {
            case "celsius":
                convertedTemperature = (temperatureInput - 32) * (5 / 9);
                break;
            case "fahrenheit":
                convertedTemperature = (temperatureInput * 9 / 5) + 32;
                break;
            case "kelvin":
                convertedTemperature = temperatureInput + 273.15;
                break;
        }

        // Display the converted temperature
        document.getElementById("convertedTemperature").textContent = `${convertedTemperature.toFixed(2)} ${selectedUnit.toUpperCase()}`;
    } else {
        // Display an error message for invalid input
        document.getElementById("convertedTemperature").textContent = "Invalid input. Please enter a number.";
    }
}
