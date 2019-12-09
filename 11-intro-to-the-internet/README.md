Intro to the Internet
===

## First....
* What will you get out of this Mod?
  * Developer -> Web Developer












## Introduction to the Internet

* What is the difference between the Internet and the Web?
Internet -> hardware: connections, server
Web -> softare: where we get info, how different computers can talk to each other

  * http://info.cern.ch/hypertext/WWW/TheProject.html















* How is data sent over the internet?
  * TCP - Transmission Control Protocol -> how data gets sent
  * IP - Internet Protocol, IP Adress -> where
  * HTTP - HyperText Transfer Protocol - what kind of data
  * HTML - HyperText Markup Language













* How can I find out the IP address of www.google.com using a terminal command? What kind of server makes this lookup possible?
  * DNS (Domain Name System)
    google.com -> 172.217.11.14
  * `nslookup`/Network Utility
  * https://iplocation.com/













* What is a server? What is a client?
server -> machines, big rack of blocks, usually no monitor, can have a big database -> something that can receive requests from the internet and return responses
client -> browser, Chrome, curl, Postman 

* What is the request / response cycle?


* With a client and server, which makes the request? Which sends the response?














* What is a HTTP request? Make a few, using at least two of these tools: Google Chrome, Postman, curl
* What are the parts of a HTTP request
  * Use a web browser to find the headers for an HTTP request. What do you think these headers do?
  * What is usually in the body of an HTTP _response_?
  * What is a HTTP status code? What do the codes 200, 404, 500, 503, 302, 422 and 418 mean?
    * https://http.cat/
  * Why do we use HTTP verbs? What is the difference between what GET, POST, PUT, PATCH, and DELETE requests do?

  C - POST
  R - GET
  U - PUT (change the whole row)/PATCH (change some part)
  D - DELETE  

 * How can we change information in the request? 
    * google seach -> query params

https:// -> protocol
www.google.com -> domain
/search -> path (resource)
?
q=ruby
-> query params
    * espn.com -> routes/resources
    
* What's the difference between static and dynamic websites? What are some of the benefits of a dynamic website?

*************** 3 min break! ********************


## Intro to Sinatra
* Build a basic web app in 30 seconds
* Do basic web requests in Sinatra
* Explain what Sinatra is
