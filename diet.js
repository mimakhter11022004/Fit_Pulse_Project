/* Diet plans: show one plan at a time */

var tabs = document.querySelectorAll('.tab');     // the 3 buttons
var plans = document.querySelectorAll('.plan');   // the 3 plans

// Shows the plan with the given number (0, 1 or 2) and hides the others
function showPlan(number) {
  for (var i = 0; i < plans.length; i++) {
    plans[i].style.display = 'none';
    tabs[i].classList.remove('active');
  }
  plans[number].style.display = 'block';
  tabs[number].classList.add('active');
}

tabs[0].addEventListener('click', function () { showPlan(0); });
tabs[1].addEventListener('click', function () { showPlan(1); });
tabs[2].addEventListener('click', function () { showPlan(2); });

// Show the first plan when the page opens
showPlan(0);
