function generateVariantsArgentine()

{
   
   var phone = document.getElementById("phonenumber").value;
   searchQuery = "\"+"+phone+"\" OR ";
   searchQuery = searchQuery+"\""+phone.substr(0, 2)+" "+phone.substr(2, 4)+" "+phone.substr(5, 6)+"\" OR ";
   searchQuery = searchQuery+"\""+phone.substr(0, 2)+" "+phone.substr(2, 4)+" "+phone.substr(5, 3)+" "+phone.substr(8, 3)+"\" OR ";
   searchQuery = searchQuery+"\""+phone.substr(0, 2)+" ("+phone.substr(2, 4)+") "+phone.substr(5, 3)+"-"+phone.substr(8, 3)+"\" OR ";
   searchQuery = searchQuery+"\""+phone.substr(0, 2)+" ("+phone.substr(2, 4)+") "+phone.substr(5, 2)+"-"+phone.substr(7, 2)+"-"+phone.substr(9, 2)+"\"";
   document.getElementById("resultArgentine1").innerHTML = searchQuery;
   searchQuery = "\"+"+phone+"\" OR ";
   searchQuery = searchQuery+"\""+phone.substr(0, 2)+" "+phone.substr(2, 3)+" "+phone.substr(4, 6)+"\" OR ";
   searchQuery = searchQuery+"\""+phone.substr(0, 2)+" "+phone.substr(2, 3)+" "+phone.substr(4, 3)+" "+phone.substr(7, 3)+"\" OR ";
   searchQuery = searchQuery+"\""+phone.substr(0, 2)+" ("+phone.substr(2, 3)+") "+phone.substr(4, 3)+"-"+phone.substr(7, 3)+"\" OR ";
   searchQuery = searchQuery+"\""+phone.substr(0, 2)+" ("+phone.substr(2, 3)+") "+phone.substr(4, 2)+"-"+phone.substr(6, 2)+"-"+phone.substr(8, 2)+"\"";
   document.getElementById("resultArgentine2").innerHTML = searchQuery;


}



function generateVariantsEurope()
{


    var phone = document.getElementById("phonenumber").value;
    searchQuery = "\"+"+phone+"\" OR ";
	searchQuery = searchQuery+"\""+phone.substr(0, 2)+" "+phone.substr(2, 3)+" "+phone.substr(5, 3)+" "+phone.substr(8, 2)+" "+phone.substr(10, 2)+"\" OR ";
	searchQuery = searchQuery +"\""+phone.substr(0, 5)+" "+phone.substr(5, 3)+" "+phone.substr(8, 2)+" "+phone.substr(10, 2)+"\" OR ";
    searchQuery = searchQuery+"\""+phone.substr(0, 2)+" "+phone.substr(2, 3)+" "+phone.substr(5, 3)+"-"+phone.substr(8, 2)+"-"+phone.substr(10, 2)+"\" OR ";
    searchQuery = searchQuery+"\"+"+phone.substr(0, 2)+" "+phone.substr(2, 3)+" "+phone.substr(5, 3)+"-"+phone.substr(8, 2)+"-"+phone.substr(10, 2)+"\" OR ";
    searchQuery = searchQuery+"\"+"+phone.substr(0, 2)+" ("+phone.substr(2, 3)+") "+phone.substr(5, 3)+"-"+phone.substr(8, 2)+"-"+phone.substr(10, 2)+"\" OR ";
    searchQuery = searchQuery+"\"+"+phone.substr(0, 2)+" ("+phone.substr(2, 3)+") "+phone.substr(5, 3)+" "+phone.substr(8, 2)+" "+phone.substr(10, 2)+"\"";
    document.getElementById("result").innerHTML = searchQuery;

}
function generateVariantsRussia()
{


    var phone = document.getElementById("phonenumber").value;
    
    searchQuery = "\"+"+phone+"\" OR ";
	searchQuery = searchQuery+"\""+phone.substr(0, 1)+" "+phone.substr(1, 3)+" "+phone.substr(4, 3)+" "+phone.substr(7, 2)+" "+phone.substr(9, 2)+"\" OR ";
	searchQuery = searchQuery +"\""+phone.substr(0, 4)+" "+phone.substr(4, 3)+" "+phone.substr(7, 2)+" "+phone.substr(9, 2)+"\" OR ";
    searchQuery = searchQuery+"\""+phone.substr(0, 1)+" "+phone.substr(1, 3)+" "+phone.substr(4, 3)+"-"+phone.substr(7, 2)+"-"+phone.substr(9, 2)+"\" OR ";
    searchQuery = searchQuery+"\"+"+phone.substr(0, 1)+" "+phone.substr(1, 3)+" "+phone.substr(4, 3)+"-"+phone.substr(7, 2)+"-"+phone.substr(9, 2)+"\" OR ";
    searchQuery = searchQuery+"\"+"+phone.substr(0, 1)+" ("+phone.substr(1, 3)+") "+phone.substr(4, 3)+"-"+phone.substr(7, 2)+"-"+phone.substr(9, 2)+"\" OR ";
    searchQuery = searchQuery+"\"+"+phone.substr(0, 1)+" ("+phone.substr(1, 3)+") "+phone.substr(4, 3)+" "+phone.substr(7, 2)+" "+phone.substr(9, 2)+"\"";
    document.getElementById("result7").innerHTML = searchQuery;

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
     searchquery7 = document.getElementById("result7").innerHTML;
	 links['Google7']="https://www.google.com/search?q="+searchquery7;
	 links['Yandex7']="https://yandex.ru/search/?text="+searchquery7;
     searchquery7 = document.getElementById("resultArgentine1").innerHTML;
     links['GoogleArgentine1']="https://www.google.com/search?q="+searchquery7;
     links['YandexArgentine1']="https://yandex.ru/search/?text="+searchquery7;
     searchquery7 = document.getElementById("resultArgentine2").innerHTML;
     links['GoogleArgentine2']="https://www.google.com/search?q="+searchquery7;
     links['YandexArgentine2']="https://yandex.ru/search/?text="+searchquery7;
	 

	 window.open(links[buttonValue]);

}