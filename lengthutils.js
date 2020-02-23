function round(number) {
  if(number > 10000000000000) {
    return NaN;
  }
  return Math.round((number + Number.EPSILON) * 10000000) / 10000000
}

function metersToMillimeters(meters) {
  return round(meters * 1000);
}
function metersToCentimeters(meters) {
  return round(meters * 100);
}
function metersToKilometers(meters) {
  return round(meters / 1000);
}

function metersToFeet(meters) {
  return round(meters * 3.280839895);
}
function feetToMeters(feet) {
  return round(feet / 3.280839895);
}

function feetToInches(feet) {
  return round(feet * 12);
}
function feetToYards(feet) {
  return round(feet / 3);
}
function feetToMiles(feet) {
  return round(feet / 5280);
}

function metersChanged(meters, which) {
  if(!isNumerical(meters)) {
    document.getElementById("validation").innerHTML = "Numerical values required!";
    setAllNan(which);
    return;
  }
  else {
    document.getElementById("validation").innerHTML = "";
  }
  if(which != "millimeters") { document.getElementById("millimeters").value = metersToMillimeters(meters); }
  if(which != "centimeters") { document.getElementById("centimeters").value = metersToCentimeters(meters); }
  if(which != "meters") { document.getElementById("meters").value = round(meters); }
  if(which != "kilometers") { document.getElementById("kilometers").value = metersToKilometers(meters); }

  var feet = metersToFeet(meters);

  document.getElementById("inches").value = feetToInches(feet);
  document.getElementById("feet").value = round(feet);
  document.getElementById("yards").value = feetToYards(feet);
  document.getElementById("miles").value = feetToMiles(feet);
}

function feetChanged(feet, which) {
  if(!isNumerical(feet)) {
    document.getElementById("validation").innerHTML = "Numerical values required!";
    setAllNan(which);
    return;
  }
  else {
    document.getElementById("validation").innerHTML = "";
  }
  if(which != "feet") { document.getElementById("feet").value = round(feet); }
  if(which != "inches") { document.getElementById("inches").value = feetToInches(feet); }
  if(which != "yards") { document.getElementById("yards").value = feetToYards(feet); }
  if(which != "miles") { document.getElementById("miles").value = feetToMiles(feet); }

  var meters = feetToMeters(feet);
  document.getElementById("millimeters").value = metersToMillimeters(meters);
  document.getElementById("centimeters").value = metersToCentimeters(meters);
  document.getElementById("meters").value = round(meters);
  document.getElementById("kilometers").value = metersToKilometers(meters);
}

function isNumerical(number) {
  return !isNaN(number);
}

function onChanged(which) {
  if(which == "meters") {
    metersChanged(document.getElementById("meters").value, which);
  }
  else if(which == "millimeters") {
    metersChanged(document.getElementById("millimeters").value / 1000.0, which);
  }
  else if(which == "centimeters") {
    metersChanged(document.getElementById("centimeters").value / 100.0, which);
  }
  else if(which == "kilometers") {
    metersChanged(document.getElementById("kilometers").value * 1000.0, which);
  }
  else if(which == "feet") {
    feetChanged(document.getElementById("feet").value, which);
  }
  else if(which == "inches") {
    feetChanged(document.getElementById("inches").value / 12.0, which);
  }
  else if(which == "yards") {
    feetChanged(document.getElementById("yards").value * 3.0, which);
  }
  else if(which == "miles") {
    feetChanged(document.getElementById("miles").value * 5280, which);
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
