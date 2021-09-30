
function calc() {
  const units = parseInt(document.getElementById("unit").value);
  const load = parseInt(document.getElementById("load").value);
  var Tariff = document.getElementById("Tariff").value;
  var amount;
  
  if (Tariff == "Domestic") {
    if (units >= 0 && units <= 50) {
      document.getElementById("result").value = units * 0.50;
      document.getElementById("fc").value = "";
    } else if (units >= 0 && units <= 200) {
      document.getElementById("result").value = 25+((units-50)*0.75);
      document.getElementById("fc").value = "";
    } else if (units >= 0 && units <= 250) {
      document.getElementById("result").value = 100 + ((units - 150) * 1.20);
      document.getElementById("fc").value = "";
    } else if (units >=0&& units>=500) {
      document.getElementById("result").value = 150 + ((units - 200) * 1.50);
      document.getElementById("fc").value = "";
    } else {
      document.getElementById("result").value = "Wrong unit";
    }
  } else {
    if (units <= 100) {
    amount = units * 0.5;
    } else {
    amount = units * 0.10;
    }
    document.getElementById("fc").value = load * 70;
    document.getElementById("result").value = (amount + (load * 70));
  }
  return 0;
}

