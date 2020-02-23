function unixToUtc(unixStamp) {
    dateObj = new Date(unixStamp * 1000);
    return dateObj.toUTCString();
}

function unixToLocal(unixStamp) {
    dateObj = new Date(unixStamp * 1000);
    return dateObj.toLocaleString();
}

function onUnixBoxChanged() {
   var unixVal = parseInt(document.getElementById("unixBox").value, 10);
   if(isNaN(unixVal)) {
      document.getElementById("validation").innerHTML = "Unix Timestamp value must be a valid number."
      document.getElementById("utctime").innerHTML = "";
      document.getElementById("localtime").innerHTML = "";
      return false;
   }

   else {
      document.getElementById("validation").innerHTML = "";
   }

   var utcString = unixToUtc(unixVal);
   document.getElementById("utctime").innerHTML = utcString;
   var localString = unixToLocal(unixVal);
   document.getElementById("localtime").innerHTML = localString;
}

function onTimeChanged() {
   var date = new Date();

   var dateString = document.getElementById("datepicker").value;
   var values = dateString.split('/');

   date.setUTCMonth(values[0] - 1); //0 is January, 1 is February, etc.
   date.setUTCDate(values[1]);
   date.setUTCFullYear(values[2]);

   var hours = document.getElementById("hours").value;
   var minutes = document.getElementById("minutes").value;
   var seconds = document.getElementById("seconds").value;

   date.setUTCHours(hours);
   date.setUTCMinutes(minutes);
   date.setUTCSeconds(seconds);

   document.getElementById("userdate").innerHTML = date.toUTCString();
   document.getElementById("timestamp").innerHTML = Math.trunc(date.getTime() / 1000);
}
