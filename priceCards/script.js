// Arrow function to convert Celsius to Fahrenheit
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;

// Arrow function to convert Fahrenheit to Celsius
const getCelsius = f => {
    const celsius = (f - 32) * 5 / 9;
    return celsius;
}

// Example usage
const tempCelsius = 25; // Example temperature in Celsius
const tempFahrenheit = celsiusToFahrenheit(tempCelsius);

console.log(`${tempCelsius}°C is equal to ${tempFahrenheit}°F`);

const tempFahrenheit2 = 77; // Example temperature in Fahrenheit
const tempCelsius2 = getCelsius(tempFahrenheit2);

console.log(`${tempFahrenheit2}°F is equal to ${tempCelsius2}°C`);
