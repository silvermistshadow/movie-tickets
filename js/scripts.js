//Back end starts here
function Ticket(MovieName, timeOfDay, age) {
  this.MovieName = MovieName;
  this.timeOfDay = timeOfDay;
  this.age = age;
}

Ticket.prototype.getPrice = function(ticket) {
  var basePrice = 10
  var totalPrice = basePrice
  if (ticket.MovieName.isFirstRelease = true) {
    totalPrice += 10
  }
  else {
    totalPrice += 5
  }
  if (ticket.timeOfDay === "Matinee") {
    totalPrice += 5
  }
  else if (ticket.timeofDay !== "Midnight") {
    totalPrice += 10
  }
  else {
    totalPrice += 15
  }
  if (ticket.age >= 60) {
    totalPrice -= 10
  }
  var dollarPrice = "$" + totalPrice.toString();
  return dollarPrice;
}

function MovieName(name, isFirstRelease) {
  this.name = name;
  this.isFirstRelease = isFirstRelease;
}

var endgame = new MovieName("Avengers: Endgame", true);
var captMarvel = new MovieName("Captain Marvel", false);


//User interface past this point

$(document).ready(function() {

})
