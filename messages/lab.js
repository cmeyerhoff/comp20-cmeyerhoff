// Your JavaScript goes here...

function parse(){

	var XMLrequest = new XMLHttpRequest();
	XMLrequest.open("GET", "https://messagehub.herokuapp.com/messages.json", false);
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



// part 2 does not work, trying to attempt a cross origin request. When creating a simple server, the document is
// within the server/on the same domain. When trying with opening index.html, the file is treated as a local file and
// not within the server