/* Calorie calculator
   Step 1: BMR = calories your body burns at rest (Mifflin-St Jeor formula)
   Step 2: multiply by the activity level
   Step 3: adjust for the goal */

var button = document.getElementById('calculate');
var output = document.getElementById('output');

button.addEventListener('click', function () {
  var age = Number(document.getElementById('age').value);
  var gender = document.getElementById('gender').value;
  var height = Number(document.getElementById('height').value);
  var weight = Number(document.getElementById('weight').value);
  var activity = Number(document.getElementById('activity').value);
  var goal = document.getElementById('goal').value;

  output.style.display = 'block';

  if (age <= 0 || height <= 0 || weight <= 0) {
    output.textContent = 'Please fill in your age, height and weight.';
    return;
  }

  // Step 1: BMR
  var bmr;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Step 2: daily calories to keep the same weight
  var calories = bmr * activity;

  // Step 3: goal
  if (goal === 'lose') {
    calories = calories - 500;
  } else if (goal === 'gain') {
    calories = calories + 300;
  }

  output.innerHTML = 'Your daily calories: <strong>' + Math.round(calories) + ' kcal</strong>';
});
