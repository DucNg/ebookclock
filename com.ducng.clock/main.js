// Kindle time is set to UTC+0 but the Kindle UI somewhat apply a timezone over that
// To get the correct time in JS, we need to manually apply timezone
const TIMEZONE = 2;
const timezoneInMilliseconds = TIMEZONE * 3600 * 1000;

const appName = "com.ducng.clock"

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];

const space = " "

const hoursElm = document.getElementById("hours");
const minutesElm = document.getElementById("minutes");

const dateElm = document.getElementById("date");

// Small helper function to call runAsDefaultStatusBar
function pillowRun(fkt, callback) {
    pillowHelper.Run('default_status_bar', appName, fkt, callback);
}

function setDate() {
    // Manually apply timezone
    const date = new Date(Date.now() + timezoneInMilliseconds);

    hoursElm.innerHTML = date.getHours();

    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    minutesElm.innerHTML = minutes;

    var dayStr = days[date.getDay()];
    const monthStr = months[date.getMonth()];
    const dateStr = dayStr + space + date.getDate() + space + monthStr + space + date.getFullYear();
    dateElm.innerHTML = dateStr;
}

try {
    setDate();
    setInterval(setDate, 60000);
    
    // pillowRun("nativeBridge.hideMe();");
} catch (e) {
    const errorDiv = document.createElement("div");

    errorDiv.innerHTML = e;
    document.body.appendChild(errorDiv);
}
