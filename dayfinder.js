var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

function getData(e) {

    e.preventDefault();
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    var gender = document.getElementById("gender").value;

    var date = new Date(month + "," + day + "," + year);

    if (parseInt(day) > 31 || parseInt(day) < 1) {
        alert("Wrong input date!");
    }
    else if (parseInt(day) == 29 && parseInt(month) == 2 && parseInt(year) % 4 == 0 && gender == "female") {
        alert("Your Akan " + gender + " name is " + female[date.getDay()] + " and you were born on a " + weekDay[date.getDay()]);
        document.getElementById("form").reset();
    }
    else if (parseInt(day) == 29 && parseInt(month) == 2 && parseInt(year) % 4 == 0 && gender == "male") {
        alert("Your Akan " + gender + " name is " + male[date.getDay()] + " and you were born on a " + weekDay[date.getDay()]);
    }
    else if (parseInt(day) > 28 && parseInt(month) == 2) {
        alert("Incorrect date for month you entered!");
    }
    else if (parseInt(month) === 4 || parseInt(month) === 6 || parseInt(month) == 9 || parseInt(month) == 11 && parseInt(day) > 30) {
        alert("Innocorrect day for thr month provided!");
    }
    else if (parseInt(month) > 12 || parseInt(month) < 1) {
        alert("Wrong input Month");
    }
    else if (parseInt(year) < 1800 || parseInt(year) > 2021) {
        alert("The year you entered is out of range");
    }
    else if (gender == "male") {
        alert("Your Akan " + gender + " name is " + male[date.getDay()] + " and you were born on a " + weekDay[date.getDay()]);
    }

    else if (gender == "female") {
        alert("Your Akan " + gender + " name is " + female[date.getDay()] + " and you were born on a " + weekDay[date.getDay()]);
    }
    document.getElementById("form").reset();

}