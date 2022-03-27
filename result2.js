
import {request2} from './main.js'
//______________________________________________________________
//get data and store it in result two

let my_list = request2();

document.getElementById("next").onclick = function () {
    location.href = "result3.html"
}
document.getElementById("previous").onclick = function () {
    location.href = "result1.html"
}

document.getElementById("name4").innerHTML = my_list[0][0];
document.getElementById("price4").innerHTML = "Price: " + my_list[0][1];
document.getElementById("condition4").innerHTML = "Condition: " + my_list[0][2];
document.getElementById("pic4").src= my_list[0][3];
document.getElementById("buy4").onclick = function () {
    location.href = my_list[0][4]
}


document.getElementById("name5").innerHTML = my_list[1][0];
document.getElementById("price5").innerHTML = "Price: " + my_list[1][1];
document.getElementById("condition5").innerHTML = "Condition: " + my_list[0][2];
document.getElementById("pic5").src = my_list[1][3];
document.getElementById("buy5").onclick = function () {
    location.href = my_list[1][4]
}


document.getElementById("name6").innerHTML = my_list[2][0]
document.getElementById("price6").innerHTML = "Price: " + my_list[2][1];
document.getElementById("condition6").innerHTML = "Condition: " + my_list[2][2];
document.getElementById("pic6").src = my_list[2][3]
document.getElementById("buy6").onclick = function (){
    location.href = my_list[2][4]
}

