var myImage = document.querySelector("img");
myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/stadia-logo.png") {
        myImage.setAttribute("src", "images/stadia-logo2.jpg");
    }
    else {
        myImage.setAttribute("src", "images/stadia-logo.png");
    }
}



var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to the Google Stadia presentation, " + myName;
}



if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome to the Google Stadia presentation, " + storedName;  
}

