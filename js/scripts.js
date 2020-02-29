function GetSizeValue() {
  var e = document.getElementById("pizzaSize");
  var result = e.options[e.selectedIndex].value;

  document.getElementById("sprice").innerHTML = result;
}

function GetSizeText() {
  var e = document.getElementById("pizzaSize");
  var result = e.options[e.selectedIndex].text;

  document.getElementById("result").innerHTML = result;
}