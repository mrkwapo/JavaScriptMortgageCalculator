function calculateMortgage() {
  var MONTHS_IN_YEAR = 12;
  var PERCENT = 100;

  var principal = document.getElementById("principal").value;
  var annualInterestRate = document.getElementById("interest").value;
  var monthlyInterestRate = annualInterestRate / PERCENT / MONTHS_IN_YEAR;
  var years = document.getElementById("years").value;
  var numberOfPayments = years * MONTHS_IN_YEAR;

  var mortgage =
    (principal *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  document.getElementById("results").innerHTML =
    "Monthly Mortgage: $" + mortgage.toFixed(2);
}

function clearForm() {
  document.getElementById("principal").value = "";
  document.getElementById("interest").value = "";
  document.getElementById("years").value = "";
  document.getElementById("results").innerHTML = "";
}
