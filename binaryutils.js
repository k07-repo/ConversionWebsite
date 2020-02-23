function binaryToDecimal(binary) {
   return parseInt(binary, 2);
}

function hexToDecimal(hex) {
   return parseInt(hex, 16);
}

function decimalToBinary(decimal) {
  return decimal.toString(2);
}

function decimalToHex(decimal) {
  return decimal.toString(16).toUpperCase();
}

function isValidBinary(binary) {
  return binary.match("^[01]+$");
}

function isValidDecimal(decimal) {
  return decimal.match("^[0123456789]+$");
}

function isValidHex(hex) {
  return hex.match("^[0123456789ABCDEFabcdef]+$");
}

function onBinaryChanged() {
   var binaryValue = document.getElementById("binaryBox").value;

   if(!isValidBinary(binaryValue)) {
      document.getElementById("validation").innerHTML = "Binary value is not a valid binary number! (Allowed digits: 0 and 1)";
      document.getElementById("decimalBox").value = NaN;
      document.getElementById("hexBox").value = NaN;
      return;
   }
   else {
      document.getElementById("validation").innerHTML = "";
   }

   var decimalValue = binaryToDecimal(binaryValue);
   if(decimalValue > 9007199254740991) {
     document.getElementById("validation").innerHTML = "Input too high! Maximum value (decimal): 9007199254740991";
     document.getElementById("decimalBox").value = NaN;
     document.getElementById("hexBox").value = NaN;
     return;
   }

   var hexValue = decimalToHex(decimalValue);
   document.getElementById("decimalBox").value = decimalValue;
   document.getElementById("hexBox").value = hexValue;
}

function onDecimalChanged() {
   var decimalValue = document.getElementById("decimalBox").value;
   if(!isValidDecimal(decimalValue)) {
      document.getElementById("validation").innerHTML = "Decimal value is not a valid decimal number! (Allowed digits: 0-9)";
      document.getElementById("binaryBox").value = NaN;
      document.getElementById("hexBox").value = NaN;
      return;
   }
   else {
      document.getElementById("validation").innerHTML = "";
   }

   var decimalNum = parseInt(decimalValue, 10);
   if(decimalNum > 9007199254740991) {
     document.getElementById("validation").innerHTML = "Input too high! Maximum value (decimal): 9007199254740991";
     document.getElementById("binaryBox").value = NaN;
     document.getElementById("hexBox").value = NaN;
     return;
   }

   var binaryValue = decimalToBinary(decimalNum);
   var hexValue = decimalToHex(decimalNum);
   document.getElementById("binaryBox").value = binaryValue;
   document.getElementById("hexBox").value = hexValue;
}

function onHexChanged() {
   var hexValue = document.getElementById("hexBox").value;

   if(!isValidHex(hexValue)) {
      document.getElementById("validation").innerHTML = "Hexadecimal value is not a valid hexadecimal number! (Allowed digits: 0-9, A-F)";
      document.getElementById("binaryBox").value = NaN;
      document.getElementById("decimalBox").value = NaN;
      return;
   }
   else {
      document.getElementById("validation").innerHTML = "";
   }

   var decimalValue = hexToDecimal(hexValue);
   if(decimalValue > 9007199254740991) {
     document.getElementById("validation").innerHTML = "Input too high! Maximum value (decimal): 9007199254740991";
     document.getElementById("binaryBox").value = NaN;
     document.getElementById("decimalBox").value = NaN;
     return;
   }

   var binaryValue = decimalToBinary(decimalValue);
   document.getElementById("binaryBox").value = binaryValue;
   document.getElementById("decimalBox").value = decimalValue;
}
