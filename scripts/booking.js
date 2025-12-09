/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let costPerDay = 35;
let daysSelected = 0;

const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");

const fullDay = document.getElementById("full");
const halfDay = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function clickedDay() {
  if (!this.classList.contains("clicked")) {
    this.classList.add("clicked");
    daysSelected++;
  }
  recalculate();
}

monday.addEventListener("click", clickedDay);
tuesday.addEventListener("click", clickedDay);
wednesday.addEventListener("click", clickedDay);
thursday.addEventListener("click", clickedDay);
friday.addEventListener("click", clickedDay);

console.log(daysSelected);
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays() {
  monday.classList.remove("clicked");
  tuesday.classList.remove("clicked");
  wednesday.classList.remove("clicked");
  thursday.classList.remove("clicked");
  friday.classList.remove("clicked");
  daysSelected = 0;
  recalculate();
}

clearButton.addEventListener("click", clearDays);
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfDaySelected() {
  costPerDay = 20;
  halfDay.classList.add("clicked");
  fullDay.classList.remove("clicked");
  recalculate();
}

halfDay.addEventListener("click", halfDaySelected);
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullDaySelected() {
  costPerDay = 35;
  fullDay.classList.add("clicked");
  halfDay.classList.remove("clicked");
  recalculate();
}

fullDay.addEventListener("click", fullDaySelected);
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
  calculateCost = costPerDay * daysSelected;
  const cost = document.getElementById("calculated-cost");
  cost.textContent = calculateCost;
}
