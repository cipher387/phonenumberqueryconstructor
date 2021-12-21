function generateVariants()
{


    var phone = document.getElementById("phonenumber").value;
    searchQuery = "\"+"+phone+"\" OR ";
	searchQuery = searchQuery+"\""+phone.substr(0, 1)+" "+phone.substr(1, 3)+" "+phone.substr(4, 3)+" "+phone.substr(7, 2)+" "+phone.substr(9, 2)+"\" OR ";
	searchQuery = searchQuery +"\""+phone.substr(0, 4)+" "+phone.substr(4, 3)+" "+phone.substr(7, 2)+" "+phone.substr(9, 2)+"\" OR ";
    searchQuery = searchQuery+"\""+phone.substr(0, 1)+" "+phone.substr(1, 3)+" "+phone.substr(4, 3)+"-"+phone.substr(7, 2)+"-"+phone.substr(9, 2)+"\" OR ";
    searchQuery = searchQuery+"\"+"+phone.substr(0, 1)+" "+phone.substr(1, 3)+" "+phone.substr(4, 3)+"-"+phone.substr(7, 2)+"-"+phone.substr(9, 2)+"\" OR ";
    searchQuery = searchQuery+"\"+"+phone.substr(0, 1)+" ("+phone.substr(1, 3)+") "+phone.substr(4, 3)+"-"+phone.substr(7, 2)+"-"+phone.substr(9, 2)+"\" OR ";
    searchQuery = searchQuery+"\"+"+phone.substr(0, 1)+" ("+phone.substr(1, 3)+") "+phone.substr(4, 3)+" "+phone.substr(7, 2)+" "+phone.substr(9, 2)+"\"";
    document.getElementById("result").innerHTML = searchQuery;

}
function generateVariants8()
{


    var phone = document.getElementById("phonenumber").value;
    var phone = phone.replace("7", "8");
    searchQuery = "\""+phone+"\" OR ";
	searchQuery = searchQuery+"\""+phone.substr(0, 1)+" "+phone.substr(1, 3)+" "+phone.substr(4, 3)+" "+phone.substr(7, 2)+" "+phone.substr(9, 2)+"\" OR ";
	searchQuery = searchQuery +"\""+phone.substr(0, 4)+" "+phone.substr(4, 3)+" "+phone.substr(7, 2)+" "+phone.substr(9, 2)+"\" OR ";
    searchQuery = searchQuery+"\""+phone.substr(0, 1)+" "+phone.substr(1, 3)+" "+phone.substr(4, 3)+"-"+phone.substr(7, 2)+"-"+phone.substr(9, 2)+"\"";
   
    document.getElementById("result8").innerHTML = searchQuery;

}

function openQuery(buttonValue)

{

	 searchquery = document.getElementById("result").innerHTML;
	 const links = [];
	 links['Google']="https://www.google.com/search?q="+searchquery;
	 links['Yandex']="https://yandex.ru/search/?text="+searchquery;
	 searchquery8 = document.getElementById("result8").innerHTML;
	 links['Google8']="https://www.google.com/search?q="+searchquery8;
	 links['Yandex8']="https://yandex.ru/search/?text="+searchquery8;

	 window.open(links[buttonValue]);

}