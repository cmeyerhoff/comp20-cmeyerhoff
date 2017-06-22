// Your JavaScript goes here...
function parse(){

	var XMLrequest = new XMLHttpRequest();
	XMLrequest.open("GET", "https://messagehub.herokuapp.com/messages.json", true);
	XMLrequest.onreadystatechange = function(){
		if (XMLrequest.readyState == 4 && XMLrequest.status == 200) {
			var reponse = XMLrequest.responseText;
			parsedData = JSON.parse(reponse);
			messages = document.getElementById("messages");
		      for (i = 0; i <parsedData.length; i++) {
		      	var text = '<div class="single">' + parsedData[i]['content'];
		      	text = text + '<span class ="username">' + parsedData[i]['username'] + "</span></div>";
		        messages.innerHTML += text;
		      	// setting innerHTML in one line worked, but wanted to split it up into more for readibility
		      } 
	  }
	}
	XMLrequest.send(null);
}



// instructions part 2 does not work, trying to attempt a cross origin request. When creating a simple server, the document is
// within the server/on the same domain. When trying with opening index.html, the file is treated as a local file and
// not within the server/on the same site

// instructions part 3 seems to be cross origin request though, no? Hosting a server locally, and then gets stuff from another server?
// fetching files from not the same site that the page (mine) is from
// ****they probably have CORS on **** aha