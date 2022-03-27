import { request5 } from './main.js'
//______________________________________________________________
//get data and store it in result two

let my_list = request5();

document.getElementById("previous").onclick = function () {
    location.href = "result4.html";
}

document.getElementById("name13").innerHTML = my_list[0][0];
document.getElementById("price13").innerHTML = "Price: " + my_list[0][1];
document.getElementById("condition13").innerHTML = "Condition: " + my_list[0][2];
document.getElementById("pic13").src = my_list[0][3];
document.getElementById("buy13").onclick = function () {
    location.href = my_list[0][4];
}

document.getElementById("name14").innerHTML = my_list[1][0];
document.getElementById("price14").innerHTML = "Price: " + my_list[1][1];
document.getElementById("condition14").innerHTML = "Condition: " + my_list[0][2];
document.getElementById("pic14").src = my_list[1][3];
document.getElementById("buy14").onclick = function () {
    location.href = my_list[1][4];
}


document.getElementById("name15").innerHTML = my_list[2][0]
document.getElementById("price15").innerHTML = "Price: " + my_list[2][1];
document.getElementById("condition15").innerHTML = "Condition: " + my_list[2][2];
document.getElementById("pic15").src = my_list[2][3];
document.getElementById("buy15").onclick = function () {
    location.href = my_list[2][4];
}