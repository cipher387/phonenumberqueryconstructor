function generateVariants()

{

	country = document.getElementById("countries").value;
	var phone = document.getElementById("phonenumber").value;
	searchQuery = "\"+" + phone + "\" OR ";

	if (country === "Germany") {

		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 3) + " " + phone.substr(5, 3) + " " + phone.substr(8, 2) + " " + phone.substr(10, 2) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 5) + " " + phone.substr(5, 3) + " " + phone.substr(8, 2) + " " + phone.substr(10, 2) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 3) + " " + phone.substr(5, 3) + "-" + phone.substr(8, 2) + "-" + phone.substr(10, 2) + "\" OR ";
		searchQuery = searchQuery + "\"+" + phone.substr(0, 2) + " " + phone.substr(2, 3) + " " + phone.substr(5, 3) + "-" + phone.substr(8, 2) + "-" + phone.substr(10, 2) + "\" OR ";
		searchQuery = searchQuery + "\"+" + phone.substr(0, 2) + " (" + phone.substr(2, 3) + ") " + phone.substr(5, 3) + "-" + phone.substr(8, 2) + "-" + phone.substr(10, 2) + "\" OR ";
		searchQuery = searchQuery + "\"+" + phone.substr(0, 2) + " (" + phone.substr(2, 3) + ") " + phone.substr(5, 3) + " " + phone.substr(8, 2) + " " + phone.substr(10, 2) + "\"";
		document.getElementById("result").innerHTML = searchQuery;
		document.getElementById("result2").innerHTML = "";

	} else if (country === "Argentine") {

		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 4) + " " + phone.substr(5, 6) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 4) + " " + phone.substr(5, 3) + " " + phone.substr(8, 3) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 4) + ") " + phone.substr(5, 3) + "-" + phone.substr(8, 3) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 4) + ") " + phone.substr(5, 2) + "-" + phone.substr(7, 2) + "-" + phone.substr(9, 2) + "\"";
		document.getElementById("result").innerHTML = searchQuery;

		searchQuery = "\"+" + phone + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 3) + " " + phone.substr(4, 6) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 3) + " " + phone.substr(4, 3) + " " + phone.substr(7, 3) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 3) + ") " + phone.substr(4, 3) + "-" + phone.substr(7, 3) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 3) + ") " + phone.substr(4, 2) + "-" + phone.substr(6, 2) + "-" + phone.substr(8, 2) + "\"";
		document.getElementById("result2").innerHTML = searchQuery;

	} else if (country === "France") {

		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 1) + ")" + phone.substr(3, 1) + " " + phone.substr(4, 2) + " " + phone.substr(6, 2) + " " + phone.substr(8, 2) + " " + phone.substr(10, 2) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 1) + phone.substr(3, 1) + " " + phone.substr(4, 2) + " " + phone.substr(6, 2) + " " + phone.substr(8, 2) + " " + phone.substr(10, 2) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 1) + ")" + phone.substr(3, 1) + " " + phone.substr(4, 2) + "-" + phone.substr(6, 2) + "-" + phone.substr(8, 2) + "-" + phone.substr(10, 2) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 1) + phone.substr(3, 1) + " " + phone.substr(4, 2) + "-" + phone.substr(6, 2) + "-" + phone.substr(8, 2) + "-" + phone.substr(10, 2) + "\"";
		document.getElementById("result").innerHTML = searchQuery;
		document.getElementById("result2").innerHTML = "";

	} else if (country === "Spain") {

		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 3) + " " + phone.substr(5, 7) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 3) + " " + phone.substr(5, 3) + "-" + phone.substr(8, 4) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 3) + ") " + phone.substr(5, 3) + "-" + phone.substr(8, 4) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 3) + ") " + phone.substr(5, 2) + "-" + phone.substr(7, 2) + "-" + phone.substr(9, 2) + "\"";
		document.getElementById("result").innerHTML = searchQuery;
		document.getElementById("result2").innerHTML = "";


	} else if (country === "Pakistan") {

		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 3) + " " + phone.substr(5, 7) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 2) + " " + phone.substr(4, 8) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 3) + ") " + phone.substr(5, 3) + "-" + phone.substr(8, 4) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 2) + ") " + phone.substr(4, 3) + "-" + phone.substr(7, 5) + "\"";
		document.getElementById("result").innerHTML = searchQuery;
		document.getElementById("result2").innerHTML = "";


	} else if (country === "Belgium") {
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 1) + ") " + phone.substr(3, 3) + " " + phone.substr(6, 2) + " " + phone.substr(8, 2) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 1) + " " + phone.substr(3, 3) + " " + phone.substr(6, 2) + " " + phone.substr(8, 2) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 1) + ") " + phone.substr(3, 3) + "-" + phone.substr(6, 2) + "-" + phone.substr(8, 2) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 1) + ") " + phone.substr(3, 4) + "-" + phone.substr(7, 3) + "\"";
		document.getElementById("result").innerHTML = searchQuery;
		document.getElementById("result2").innerHTML = "";


	} else if (country === "Greece") {
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 2) + ") " + phone.substr(3, 4) + "-" + phone.substr(7, 5) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 2) + " " + phone.substr(3, 3) + " " + phone.substr(6, 6) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 2) + ") " + phone.substr(3, 4) + "-" + phone.substr(7, 5) + "\"";
		document.getElementById("result").innerHTML = searchQuery;
		searchQuery = "\"+" + phone + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 3) + ") " + phone.substr(4, 4) + "-" + phone.substr(8, 4) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " " + phone.substr(2, 3) + " " + phone.substr(4, 3) + " " + phone.substr(7, 5) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 2) + " (" + phone.substr(2, 3) + ") " + phone.substr(4, 4) + "-" + phone.substr(8, 4) + "\"";
		document.getElementById("result2").innerHTML = searchQuery;


	} else if (country === "Russia") {

		var phone = document.getElementById("phonenumber").value;

		searchQuery = "\"+" + phone + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 1) + " " + phone.substr(1, 3) + " " + phone.substr(4, 3) + " " + phone.substr(7, 2) + " " + phone.substr(9, 2) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 4) + " " + phone.substr(4, 3) + " " + phone.substr(7, 2) + " " + phone.substr(9, 2) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 1) + " " + phone.substr(1, 3) + " " + phone.substr(4, 3) + "-" + phone.substr(7, 2) + "-" + phone.substr(9, 2) + "\" OR ";
		searchQuery = searchQuery + "\"+" + phone.substr(0, 1) + " " + phone.substr(1, 3) + " " + phone.substr(4, 3) + "-" + phone.substr(7, 2) + "-" + phone.substr(9, 2) + "\" OR ";
		searchQuery = searchQuery + "\"+" + phone.substr(0, 1) + " (" + phone.substr(1, 3) + ") " + phone.substr(4, 3) + "-" + phone.substr(7, 2) + "-" + phone.substr(9, 2) + "\" OR ";
		searchQuery = searchQuery + "\"+" + phone.substr(0, 1) + " (" + phone.substr(1, 3) + ") " + phone.substr(4, 3) + " " + phone.substr(7, 2) + " " + phone.substr(9, 2) + "\"";
		document.getElementById("result").innerHTML = searchQuery;

		var phone = phone.replace("7", "8");
		searchQuery = "\"" + phone + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 1) + " " + phone.substr(1, 3) + " " + phone.substr(4, 3) + " " + phone.substr(7, 2) + " " + phone.substr(9, 2) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 4) + " " + phone.substr(4, 3) + " " + phone.substr(7, 2) + " " + phone.substr(9, 2) + "\" OR ";
		searchQuery = searchQuery + "\"" + phone.substr(0, 1) + " " + phone.substr(1, 3) + " " + phone.substr(4, 3) + "-" + phone.substr(7, 2) + "-" + phone.substr(9, 2) + "\"";
		document.getElementById("result2").innerHTML = searchQuery;

	} else {

		document.getElementById("result").innerHTML = "Please, choose a country";
		document.getElementById("result2").innerHTML = "";

	}

}


function openQuery(buttonValue)

{

	searchquery = document.getElementById("result").innerHTML;
	const links = [];
	links['Google'] = "https://www.google.com/search?q=" + searchquery;
	links['Yandex'] = "https://yandex.ru/search/?text=" + searchquery;
	searchquery2 = document.getElementById("result2").innerHTML;
	links['Google2'] = "https://www.google.com/search?q=" + searchquery2;
	links['Yandex2'] = "https://yandex.ru/search/?text=" + searchquery2;

	window.open(links[buttonValue]);

}
