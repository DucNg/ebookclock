const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]


function date() {
    const hoursElm = document.getElementById("hours");
    const minutesElm = document.getElementById("minutes");

    const dateElm = document.getElementById("date");

    const date = new Date();

    hoursElm.innerHTML = date.getHours();

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    minutesElm.innerHTML = minutes;

    let dayStr = new Intl.DateTimeFormat("fr-FR", {weekday: "long"}).format(date);
    dayStr = dayStr[0].toUpperCase() + dayStr.slice(1);
    const monthStr = new Intl.DateTimeFormat("fr-FR", {month: "long"}).format(date);
    const dateStr = `${dayStr} ${date.getDate()} ${monthStr} ${date.getFullYear()}`;
    dateElm.innerHTML = dateStr;
}

date()
setInterval(date, 1000);
