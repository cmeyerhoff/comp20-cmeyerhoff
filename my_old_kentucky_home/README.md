#Lab 6 - My Old Kentucky Home

Using the given html file, I added Javascript such that the lyrics to the song "My Old Kentucky Home" are displayed under the video as it plays. This functions as described by the spec. 

I initially had a solution that relied on a single time/switching point and one if statement to display lyrics. I chose it as it seemed like an elegant solution. While I determined this did what the assignment asked, and eschwed the need for writing out many if statements, or adding ranges to array of times, it did not work if the user reversed the video. The current method keeps single switch times, but checks if the current time matches with the lyrics being displayed on both ends of the switching period (it uses the previous switch time as the lower bound for the time range in lieu of explicitly adding that data to the array/list). The two images to go with the lyrics are displayed before the first stanza and after the last stanza.

I did not work with anyone on this assignment, but referenced https://tuftsdev.github.io/WebProgramming/examples/doublerainbow/ as an example. I took me approximately four hours to complete this assignment.