node-advertiser
===============

Node.js implementation of minecraft advertiser

First make sure you add your server MOTD and port to the servers variable 
as detailed in the node.js file. Then run.

node advert.js

This version has been created/updated to launch the broadcast in a child process. This will allow for integration into a program without tying up the process.

broadcast.js can be run independently by specifying as many servers as you wish in the following manner

node broadcast.js MOTD,PORT,MOTD,PORT
