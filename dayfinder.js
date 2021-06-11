//Arrys to work with:
    weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    var day = document.getElementById("day");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var gender = document.getElementById("gender").value;
    function sendData(){
    var dayOfMonth=parseInt(day.value.replace(/\s+/g, ''));
    var monthOfYear=parseInt(month.value.replace(/\s+/g, ''));
    var yearOfBirth=parseInt(year.value.replace(/\s+/g, ''));
    

            document.getElementById('para').innerHTML=dayOfMonth+" "+monthOfYear+" "+yearOfBirth+" "+gender;
        // if(dayOfMonth=''){
        //     document.getElementById("dayHelp").innerHTML=;
        // }
        // else if(monthOfYear=''){
        //     document.getElementById("monthHelp").innerHTML=;
        // }
        // else if(c=''){
        //     document.getElementById("yearHelp").innerHTML=c;
        // }

    }