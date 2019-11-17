// Varibles
var getKarma = document.getElementById("karmaCounter");
var getTitle = document.getElementById("title");
var karmaStatus = document.getElementById("karmaStatus");
var shoppingList = document.getElementById("shoppingList");
var colorOptions = document.getElementById("colorOptions");

var sListOF = 0;
var cOptions = 0;

function load() {
  // Load Amount Of Karma
  getKarma.value = localStorage.getItem("karma");
  getKarma.innerHTML = getKarma.value;

  //Load Title Color
  getTitle.style.color = localStorage.getItem("titleColor");

  // Upadte Karma Circle
  updateColorStatus();

  // Get The Current Bought Colors
  getBoughtColors();
}

function updateColorStatus() {
  if (getKarma.value < 0) {
    karmaStatus.style.backgroundColor = "red";
  }

  else if (getKarma.value == 0 || getKarma.innerHTML < 30) {
    karmaStatus.style.backgroundColor = "yellow";
  }

  else if (getKarma.value == 30 || getKarma.innerHTML > 30) {
    karmaStatus.style.backgroundColor = "green";
  }
}

function getBoughtColors() {
  // Load Color State Values
  getBlue = localStorage.getItem("blueState");
  getPurple = localStorage.getItem("purpleState");
  getOrange = localStorage.getItem("orangeState");
  getGreen = localStorage.getItem("greenState");

  // Get The Colors ID
  blue = document.getElementById("#2e7eff");
  purple = document.getElementById("#cf82ff");
  orange = document.getElementById("orange");
  green = document.getElementById("#63ff52");

  // If Color is already bought then set the cost to 0
  if (getBlue == "unlocked") {
    blue.innerHTML = "Blue";
    blue.value = 0;
  }

  if (getPurple == "unlocked") {
    purple.innerHTML = "Purple";
    purple.value = 0;
  }

  if (getOrange == "unlocked") {
    orange.innerHTML = "Orange";
    orange.value = 0;
  }

  if (getGreen == "unlocked") {
    green.innerHTML = "Green";
    green.value = 0;
  }
}

function save() {
  // Save Values To Local Machine
  localStorage.setItem("karma", getKarma.value);
  localStorage.setItem("titleColor", getTitle.style.color);
}

function add() {
  getKarma.value ++;
  save();
  load();
}

function minus() {
  getKarma.value --;
  save();
  load();
}

function reset() {
  var promptCheck = prompt("Are you sure you want to reset y/n");
  if (promptCheck == "y") {
    localStorage.setItem('karma', 0);
    load();
  }
  else {
    //Do Nothing
  }
}

function showShopping() {
  sListOF += 1;
  console.log(sListOF);
  if (sListOF == 1) {
      shoppingList.style.visibility = "visible";
  }

  else if (sListOF == 2) {
    shoppingList.style.visibility = "hidden";
    sListOF = 0;
  }
}

function showColorOptions() {
  cOptions += 1;
  console.log(cOptions);
  if (cOptions == 1) {
    colorOptions.style.visibility = "visible";
  }

  else if (cOptions == 2) {
    colorOptions.style.visibility = "hidden";
    cOptions = 0;
  }
}

function buy(colorID, colorCost, colorName, state) {

  colorCostInt = parseInt(colorCost, 10);
  console.log(state);

  // Remove The Amount Of Karma
  if (getKarma.value > colorCostInt) {
    getKarma.value -= colorCostInt;
    document.getElementById(colorID).value = 0;
    document.getElementById(colorID).innerHTML = colorName;
    document.getElementById(colorID).title = "unlocked";

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
    document.getElementById(colorID).title = "locked";
    console.log(state);
  }

  // Change Title Color
  if (colorID == 'rainbow') {
    alert('Rainbow');
  }
  else {
      getTitle.style.color = colorID;
  }

  // Save and Load
  save();
  load();
}
