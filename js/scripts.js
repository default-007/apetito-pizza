//VALUE

function GetSizeValue() {
  var e = document.getElementById("pizzaSize");
  var result = e.options[e.selectedIndex].value;

  document.getElementById("sprice").innerHTML = result;
}

function GetCrustValue() {
  var e = document.getElementById("pizzaCrust");
  var result = e.options[e.selectedIndex].value;

  document.getElementById("cprice").innerHTML = result;
}

function GetToppingValue() {
  var e = document.getElementById("pizzaTopping");
  var result = e.options[e.selectedIndex].value;

  document.getElementById("tprice").innerHTML = result;
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