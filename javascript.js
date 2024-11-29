function convertToFahrenheit(event) {
    event.preventDefault(); 
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        document.getElementById('result').textContent = "Zadejte platnou číselnou hodnotu.";
        return;
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('result').textContent = `${celsius}°C je ${fahrenheit.toFixed(2)}°F.`;
}