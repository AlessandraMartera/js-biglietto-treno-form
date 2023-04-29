// startig Var
let userName, userSurname, userAge, userKm, ticketPrice, discountP;

const kmPrice = 0.21;
const stampTicket= document.getElementById("generate");
const cleanInput = document.getElementById("clean");

function calcTicketPrice () {
  // take user data
  ticketPrice = "";
  userName = document.getElementById("user_name").value;
  userSurname = document.getElementById("user_Surname").value;
  userKm = document.getElementById("user_km").value;
  userAge = document.getElementById("user_age").value;
  document.getElementById("data").innerHTML = `${userName} ${userSurname}`;

  // calc ticket price from km to do
  ticketPrice = userKm * kmPrice;
  console.log("Ticket Price is " + ticketPrice + " euro");
  
  //check user age
  // IF discount 20%
  if (userAge == "20%Minorenne" )  {
    discount = ticketPrice * 0.20;
    ticketPrice = ticketPrice - discount;
    document.getElementById("ticket_type").innerHTML = `${userAge}`;
  }

  // ELSE IF discount 40%
  else if(userAge == "40%Over65")  {
      discount = ticketPrice * 0.40;
      ticketPrice = ticketPrice - discount;
      document.getElementById("ticket_type").innerHTML = `${userAge}`;
  }

  // ELSE nothing discount 
  else {
      discount = 0;
      ticketPrice = ticketPrice - discount;
      document.getElementById("ticket_type").innerHTML = `${userAge}`;
  } 
  
  document.querySelector(".ticket").classList.add("active");

  // stamp ticket price
  document.getElementById("price").innerHTML = ticketPrice.toFixed(2) + "€";

  // generate a random CP code
  let codePasseger = "997";
  codePasseger = codePasseger + Math.floor(Math.random( ) * 5000);

  console.log(codePasseger);
  document.getElementById("code").innerHTML = codePasseger;

  // Generate a random number cab
  let codeCab;
  codeCab = Math.floor((Math.random( ) * 10) + 1 );

  console.log(codeCab);
  document.getElementById("cabin").innerHTML = codeCab;

  // Generate a random number seat
  let seat;
  seat = Math.floor((Math.random( ) * 80) + 1 );

  console.log(seat);
  document.getElementById("seat").innerHTML = seat;
}

// Generate button
stampTicket.addEventListener ( "click", calcTicketPrice );


// clean button
cleanInput.addEventListener ( "click", 
  function() {
    document.getElementById("user_name").value = "";
    document.getElementById("user_Surname").value = "";
    document.getElementById("user_km").value = "";
    document.getElementById("user_age").value = "";

    document.querySelector(".ticket").classList.remove("active");

  }
)


