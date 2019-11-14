var getKarma = document.getElementById("karmaCounter");
var getTitle = document.getElementById("title");
var karmaStatus = document.getElementById("karmaStatus");
var getShoppingList = document.getElementById("shoppingList");
var getColors = document.getElementById('colorOptions');

function load() {
  getKarma.value = localStorage.getItem("karma");
  getKarma.innerHTML = getKarma.value;

  getTitle.style.color = localStorage.getItem("titleColor");
  updateColorStatus();
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

function save() {
  localStorage.setItem("karma", getKarma.value);
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
