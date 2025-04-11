const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];


function date() {
    const hoursElm = document.getElementById("hours");
    const minutesElm = document.getElementById("minutes");

    const dateElm = document.getElementById("date");

    const date = new Date();

    hoursElm.innerHTML = date.getHours();

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    minutesElm.innerHTML = minutes;

    let dayStr = days[date.getDay()];
    const monthStr = months[date.getMonth()];
    const dateStr = `${dayStr} ${date.getDate()} ${monthStr} ${date.getFullYear()}`;
    dateElm.innerHTML = dateStr;
}

date();
setInterval(date, 60000);
