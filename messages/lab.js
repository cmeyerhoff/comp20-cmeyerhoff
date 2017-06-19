// Your JavaScript goes here...

function parse(){

	var XMLrequest = new XMLHttpRequest();
	XMLrequest.open("GET", "data.json", false);
	XMLrequest.send(null);

	var reponse = XMLrequest.responseText;
	parsedData = JSON.parse(reponse);
	console.log(reponse);
	console.log(parsedData[0]['content']);
	messages = document.getElementById("messages");
      for (i = 0; i <parsedData.length; i++) {
        messages.innerHTML += parsedData[i]['content'] + " " + parsedData[i]['username'] + "<br>";
      } 

}

/* parsedData = JSON.parse(jsonData);
      messages = document.getElementById("messages");
      for (i = 0; i <parsedData.length; i++) {
        messages.innerHTML += parsedData[i]['content'] + " " + parsedData[i]['username'] + "<br>";
      }  */