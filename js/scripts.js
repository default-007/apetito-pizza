//VALUE
//size
var size = document.getElementById("pizzaSize");
size.addEventListener("change", getSize);

function getSize(event) {
  if (size.value == 'Large') {
    document.getElementById("sprice").innerHTML = "500";
  } else if (size.value == 'Medium') {
    document.getElementById("sprice").innerHTML = "400";
  } else if (size.value == 'Small') {
    document.getElementById("sprice").innerHTML = "300";
  }
}
//crust
var crust = document.getElementById("pizzaCrust");
crust.addEventListener("change", getCrust);

function getCrust(event) {
  if (crust.value == 'Crispy') {
    document.getElementById("cprice").innerHTML = "300";
  } else if (crust.value == 'Stuffed') {
    document.getElementById("cprice").innerHTML = "200";
  } else if (crust.value == 'Gluten free') {
    document.getElementById("cprice").innerHTML = "250";
  }
}
//topping
var topping = document.getElementById("pizzaTopping");
topping.addEventListener("change", getTopping);

function getTopping(event) {
  if (topping.value == 'Chicken') {
    document.getElementById("tprice").innerHTML = "250";
  } else if (topping.value == 'Vegetable') {
    document.getElementById("tprice").innerHTML = "200";
  } else if (topping.value == 'Beef') {
    document.getElementById("tprice").innerHTML = "300";
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
var totalCosts = [];

function order(size, crust, topping, ) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = 0;

}
var pizzaSize = ["", "Large", "Medium", "Small"];
var pizzaCrust = ["", "Crispy", "Stuffed", "Gluten-free"];
var pizzaTopping = ["", "Chicken", "Vegetable", "Beef", ];

order.prototype.cost = function () {
  if (this.size === pizzaSize[0]) {
    this.price += 0;
  } else if (this.size === pizzaSize[1]) {
    this.price += 500;
  } else if (this.size === pizzaSize[2]) {
    this.price += 400;
  } else if (this.size === pizzaSize[3]) {
    this.price += 300;
  }

  if (this.crust === pizzaCrust[0]) {
    this.price += 0;
  } else if (this.crust === pizzaCrust[1]) {
    this.price += 300;
  } else if (this.crust === pizzaCrust[2]) {
    this.price += 200;
  } else if (this.crust === pizzaCrust[3]) {
    this.price += 250;
  }


  if (this.topping === pizzaTopping[0]) {
    this.price += 0;
  } else if (this.topping === pizzaTopping[1]) {
    this.price += 250;
  } else if (this.topping === pizzaTopping[2]) {
    this.price += 200;
  } else if (this.topping === pizzaTopping[3]) {
    this.price += 300;
  }

  return this.price;
}

order.prototype.totalCost = function () {
  var orderTotal = 0;
  for (var order = 0; order < totalCosts.length; order++) {
    orderTotal += totalCosts[order];
  }
  return orderTotal;
}


$(document).ready(function () {
  $("#addCart").click(function (event) {
    event.preventDefault();
    var sizes = $("select#pizzaSize").val();
    var crusts = $("select#pizzaCrust").val();
    var toppings = $("select#pizzaTopping").val();
    var pizzaNo = $("select#pizzaNo").val();

    var newPizzaOrder = new order(sizes, crusts, toppings);
    newPizzaOrder.cost();
    totalCosts.push(newPizzaOrder.price);


    $("#stext").text(sizes);
    $("#ctext").text(crusts);
    $("#ttext").text(toppings);
    $("#ntext").text(pizzaNo);
    $("#total-text").text(newPizzaOrder.totalCost());


  });

  $("#checkout").click(function () {
    prompt("Please insert you name")
    prompt("Please insert you location")
    alert("You will be charged an extra 200 for delivery")
    alert("Thank you for Your Purchase!Your order will be delivered to your location 🍕 🚚")
  });
});