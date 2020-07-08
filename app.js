let celsiusValue = document.querySelector('#celsius-input'),
    fahrenheitValue = document.querySelector('#fahrenheit-input'),
    celsiusButton = document.querySelector('#celsius-button'),
    fahrenheitButton = document.querySelector('#fahrenheit-button'),
    celsiusResult = document.querySelector('#celsius-display'),
    fahrenheitResult = document.querySelector('#fahrenheit-display');

const convertCelsiusToFahrenheit = (x) => {
  let ans;
  if (!x === isNaN) {
    return null;
  } else {
    ans = (celsiusValue.value * (9/5)) +32;
    ansFixed = ans.toFixed(2);
    document.getElementById('fahrenheit-bar').setAttribute("height", ans);
    document.getElementById('fahrenheit-display').textContent = ansFixed;
    console.log(ansFixed);
    // celsiusValue.value = 0;
  }
}
const convertFahrenheitToCelsius = (x) => {
  let ans;
  if (!x === isNaN) {
    return null;
  } else {
    ans = (fahrenheitValue.value - 32) * (5/9);
    ansFixed = ans.toFixed(2);
    document.getElementById('celsius-bar').setAttribute("height", ans);
    document.getElementById('celsius-display').textContent = ansFixed;
    console.log(ansFixed);
    // fahrenheitValue.value = 0;
  }
}


celsiusButton.addEventListener('click', convertCelsiusToFahrenheit, false);

fahrenheitButton.addEventListener('click', convertFahrenheitToCelsius, false);
