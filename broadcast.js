/**
 * broadcast section for advertisement
 */
var dgram = require('dgram');
var socket = dgram.createSocket("udp4");
var broadcastIP = "255.255.255.255";
var broadcastPort = 4445;

//allow broadcast
socket.bind(function(){
	socket.setBroadcast(true);
	socket.setMulticastTTL(1);
});
	
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