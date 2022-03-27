let searched = "";

document.getElementById("dark_field").oninput = function() {
    searched = document.getElementById("dark_field").value;
}

document.getElementById("searchButton").onclick = function () {
    console.log("clicked");
}