// Just an little Break!!

// Wait an sec
var size_file = 0;
let Check_fille = 2;
const String = 1020; 
var Calendar = new Date();
var Day = Calendar.getDate();
var Month = Calendar.getMonth();
var Year = Calendar.getYear();
if (Day == Day && Month == Month) {
  if (Month == 2) {
    document.body.style.background = "greenyellow";
  }
	
  if (Month == 1) {
    document.body.style.backgroundImage = "url('Images/b3.png')";
  }
  
  if (Month == 0) {
    document.body.style.backgroundImage = "url('Images/b3.png')";
  }
  
  if (Month == 11) {
    document.body.style.backgroundImage = "url('Images/b3.png')";
  }
	
  if (Day == 31 && Month == 11) {
    document.body.style.backgroundImage = "url('Images/b4.png')";
  }
	
  if (Day == 1 && Month == 0) {
    document.body.style.backgroundImage = "url('Images/b4.png')";
  }

  else {
    document.body.style.backgroundColor = "lightblue";
    document.body.classList.toggle("bodyWithoutBg");
    var int = "URL_GET";
    var as = "";
    var float = "GET_URL";
    ///////////////////////////////////////////
    // Checks of it's nothing in the calendar//
    ///////////////////////////////////////////
  }
}
console.log("Het is vandaag " + Day + " en het maand is " + (Month + 1));



function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


function math() {
  y = document.getElementById('Math3').innerHTML = Math.floor(Math.random() * 100); // The 1st random number.
  x = document.getElementById('Math2').innerHTML = Math.floor(Math.random() * 100); // The 2nd random number.
  document.getElementById('answer').innerHTML = '<button onclick="answer()">Antwoord</button>'; // Makes the answer ??? becase you con't see the answer
}

function math10() {
  y = document.getElementById('Math3').innerHTML = Math.floor(Math.random() * input_number); // The 1st random number.
  x = document.getElementById('Math2').innerHTML = Math.floor(Math.random() * input_number); // The 2nd random number.
  document.getElementById('answer').innerHTML = '<button onclick="answer()">Antwoord</button>'; // Makes the answer ??? becase you con't see the answer
}

function answer() {
  document.getElementById('answer').innerHTML = x + y; // The answer will popup 
}

function math3() {
  y2 = document.getElementById('Math4').innerHTML = Math.floor(Math.random() * 10);
  x3 = document.getElementById('Math5').innerHTML = Math.floor(Math.random() * 10);
  document.getElementById('answer2').innerHTML = '<button onclick="answer2()">Antwoord</button>';
}

function math4() {
  y10 = document.getElementById('Math6').innerHTML = Math.floor(Math.random() * 100);
  x10 = document.getElementById('Math7').innerHTML = Math.floor(Math.random() * 10);
  document.getElementById('answer4').innerHTML = '<button onclick="answer6()">Antwoord</button>';
}

function answer6(){
	document.getElementById("answer4").innerHTML = y10 / x10;
}

function TM() {
  y = document.getElementById('Math2').innerHTML = Math.floor(Math.random() * 1000);
  x = document.getElementById('Math3').innerHTML = Math.floor(Math.random() * 1000);
  document.getElementById('answer').innerHTML = '<button onclick="answer()">Antwoord</button>';
}

function TM2() {
  y2 = document.getElementById('Math4').innerHTML = Math.floor(Math.random() * 10);
  x3 = document.getElementById('Math5').innerHTML = Math.floor(Math.random() * 20);
  document.getElementById('answer2').innerHTML = '<button onclick="answer2()">Antwoord</button>';
}

function answer2() {
  document.getElementById('answer2').innerHTML = x3 * y2;
  // Trying Soming.
}

function checkCookie(){
  var username = getCookie("username");
  if (username != "") {
    alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}

var x = 0;
function changefont(){
	list_font = ["Roboto","Arial", "Google sans","Comic sans MS", "Comfortaa", "Lora", "RobotoMono", "Times New Roman"];
	body = document.getElementById("body");
	body.style.fontFamily = list_font[x];
	x = x + 1;
	if (x == 5){
		x = 0;
	}
}

checkCookie()
// alert(document.cookie)

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var kvkv= document.getElementById("Kvk");

kvkv.pause();