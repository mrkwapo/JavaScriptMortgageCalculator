var MONTHS_IN_YEAR = 12;
var PERCENT = 100;

//PRINT MORTGAGE
function printMortgage() {
  var principal = document.getElementById("principal").value;
  var annualInterestRate = document.getElementById("interest").value;
  var years = document.getElementById("years").value;
  var mortgage = calculateMortgage(principal, annualInterestRate, years);
  document.getElementById("results").innerHTML =
    "Monthly Mortgage: $" + mortgage.toFixed(2);
}
//CALCULATE MORTGAGE
function calculateMortgage(principal, annualInterestRate, years) {
  var monthlyInterestRate = annualInterestRate / PERCENT / MONTHS_IN_YEAR;

  var numberOfPayments = years * MONTHS_IN_YEAR;

  var mortgage =
    (principal *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  return mortgage;
}

//PRINT PAYMENT SCHEDULE
function printPaymentSchedule() {
  var principal = document.getElementById("principal").value;
  var annualInterestRate = document.getElementById("interest").value;
  var years = document.getElementById("years").value;
  var payments = [];

  for (var month = 1; month <= years * MONTHS_IN_YEAR; month++) {
    var balance = calculateBalance(principal, annualInterestRate, years, month);
    payments.push(balance);
  }
  document.getElementById("paymentSchedule").innerHTML =
    "<table>" +
    "<tr>" +
    "<th>" +
    "Payment" +
    "</th>" +
    "<th>" +
    "Balance" +
    "</th>" +
    "</tr>" +
    "</table>";
  payments.forEach(myFunction);

  function myFunction(item, index) {
    document.getElementById("paymentSchedule").innerHTML +=
      "<table>" +
      "<tr>" +
      "<td>" +
      (index + 1) +
      "</td>" +
      "<td>" +
      "$" +
      item.toFixed(2) +
      "</td>" +
      "</tr>" +
      "</table>";
  }
}

//CALCULATE BALANCE
function calculateBalance(
  principal,
  annualInterestRate,
  years,
  numberOfPaymentsMade
) {
  var monthlyInterestRate = annualInterestRate / PERCENT / MONTHS_IN_YEAR;
  var numberOfPayments = years * MONTHS_IN_YEAR;

  var balance =
    (principal *
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) -
        Math.pow(1 + monthlyInterestRate, numberOfPaymentsMade))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  return balance;
}

//RESET CALCULATOR
function resetCalculator() {
  document.getElementById("principal").value = "";
  document.getElementById("interest").value = "";
  document.getElementById("years").value = "";
  document.getElementById("results").innerHTML = "";
  document.getElementById("paymentSchedule").innerHTML = "";
}
