#MBTA - part 2

This project correctly builds upon part 1 did (laid out below) and implements the main features laid out in the specs for part 2. It displays the user location on the map, and displays an infowindow with the distance to the closest MBTA stop when clicked on. It also draws a line from the users location to that closest MBTA station. When any of the MBTA stations are clicked on, updated data is requested from the MBTA using their API, and an infowindow is displayed that shows the current schedule for that station. The times shown in the schcedule are rounded to the nearest minute. Another change from part 1 is the use of an API key, which part 1 worked without on my system, but gave errors when tested for grading.

I spent approximately 7-8 hours on the assignment. 

I did not collaborate with anyone on this assignment, but I referenced piazza as well as the following:

https://github.com/tuftsdev/WebProgramming/blob/gh-pages/examples/google_maps/geolocation_map.html

Source for easy conversion of meters to miles: 
https://stackoverflow.com/questions/20674439/how-to-convert-meter-to-miles

Random comment suggested good method for getting decimal places:
https://stackoverflow.com/questions/1726630/formatting-a-number-with-exactly-two-decimals-in-javascript



MBTA part 1

The implementation of this project correctly implements the main features laid out in the specs. The map takes up the entire page, it is centered on south station, each station has a marker with an icon that is not the standard marker, a red polyline connects each station appropriately (and takes into account the line split at JFK/UMass), and the project contains separate css and javascript files. The only sort of downfall was that I resized the icon image externally rather than using javascript (I could not figure out how to do so in javascript so I edited the actual file to change the image dimensions). 

I did not collaborate with anyone on this assignment, but I referenced the following google tutorials:
https://developers.google.com/maps/documentation/javascript/adding-a-google-map
https://developers.google.com/maps/documentation/javascript/examples/polyline-simple
https://developers.google.com/maps/documentation/javascript/tutorial
https://developers.google.com/maps/documentation/javascript/custom-markers
and the gmap_api_example.html.

I spent approximately 5-6 hours on this assignment. 