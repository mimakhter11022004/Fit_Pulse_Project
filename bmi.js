/* BMI calculator
   BMI = weight (kg) / height (m) x height (m) */

// 1. Find the elements on the page
var button = document.getElementById('calculate');
var output = document.getElementById('output');

// 2. Run this code when the button is clicked
button.addEventListener('click', function () {
  var height = Number(document.getElementById('height').value);   // in cm
  var weight = Number(document.getElementById('weight').value);   // in kg

  output.style.display = 'block';    // show the result box

  // Check the input
  if (height <= 0 || weight <= 0) {
    output.textContent = 'Please enter a valid height and weight.';
    return;
  }

  // 3. Calculate
  var meters = height / 100;
  var bmi = weight / (meters * meters);

  // 4. Find the category
  var category;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal weight';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  // 5. Show the result
  output.innerHTML = 'Your BMI is <strong>' + bmi.toFixed(1) + '</strong><br>Category: ' + category;
});
