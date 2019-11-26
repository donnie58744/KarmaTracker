// Varibles
var getKarma = document.getElementById("karmaCounter");
var getTitle = document.getElementById("title");
var karmaStatus = document.getElementById("karmaStatus");
var shoppingList = document.getElementById("shoppingList");
var titleColors = document.getElementById("titleColors");
var counterColors = document.getElementById("counterColors");

var shoppingListToggle = 0;
var titleColorToggle = 0;
var counterColorToggle = 0;

function load() {
    // Load Amount Of Karma
    getKarma.value = localStorage.getItem("karma");
    getKarma.innerHTML = getKarma.value;

    // Load Counter Color
    getKarma.style.color = localStorage.getItem("counterColor");

    //Load Title Color
    getTitle.style.color = localStorage.getItem("titleColor");

    // Upadte Karma Circle
    updateColorStatus();

    // Get The Current Bought Colors
    getBoughtColors();
}

function updateColorStatus() {
    //Update The Karma Circle Color
    if (getKarma.value < 0) {
        karmaStatus.style.backgroundColor = "red";
    } else if (getKarma.value == 0 || getKarma.innerHTML < 30) {
        karmaStatus.style.backgroundColor = "yellow";
    } else if (getKarma.value == 30 || getKarma.innerHTML > 30) {
        karmaStatus.style.backgroundColor = "green";
    }
}

function getBoughtColors() {
    // Load Color State Values
    getBlue = localStorage.getItem("blueState");
    getPurple = localStorage.getItem("purpleState");
    getOrange = localStorage.getItem("orangeState");
    getGreen = localStorage.getItem("greenState");

    // Get The Colors Classname
    blue = document.getElementsByClassName("blueButton");
    purple = document.getElementsByClassName("purpleButton");
    orange = document.getElementsByClassName("orangeButton");
    green = document.getElementsByClassName("greenButton");

    // If Color is already bought then set the cost to 0
    if (getBlue == "unlocked") {
        for (var i = 0; i < blue.length; i++) {
            blue[i].innerHTML = "Blue";
            blue[i].value = 0;
        }
    }

    if (getPurple == "unlocked") {
        for (var i = 0; i < purple.length; i++) {
            purple[i].innerHTML = "Purple";
            purple[i].value = 0;
        }
    }

    if (getOrange == "unlocked") {
        for (var i = 0; i < orange.length; i++) {
            orange[i].innerHTML = "Orange";
            orange[i].value = 0;
        }
    }

    if (getGreen == "unlocked") {
        for (var i = 0; i < green.length; i++) {
            green[i].innerHTML = "Green";
            green[i].value = 0;
        }
    }

    // Check If Color Isnt Bought
    if (getBlue == "locked") {
        for (var i = 0; i < blue.length; i++) {
            blue[i].innerHTML = "Blue - 150";
            blue[i].value = 150;
        }
    }

    if (getPurple == "locked") {
        for (var i = 0; i < purple.length; i++) {
            purple[i].innerHTML = "Purple - 200";
            purple[i].value = 200;
        }
    }

    if (getOrange == "locked") {
        for (var i = 0; i < orange.length; i++) {
            orange[i].innerHTML = "Orange - 250";
            orange[i].value = 250;
        }
    }

    if (getGreen == "locked") {
        for (var i = 0; i < green.length; i++) {
            green[i].innerHTML = "Green - 250";
            green[i].value = 250;
        }
    }
}

function save() {
    // Save Values To Local Machine
    localStorage.setItem("karma", getKarma.value);
    localStorage.setItem("titleColor", getTitle.style.color);
    localStorage.setItem("counterColor", getKarma.style.color);
}

function add() {
    getKarma.value++;
    save();
    load();
}

function minus() {
    getKarma.value--;
    save();
    load();
}

function reset() {
    var promptCheck = prompt("Are you sure you want to reset y/n");
    if (promptCheck == "y") {
        localStorage.setItem('karma', 0);
        localStorage.setItem("titleColor", "white");

        localStorage.setItem("blueState", "locked");
        localStorage.setItem("purpleState", "locked");
        localStorage.setItem("orangeState", "locked");
        localStorage.setItem("greenState", "locked");
        load();
    } else {
        //Do Nothing
    }
}

function showShopping() {
    shoppingListToggle += 1;
    console.log(shoppingListToggle);
    if (shoppingListToggle == 1) {
        shoppingList.style.visibility = "visible";
    } else if (shoppingListToggle == 2) {
        shoppingList.style.visibility = "hidden";
        shoppingListToggle = 0;
        titleColors.style.display = "none";
        counterColors.style.display = "none";
        titleColorToggle = 0;
        counterColorToggle = 0;
    }
}

function showTitleColors() {
    titleColorToggle += 1;
    console.log(titleColorToggle);
    if (titleColorToggle == 1) {
        document.getElementById("titleColors").style.display = "block";
    } else if (titleColorToggle == 2) {
        document.getElementById("titleColors").style.display = "none";
        titleColorToggle = 0;
    }
}

function showCounterColors() {
    counterColorToggle += 1;
    console.log(counterColorToggle);
    if (counterColorToggle == 1) {
        document.getElementById("counterColors").style.display = "block";
    } else if (counterColorToggle == 2) {
        document.getElementById("counterColors").style.display = "none";
        counterColorToggle = 0;
    }
}

function buy(colorID, colorCost, colorName, state, element) {

    colorCostInt = parseInt(colorCost, 10);
    console.log(element);

    // Remove The Amount Of Karma
    if (getKarma.value >= colorCostInt) {
        getKarma.value -= colorCostInt;

        // Change Title Color
        if (element == "title") {
            if (colorID == 'rainbow') {
                alert('Rainbow');
            } else {
                getTitle.style.color = colorID;
            }
        }

        //Change Counter Color
        if (element == "counter") {
            if (colorID == 'rainbow') {
                alert('Rainbow');
            } else {
                getKarma.style.color = colorID;
            }
        }

        // Save Bought Colors
        if (colorName == "Blue") {
            localStorage.setItem("blueState", "unlocked");
        }

        if (colorName == "Purple") {
            localStorage.setItem("purpleState", "unlocked");
        }

        if (colorName == "Orange") {
            localStorage.setItem("orangeState", "unlocked");
        }

        if (colorName == "Green") {
            localStorage.setItem("greenState", "unlocked");
        }
    }

    // If not enough karma then alert "Not Enough"
    else {
        alert('Not Enough');
    }

    // Save and Load
    save();
    load();
}
