//VALUE
var size = document.getElementById("pizzaSize");
size.addEventListener("change", generateData);

function generateData(event) {
  if (size.value == '500') {
    document.getElementById("sprice").innerHTML = "KSH 500";
  } else if (size.value == '400') {
    document.getElementById("sprice").innerHTML = "KSH 400";
  } else if (size.value == '300') {
    document.getElementById("sprice").innerHTML = "KSH 300";
  }
}
var crust = document.getElementById("pizzaCrust");
crust.addEventListener("change", generateData);

function generateData(event) {
  if (crust.value == '1') {
    document.getElementById("cprice").innerHTML = "KSH 300";
  } else if (crust.value == '2') {
    document.getElementById("cprice").innerHTML = "KSH 200";
  } else if (crust.value == '3') {
    document.getElementById("cprice").innerHTML = "KSH 250";
  }
}



// TABLE TEXT
function GetSizeText() {
  var e = document.getElementById("pizzaSize");
  var result = e.options[e.selectedIndex].text;

  document.getElementById("stext").innerHTML = result;
}

function GetCrustText() {
  var b = document.getElementById("pizzaCrust");
  var result = b.options[b.selectedIndex].text;

  document.getElementById("ctext").innerHTML = result;
}

function GetToppingText() {
  var c = document.getElementById("pizzaTopping");
  var result = e.options[e.selectedIndex].text;

  document.getElementById("ttext").innerHTML = result;
}