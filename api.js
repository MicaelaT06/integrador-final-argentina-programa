// API

var request1 = new XMLHttpRequest();
request1.open("GET", "https://reqres.in/api/users/3", true);
request1.onload = function () {
var response = JSON.parse(request1.responseText);
var micaContactDiv = document.getElementById("1-contact");
micaContactDiv.innerHTML =
    "<p>Nombre: " +
    response.data.first_name +
    " " +
    "</p>" +
    "<p>Email: " +
    response.data.email +
    "</p>";
};
request1.send();

var request2 = new XMLHttpRequest();
request2.open("GET", "https://reqres.in/api/users/4", true);
request2.onload = function () {
var response = JSON.parse(request2.responseText);
var micaContactDiv = document.getElementById("2-contact");
micaContactDiv.innerHTML =
    "<p>Nombre: " +
    response.data.first_name +
    " " +
    "</p>" +
    "<p>Email: " +
    response.data.email +
    "</p>";
};
request2.send();