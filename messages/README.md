#Messages part 2

This project correctly implements the main features as laid out in the specs for messages part 2. It parses JSON from https://messagehub.herokuapp.com/messages.json, or the file included in the directory, data.json, and outputs each message with styling provided in style.css. It sometimes takes a few seconds to load the messages, as the response to my XMLHttpRequest is not instant. In instructions part two, loading a local file did not work and it should not work, but I will expand upon that in answering the question below. Lastly, all of the code worked while only checking if the request.readyState == 4, ie without checking if request.status == 200, but added it in. I was thinking about effect of 304 (unchanged or similar) status code, but if things are unchanged, then the messages do not need to be updated anyway.

I did not collaborate with anyone on this assignment, but I referenced the following:

https://github.com/tuftsdev/WebProgramming/blob/gh-pages/examples/ajax/messages.html (The example page)
https://stackoverflow.com/questions/14628601/can-i-add-background-color-only-for-padding (for styling)

I spent approximately 1-2 hours on this project.



IMPORTANT QUESTION:
Is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not? 

Normally you cannot request data from a different origin or from your local machine when using XMLHttpRequest.  The same origin policy blocks the execution or loading of scripts/documents that come from a different host or use a different port on the same host. This is to prevent the dangers/problems/security issues that come with cross site scripting and other vulnerabilities, and presents a large barrier to malicious websites that would attempt to load their own scripts/documents in place of legitimate ones, or access data they should not be able to access. 

However, this is only generally the case. There are exceptions to the same origin policy, and other ways to get around it when it would be appropriate to do so: namely JSONP or CORS. These make it possible to request data from a different origin. To return to the original question, by using JSONP or CORS, you can request data from a different origin. While requesting a local file without it being contained within a server did not work during the Lab, as it should not as mandated by the same origin policy, requesting data from https://messagehub.herokuapp.com/messages.json did work, likely because they have Cross Origin Resource Sharing (CORS) enabled or some other schema that allows data to be shared. 

