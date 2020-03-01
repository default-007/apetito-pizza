//VALUE
//size
var size = document.getElementById("pizzaSize");
size.addEventListener("change", getSize);

function getSize(event) {
  if (size.value == '500') {
    document.getElementById("sprice").innerHTML = "500";
    document.getElementById("stext").innerHTML = "Large";
  } else if (size.value == '400') {
    document.getElementById("sprice").innerHTML = "400";
    document.getElementById("stext").innerHTML = "Medium";
  } else if (size.value == '300') {
    document.getElementById("sprice").innerHTML = "300";
    document.getElementById("stext").innerHTML = "Small";
  }
}
//crust
var crust = document.getElementById("pizzaCrust");
crust.addEventListener("change", getCrust);

function getCrust(event) {
  if (crust.value == '1') {
    document.getElementById("cprice").innerHTML = "300";
    document.getElementById("ctext").innerHTML = "Crispy";
  } else if (crust.value == '2') {
    document.getElementById("cprice").innerHTML = "200";
    document.getElementById("ctext").innerHTML = "Stuffed";
  } else if (crust.value == '3') {
    document.getElementById("cprice").innerHTML = "250";
    document.getElementById("ctext").innerHTML = "Gluten free";
  }
}
//topping
var topping = document.getElementById("pizzaTopping");
topping.addEventListener("change", getTopping);

function getTopping(event) {
  if (topping.value == '250') {
    document.getElementById("tprice").innerHTML = "250";
    document.getElementById("ttext").innerHTML = "Chicken";
  } else if (topping.value == '200') {
    document.getElementById("tprice").innerHTML = "200";
    document.getElementById("ttext").innerHTML = "Vegetable";
  } else if (topping.value == '300') {
    document.getElementById("tprice").innerHTML = "300";
    document.getElementById("ttext").innerHTML = "Beef";
  }
}
//no
var number = document.getElementById("pizzaNo");
number.addEventListener("change", getNumber);

function getNumber(event) {
  if (number.value == '1') {
    document.getElementById("ntext").innerHTML = "1";
  } else if (number.value == '2') {
    document.getElementById("ntext").innerHTML = "2";
  } else if (number.value == '3') {
    document.getElementById("ntext").innerHTML = "3";
  } else if (number.value == '4') {
    document.getElementById("ntext").innerHTML = "4";
  }
}

// TOTAL
var total = document.getElementById("total-text");
total.addEventListener("change", getTotal);

function getTotal(event) {
  total = parseInt(document.getElementById("sprice")) + parseInt(document.getElementById("cprice")) + parseInt(document.getElementById("tprice")) * parseInt(document.getElementById("ntext"));
  document.getElementById("total-text").innerHTML = total;
}