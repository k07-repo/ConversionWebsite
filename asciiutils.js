function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

function decimalToBinary(decimal) {
  return decimal.toString(2);
}

function asciiToDecimal(ascii) {
  return ascii.charCodeAt(0);
}

function decimalToAscii(decimal) {
  return String.fromCharCode(decimal);
}

function isValidSpacedBinary(binary) {
  return binary.match("^[ 01]+$");
}

function padZeroes(s) {
  if(s.length < 7) {
    for(var k = 0; k < (7 - s.length); k++) {
      s = "0" + s;
    }
    return s;
  }
  else {
    return s;
  }
}

function convertBinaryString(binaryString) {
  var binaryArray = binaryString.split(" ");
  var result = "";
  for(var index = 0; index < binaryArray.length; index++) {
    var binaryCurrent = binaryArray[index];
    if(binaryCurrent == " " || binaryCurrent == "") {
      continue;
    }
    var decimal = binaryToDecimal(binaryCurrent);
    if(decimal > 127) {
      document.getElementById("validation").innerHTML = "ASCII codes must be less than 128 (seven digits)."
      return false;
    }
    var character = decimalToAscii(binaryToDecimal(binaryCurrent));
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
    var binary = decimalToBinary(decimal);
    result += padZeroes(binary) + " ";
  }
  return result;
}

function onBinaryChanged() {
  var binaryString = document.getElementById("binaryArea").value.trim();
  if(!isValidSpacedBinary(binaryString)) {
    document.getElementById("validation").innerHTML = "Invalid spaced binary string! Valid values: 0, 1, spaces"
    document.getElementById("asciiArea").value = "Error";
    return false;
  }
  else {
    document.getElementById("validation").innerHTML = "";
  }

  var result = convertBinaryString(binaryString);
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
    document.getElementById("binaryArea").value = "Error";
    return;
  }
  else {
    document.getElementById("binaryArea").value = convertAsciiString(asciiString);
    document.getElementById("validation").innerHTML = "";
  }
}
