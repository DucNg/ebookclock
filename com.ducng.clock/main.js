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
    const date = new Date();

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
