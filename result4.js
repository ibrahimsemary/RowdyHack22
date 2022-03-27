import { request4 } from './loading.js'
//______________________________________________________________
//get data and store it in result two

let my_list = request4();

document.getElementById("next").onclick = function () {
    location.href = "result5.html"
}
document.getElementById("previous").onclick = function () {
    location.href = "result3.html"
}

document.getElementById("name10").innerHTML = my_list[0][0];
document.getElementById("price10").innerHTML = "Price: " + my_list[0][1];
document.getElementById("condition10").innerHTML = "Condition: " + my_list[0][2];
document.getElementById("pic10").src = my_list[0][3];
document.getElementById("buy10").onclick = function () {
    location.href = my_list[0][4];
}

document.getElementById("name11").innerHTML = my_list[1][0];
document.getElementById("price11").innerHTML = "Price: " + my_list[1][1];
document.getElementById("condition11").innerHTML = "Condition: " + my_list[0][2];
document.getElementById("pic11").src = my_list[1][3];
document.getElementById("buy11").onclick = function () {
    location.href = my_list[1][4];
}


document.getElementById("name12").innerHTML = my_list[2][0]
document.getElementById("price12").innerHTML = "Price: " + my_list[2][1];
document.getElementById("condition12").innerHTML = "Condition: " + my_list[2][2];
document.getElementById("pic12").src = my_list[2][3];
document.getElementById("buy12").onclick = function () {
    location.href = my_list[2][4];
}