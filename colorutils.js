function setRed() {
   red = document.getElementById("redBox").value;
}

function setGreen() {
   green = document.getElementById("greenBox").value;
}

function setBlue() {
   blue = document.getElementById("blueBox").value;
}

function setRGBFields(rgb) {
   var r = rgb[0];
   var g = rgb[1];
   var b = rgb[2];

   document.getElementById("redBox").value = r;
   document.getElementById("greenBox").value = g;
   document.getElementById("blueBox").value = b;
}

function setHexField(hex) {
   document.getElementById("hexBox").value = hex;
}

function setIntField(int) {
   document.getElementById("intBox").value = int;
}

function setHex() {
   hex = "1";
}

function calculateColor() {
   return 'rgb(' + red + ',' + green + ',' + blue + ')';
};

function isValidHex(candidate) {
   return /^[0-9A-F]{6}$/i.test(candidate)
}

function rgbFromInt(int) {
  var b = int % 256
  var g = ((int - b)/256) % 256
  var r = ((int - b)/256**2) - g/256

  return [r, g, b];
}

function rgbFromHex(hex) {
  var values = hex.split('');

  var r = parseInt(values[0].toString() + values[1].toString(), 16);
  var g = parseInt(values[2].toString() + values[3].toString(), 16);
  var b = parseInt(values[4].toString() + values[5].toString(), 16);

  return [r, g, b];
}

function hexFromRgb(rgb) {
  var r = rgb[0];
  var g = rgb[1];
  var b = rgb[2];

  var redHex = r.toString(16).toUpperCase();
  var greenHex = g.toString(16).toUpperCase();
  var blueHex = b.toString(16).toUpperCase();

  redHex = padZeroes(redHex);
  greenHex = padZeroes(greenHex);
  blueHex = padZeroes(blueHex);

  return redHex + greenHex + blueHex;
}

function intFromRgb(rgb) {
  var r = rgb[0];
  var g = rgb[1];
  var b = rgb[2];

  return ((256**2) * r) + (256 * g) + b;
}

function onIntChanged() {
   var intVal = document.getElementById("intBox").value;


   if(isNaN(intVal)) {
     document.getElementById("validation").innerHTML = "Integer must be a valid base-10 number."
     document.getElementById("errorText").innerHTML = "Error";
     colorPanel.style.fill = 'rgb(255, 255, 255)';
     return false;
   }

   int = parseInt(intVal, 10);

   if(int < 0 || int > 16777215) {
      document.getElementById("validation").innerHTML = "Integer color must be between 0 and 16777215."
      document.getElementById("errorText").innerHTML = "Error";
      colorPanel.style.fill = 'rgb(255, 255, 255)';
      return false;
   }
   else {
      document.getElementById("validation").innerHTML = "";
      document.getElementById("errorText").innerHTML = "";
   }

   var rgb = rgbFromInt(int);
   setRGBFields(rgb);
   setHexField(hexFromRgb(rgb));

   updateColor();
}

function onHexChanged() {
   var hexVal = document.getElementById("hexBox").value;
   hex = hexVal;

   if (hex.charAt(0) === '#') {
      hex = hex.substr(1);
   }

   if(!isValidHex(hex)) {
      document.getElementById("validation").innerHTML = "Invalid hex value."
      document.getElementById("errorText").innerHTML = "Error";
      colorPanel.style.fill = 'rgb(255, 255, 255)';
      return false;
   }
   else if(hex.length != 6) {
      document.getElementById("validation").innerHTML = "Hex color codes must be six characters long."
      document.getElementById("errorText").innerHTML = "Error";
      colorPanel.style.fill = 'rgb(255, 255, 255)';
      return false;
   }
   else {
      document.getElementById("validation").innerHTML = "";
      document.getElementById("errorText").innerHTML = "";
   }

   var rgb = rgbFromHex(hex);
   setRGBFields(rgb);
   setIntField(intFromRgb(rgb));

   updateColor();
};

function onColorValueChanged() {

   var redRaw = document.getElementById("redBox").value;
   var greenRaw = document.getElementById("greenBox").value;
   var blueRaw = document.getElementById("blueBox").value;
   var redVal = parseInt(redRaw, 10);
   var greenVal = parseInt(greenRaw, 10);
   var blueVal = parseInt(blueRaw, 10);

   if(isNaN(redRaw) || isNaN(greenRaw) || isNaN(blueRaw)) {
      document.getElementById("validation").innerHTML = "All RGB values must be valid numbers."
      document.getElementById("errorText").innerHTML = "Error";
      colorPanel.style.fill = 'rgb(255, 255, 255)';
      return false;
   }
   else if(redVal < 0 || redVal > 255 || greenVal < 0 || greenVal > 255 || blueVal < 0 || blueVal > 255) {
      document.getElementById("validation").innerHTML = "All RGB values must be between 0 and 255.";
      document.getElementById("errorText").innerHTML = "Error";
      colorPanel.style.fill = 'rgb(255, 255, 255)';
      return false;
   }
   else {
      document.getElementById("validation").innerHTML = "";
      document.getElementById("errorText").innerHTML = "";
   }

   var rgb = [redVal, greenVal, blueVal];
   setHexField(hexFromRgb(rgb));
   setIntField(intFromRgb(rgb));
   updateColor();
}

function padZeroes(s) {
  if(s.length === 1) {
     return "0" + s;
  }
  else {
    return s;
  }
}

function updateColor() {
   setRed();
   setGreen();
   setBlue();
   colorPanel.style.fill = calculateColor();
};
