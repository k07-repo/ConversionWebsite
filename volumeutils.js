function round(number) {
  if(number > 10000000000000) {
    return NaN;
  }
  return Math.round((number + Number.EPSILON) * 10000000) / 10000000
}

function litersToMilliliters(liters) {
  return round(liters * 1000.0);
}
function litersToKiloliters(liters) {
  return round(liters / 100.0);
}

function litersToCups(liters) {
  return round(liters / 0.236588);
}

function cupsToLiters(cups) {
  return round(cups * 0.236588);
}

function cupsToOunces(cups) {
  return round(cups * 8.0);
}
function cupsToPints(cups) {
  return round(cups / 2.0);
}
function cupsToQuarts(cups) {
  return round(cups / 4.0);
}
function cupsToGallons(cups) {
  return round(cups / 16.0);
}

function litersChanged(liters, which) {
  if(!isNumerical(liters)) {
    document.getElementById("validation").innerHTML = "Numerical values required!";
    setAllNan(which);
    return;
  }
  else {
    document.getElementById("validation").innerHTML = "";
  }
  if(which != "milliliters") { document.getElementById("milliliters").value = litersToMilliliters(liters); }
  if(which != "liters") { document.getElementById("liters").value = round(liters); }
  if(which != "kiloliters") { document.getElementById("kiloliters").value = litersToKiloliters(liters); }

  var cups = litersToCups(liters);

  document.getElementById("ounces").value = cupsToOunces(cups);
  document.getElementById("cups").value = round(cups);
  document.getElementById("pints").value = cupsToPints(cups);
  document.getElementById("quarts").value = cupsToQuarts(cups);
  document.getElementById("gallons").value = cupsToGallons(cups);
}

function cupsChanged(cups, which) {
  if(!isNumerical(cups)) {
    document.getElementById("validation").innerHTML = "Numerical values required!";
    setAllNan(which);
    return;
  }
  else {
    document.getElementById("validation").innerHTML = "";
  }

  if(which != "cups") { document.getElementById("cups").value = round(cups); }
  if(which != "ounces") { document.getElementById("ounces").value = cupsToOunces(cups); }
  if(which != "pints") { document.getElementById("pints").value = cupsToPints(cups); }
  if(which != "quarts") { document.getElementById("quarts").value = cupsToQuarts(cups); }
  if(which != "gallons") { document.getElementById("gallons").value = cupsToGallons(cups); }

  var liters = cupsToLiters(cups);
  document.getElementById("milliliters").value = litersToMilliliters(liters);
  document.getElementById("liters").value = round(liters);
  document.getElementById("kiloliters").value = litersToKiloliters(liters);
}

function isNumerical(number) {
  return !isNaN(number);
}

function onChanged(which) {
  if(which == "liters") {
    litersChanged(document.getElementById("liters").value, which);
  }
  else if(which == "milliliters") {
    litersChanged(document.getElementById("milliliters").value / 1000.0, which);
  }
  else if(which == "kiloliters") {
    litersChanged(document.getElementById("kiloliters").value * 1000.0, which);
  }
  else if(which == "cups") {
    cupsChanged(document.getElementById("cups").value, which);
  }
  else if(which == "ounces") {
    cupsChanged(document.getElementById("ounces").value / 8.0, which);
  }
  else if(which == "pints") {
    cupsChanged(document.getElementById("pints").value * 2.0, which);
  }
  else if(which == "quarts") {
    cupsChanged(document.getElementById("quarts").value * 4.0, which);
  }
  else if(which == "gallons") {
    cupsChanged(document.getElementById("gallons").value * 16.0, which);
  }
}

function setAllNan(exceptFor){
  var all = ["inches", "feet", "yards", "miles", "millimeters", "centimeters", "meters", "kilometers"];
  for(var k = 0; k < all.length; k++) {
    var current = all[k];
    if(current != exceptFor) {
      document.getElementById(current).value = NaN;
    }
  }
}
