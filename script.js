const yourYear = document.getElementById("year").value;
const displayYears = document.getElementById("displayYears");
const displayMonths = document.getElementById("displayMonths");
const displayDays = document.getElementById("displayDays");
const button = document.getElementById("button");
const currentDate = new Date()

function calculate() {
  function calculateYears() {
  const currentYear = currentDate.getFullYear()

  function getYourYear() {
    const yourYear = document.getElementById('year').value; 
    const yourYearNumber = parseInt(yourYear);
    const resultYears = currentYear - yourYearNumber;
    displayYears.innerText = resultYears;
  }
  getYourYear();
}
calculateYears();

function calculateMonths() {
  const currentMonth = currentDate.getMonth();
  const yourMonth = document.getElementById('month').value;
  
  if (currentMonth >= parseInt(yourMonth)) {
  let resultMonths = currentMonth - yourMonth;
  displayMonths.innerText = resultMonths;
  } else {
    let resultMonths = 12 + currentMonth - yourMonth;
    displayMonths.innerText = resultMonths; 
  }     
}
calculateMonths();

function calculateDays() {
  const currentDay = currentDate.getDay();
  const yourDay = document.getElementById('day').value;

  if (currentDay >= parseInt(yourDay)) {
    let resultDay = currentDay - yourDay;
    displayDays.innerText = resultDay;
  } else {
    let resultDay = 31 + currentDay - yourDay;
    displayDays.innerText = resultDay;
  }

}
calculateDays();
}