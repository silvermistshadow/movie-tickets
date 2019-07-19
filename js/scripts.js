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
var dectPikachu = new MovieName("Detective Pikachu", true);
var holyGrail = new MovieName("Monty Python and the Holy Grail", false);
var movies = [endgame, captMarvel, dectPikachu, holyGrail]

//User interface past this point


$(document).ready(function() {
  $("#new-ticket").submit(function(event) {
    event.preventDefault();
    var inputAge = parseInt($("input#inputAge").val());
    var inputName = $("input#inputName").val();
    var showName = $("#showName").val();
    var inputTOD = $("#inputTOD").val();

    var inputTicket = new Ticket(movies[parseInt(showName)], inputTOD, inputAge )
    var ticketPrice = inputTicket.getPrice();

    $("#nameOut").html(inputName)
    if (inputTicket.age >= 60) {
      $("#ageDiscount").html("Yes");
    }
    else {
      $("#ageDiscount").html("No")
    }
    $("#showTime").html(ticket.timeofDay)
  });
});
