"user strict";

// Make all the variabels that is nesesarry

// Get all the input values
// Make an eventlistner on the Btn so we register when somthing will happend
// Make a calculation of the inputs so it prints the right value of year months and days
// Make an if-sats that decide what will happen in its the wrong date

//outputs
const para1 = document.querySelector(".pyears");
const para2 = document.querySelector(".pmonths");
const para3 = document.querySelector(".pdays");
const infoDays = document.querySelector(".infodays");
const infoMonths = document.querySelector(".infoMonths");
const infoYears = document.querySelector(".infoYears");
//btn
const btn = document.querySelector(".btn");

// // inouts variabler
const daysInputs = document.querySelector(".inputDay");
const daysMonths = document.querySelector(".inputMonth");
const daysYears = document.querySelector(".inputYears");

let dagensDatumYear = new Date();

// function
btn.addEventListener("click", function () {
  // If its wrong date
  if (
    daysInputs.value > 31 ||
    daysMonths.value > 12 ||
    daysYears.value > 2023
  ) {
    infoDays.textContent = "Too high, try again";
    infoMonths.textContent = "Too high, try again";
    infoYears.textContent = "Too high, try again";
  }
  if (daysInputs.value <= 31) {
    infoDays.textContent = "";
  }
  if (daysMonths.value <= 12) {
    infoMonths.textContent = "";
  }
  if (daysYears.value <= 2023) {
    infoYears.textContent = "";
  }
  // calculate birthdate
  const birthdate = new Date(
    `${daysYears.value}-${daysMonths.value}-${daysInputs.value}`
  );
  let years = dagensDatumYear.getFullYear() - birthdate.getFullYear();
  let days = dagensDatumYear.getDate() - birthdate.getDate();
  let months = dagensDatumYear.getMonth() - birthdate.getMonth();
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }
  if (days < 0) {
    months--;
    days += new Date(
      dagensDatumYear.getFullYear(),
      dagensDatumYear.getMonth(),
      0
    ).getDate();
  }
  //Print the right Numbers
  para1.textContent = years;
  para2.textContent = months.toString().padStart(2, "0");
  para3.textContent = days;
});
