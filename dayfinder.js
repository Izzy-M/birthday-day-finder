//Arrys to work with:
weekDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var male=['Kwasi','Kwadwo', 'Kwabena', 'Kwaku','Yaw','Kofi','Kwame'];
var female=['Akosua', 'Adwoa', 'Abenaa','Akua' ,'Yaa' ,'Afua','Ama'];

var day=trim(document.getElementById("day").value);
var month=trim(document.getElementById("month").value);
var year=trim(document.getElementById("year").value);
var gender=document.getElementById("gender").value;

function dayValidate(){
    let date=parseInt(day);
    if(date==''){
        document.getElementById("dayHelp").innerHTML="The input is empty";
        document.getElementById("day").style.outlineColor="red";
    }
    else if(date.typeof == number){
        document.getElementById("dayHelp").innerHTML="Enter a valid date!";
        document.getElementById("day").style.outlineColor="red";
    }
}
