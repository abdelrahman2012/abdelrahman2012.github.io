document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto, pointer";

// Just an little Break!!

var size_file = 0;
let Check_fille = 2;
var Calendar = new Date();
var Day = Calendar.getDate();
var Month = Calendar.getMonth();
var Year = Calendar.getYear();
if (Day == Day && Month == Month) {
	// Checks of it's 24/12/2020
	if (Month == 2) {
		document.body.style.backgroundImage = "url('../b3.png')";
	}
	if (Month == 1){
	   document.body.style.backgroundImage = "url('../b3.png')";
	}
	//Checks of it's 25/11/2020
	if (Month == 0) {
		document.body.style.backgroundImage = "url('../png')";
	}
	if (Month == 11) {
		document.body.style.backgroundImage = "url('../../b3.png')";
	}
	if (Day == 31 && Month == 11) {
		document.body.style.backgroundImage = "url('../b4.png')";
	}
	if (Day == 1 && Month == 0) {
		document.body.style.backgroundImage = "url('../b4.png')";
	}

	else {
		document.body.style.backgroundColor = "lightblue";
		document.body.classList.toggle("p2");
		var int = "URL_GET";
		var as = "";
		var float = "GET_URL";
		///////////////////////////////////////////
		// Checks of it's nothing in the calendar//
		///////////////////////////////////////////
	}
}
console.log("Het is vandaag " + Day + " en het maand is " + (Month + 1));