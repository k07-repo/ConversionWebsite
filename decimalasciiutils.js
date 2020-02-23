function asciiToDecimal(ascii) {
  return ascii.charCodeAt(0);
}

function decimalToAscii(decimal) {
  return String.fromCharCode(decimal);
}

function isValidSpacedDecimal(decimal) {
  return decimal.match("^[ 0123456789]+$");
}

function convertDecimalString(decimalString) {
  var decimalArray = decimalString.split(" ");
  var result = "";
  for(var index = 0; index < decimalArray.length; index++) {
    var decimalCurrent = decimalArray[index];
    if(decimalCurrent == " " || decimalCurrent == "") {
      continue;
    }
    if(decimalCurrent > 127) {
      document.getElementById("validation").innerHTML = "ASCII codes must be less than 128."
      return false;
    }
    var character = decimalToAscii(decimalCurrent);
    result += character;
  }
  return result;
}

function convertAsciiString(asciiString) {
  var asciiArray = asciiString.split("");
  var result = "";
  for(var index = 0; index < asciiArray.length; index++) {
    var asciiCurrent = asciiArray[index];
    var decimal = asciiToDecimal(asciiCurrent);
    if(decimal > 127) {
      document.getElementById("validation").innerHTML = "The input contains a non-ASCII character: " + asciiCurrent;
      return false;
    }
    result += decimal + " ";
  }
  return result;
}

function onDecimalChanged() {
  var decimalString = document.getElementById("decimalArea").value.trim();
  if(!isValidSpacedDecimal(decimalString)) {
    document.getElementById("validation").innerHTML = "Invalid spaced decimal string! Only numerical characters and spaces are allowed."
    document.getElementById("asciiArea").value = "Error";
    return false;
  }
  else {
    document.getElementById("validation").innerHTML = "";
  }

  var result = convertDecimalString(decimalString);
  if(!result) {
    document.getElementById("asciiArea").value = "Error";
    return;
  }
  else {
    document.getElementById("asciiArea").value = result;
  }
}

function onAsciiChanged() {
  var asciiString = document.getElementById("asciiArea").value;

  var result = convertAsciiString(asciiString);
  if(!result) {
    document.getElementById("decimalArea").value = "Error";
    return;
  }
  else {
    document.getElementById("decimalArea").value = convertAsciiString(asciiString);
    document.getElementById("validation").innerHTML = "";
  }
}
