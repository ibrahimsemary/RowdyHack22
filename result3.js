import { request3 } from './loading.js'
//______________________________________________________________
//get data and store it in result two

let my_list = request3();

document.getElementById("next").onclick = function () {
    location.href = "result4.html"
}
document.getElementById("previous").onclick = function () {
    location.href = "result2.html"
}

document.getElementById("name7").innerHTML = my_list[0][0];
document.getElementById("price7").innerHTML = "Price: " + my_list[0][1];
document.getElementById("condition7").innerHTML = "Condition: " + my_list[0][2];
document.getElementById("pic7").src = my_list[0][3];
document.getElementById("buy7").onclick = function () {
    location.href = my_list[0][4];
}

document.getElementById("name8").innerHTML = my_list[1][0];
document.getElementById("price8").innerHTML = "Price: " + my_list[1][1];
document.getElementById("condition8").innerHTML = "Condition: " + my_list[0][2];
document.getElementById("pic8").src = my_list[1][3];
document.getElementById("buy8").onclick = function () {
    location.href = my_list[1][4];
}


document.getElementById("name9").innerHTML = my_list[2][0]
document.getElementById("price9").innerHTML = "Price: " + my_list[2][1];
document.getElementById("condition9").innerHTML = "Condition: " + my_list[2][2];
document.getElementById("pic9").src = my_list[2][3];
document.getElementById("buy9").onclick = function () {
    location.href = my_list[2][4];
}