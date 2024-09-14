function countrycoed(){
    var coed=document.getElementById("cc").value
    if(coed== 92)
    {alert("Pakistani")}
    else 
    {alert("Not Pakistani")}
}

function mobilecoed(){
    var ch=document.getElementById("mc").value
    if(ch>="0300" && ch<="0309")
    { alert("Jazz")}

     else if(ch>="0310" && ch<="0319")
        {alert("zong")} 

        else if(ch>="0320" && ch<="0329")
        {alert("Warid")} 

        else if(ch>="0330" && ch<="0339")
        {alert("Uphone")} 

        else if(ch>="0340" && ch<="0349")
        {alert("Telenor")} 
    
    else 
    {alert("not found")}
}


function enteryear(){
    var year=document.getElementById("y").value
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        alert(year + ' is a leap year');
    }
     else {
        alert(year + ' is not a leap year');
    }
}


function evenorodd(){
var number=document.getElementById("eo").value
if(number % 2 == 0) {
    alert("The number is even.");
}
// if the number is odd
else {
    alert("The number is odd.");
}
}

function empty(){
    var num=document.getElementById("eb").value
    if (num=="") {
        alert("This feild is required")
    }
    if(num=Text){
        alert("Done")
    }
}