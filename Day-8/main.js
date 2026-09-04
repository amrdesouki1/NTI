import { createElement, showMessage } from "./helper.js";

let result = document.getElementById("result");

//  Create Custom Module

showMessage("Custom Module is working");


//  GET

document.getElementById("getBtn").addEventListener("click", function () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.onload = function () {

        if (xhr.status === 200) {

            let users = JSON.parse(xhr.responseText);

            result.innerHTML = "";

            users.forEach(function (user) {

                let p = createElement(
                    "p",
                    user.id + " - " + user.name + " - " + user.email
                );

                result.appendChild(p);

            });

            showMessage("Users loaded successfully");

        }

    };

    xhr.send();

});


//  - POST

document.getElementById("postBtn").addEventListener("click", function () {

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/users");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {

        if (xhr.status === 201) {

            let user = JSON.parse(xhr.responseText);

            result.innerHTML = "";

            let p = createElement(
                "p",
                "Added User: " + user.name
            );

            result.appendChild(p);

            showMessage("User added successfully");

        }

    };

    let newUser = {
        name: "Amr Desouki",
        username: "amr123",
        email: "amr@gmail.com"
    };

    xhr.send(JSON.stringify(newUser));

});


// PUT

document.getElementById("putBtn").addEventListener("click", function () {

    let xhr = new XMLHttpRequest();

    xhr.open(
        "PUT",
        "https://jsonplaceholder.typicode.com/users/1"
    );

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {

        if (xhr.status === 200) {

            let user = JSON.parse(xhr.responseText);

            result.innerHTML = "";

            let p = createElement(
                "p",
                "Updated User: " + user.name
            );

            result.appendChild(p);

            showMessage("User updated successfully");

        }

    };

    let updatedUser = {
        name: "Amr Updated",
        username: "amr2026",
        email: "amr2026@gmail.com"
    };

    xhr.send(JSON.stringify(updatedUser));

});


//  DELETE

document.getElementById("deleteBtn").addEventListener("click", function () {

    let xhr = new XMLHttpRequest();

    xhr.open(
        "DELETE",
        "https://jsonplaceholder.typicode.com/users/1"
    );

    xhr.onload = function () {

        if (xhr.status === 200) {

            result.innerHTML = "";

            let p = createElement(
                "p",
                "User Deleted Successfully"
            );

            result.appendChild(p);

            showMessage("User deleted successfully");

        }

    };

    xhr.send();

});