var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

function getData(e) {

    var male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    var gender = document.getElementById("gender").value;

    var date = new Date(year, month, day);
    if (gender == "male") {
        alert("Your Ghanian name is " + male[date.getDay()] + "and you were born on a " + weekDay[date.getDay()]);
    }
    else if (gender == "female") {
        alert("Your Ghanian name is " + female[date.getDay()] + " and you were born on a " + weekDay[date.getDay()]);
    }
}