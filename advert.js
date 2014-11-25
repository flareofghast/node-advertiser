/**
 *  based on the work from kebian
 *  http://void7.net/advertising-linux-minecraft-servers-to-the-lan/
 *  author: FlareOfGhast
 */

var keypress = require('keypress');
var dgram = require('dgram');
var socket = dgram.createSocket("udp4");
var broadcastIP = "255.255.255.255"
var broadcastPort = 4445
var child = require('child_process');

// add your servers like the example separated by commas eg. [MOTD,PORT],[MOTD,PORT] 
// there is no tailing comma
var servers = [
	["A MOTD here", 25565]
];

// allow broadcast
socket.bind( function(){
	socket.setBroadcast(true);
});

// simple output
console.log("Broadcasting Minecraft servers to LAN")

// run broadcast method every 1500 ms
setInterval(broadcast,1500);


function broadcast() {
	// for each server in servers[] create a new message and send through socket
	for (var i in servers){
                var msg =  new Buffer("[MOTD]" + servers[i][0] + "[/MOTD][AD]" + servers[i][1] + "[/AD]");
                socket.send(msg, 0, msg.length, broadcastPort, broadcastIP, function(err, bytes) {
                	// call back, launches this code once message is sent
		});
    };
}
