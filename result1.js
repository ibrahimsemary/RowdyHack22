import { request1 } from './main.js'
//______________________________________________________________
//get data and store it in result two

let my_list = request1();

document.getElementById("next").onclick = function () {
    location.href = "result2.html";
}

document.getElementById("name1").innerHTML = my_list[0][0];
document.getElementById("price1").innerHTML = "Price: " + my_list[0][1];
document.getElementById("condition1").innerHTML = "Condition: " + my_list[0][2];
document.getElementById("pic1").src = my_list[0][3];
document.getElementById("buy1").onclick = function () {
    location.href = my_list[0][4];
}

document.getElementById("name2").innerHTML = my_list[1][0];
document.getElementById("price2").innerHTML = "Price: " + my_list[1][1];
document.getElementById("condition2").innerHTML = "Condition: " + my_list[0][2];
document.getElementById("pic2").src = my_list[1][3];
document.getElementById("buy2").onclick = function () {
    location.href = my_list[1][4];
}


document.getElementById("name3").innerHTML = my_list[2][0]
document.getElementById("price3").innerHTML = "Price: " + my_list[2][1];
document.getElementById("condition3").innerHTML = "Condition: " + my_list[2][2];
document.getElementById("pic3").src = my_list[2][3];
document.getElementById("buy3").onclick = function () {
    location.href = my_list[2][4];
}