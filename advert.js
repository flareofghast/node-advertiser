/**
 *  based on the work from kebian
 *  http://void7.net/advertising-linux-minecraft-servers-to-the-lan/
 *  author: FlareOfGhast
 */

var dgram = require('dgram');
var BROADCAST_DELAY_MS = 4000;
var broadcastIP = "255.255.255.255"
var broadcastPort = 4445
var servers = require('./servers');
var udp_broadcaster;

// simple output
console.log("Broadcasting Minecraft servers to LAN")

// run broadcast method every BROADCAST_DELAY_MS
setInterval(broadcast, BROADCAST_DELAY_MS);


function broadcast() {
	// for each server in servers[] create a new message and send through socket
	servers.forEach(srv => {
		var msg = Buffer.from(`[MOTD]${srv.motd}[/MOTD][AD]${srv.port}[/AD]`);
		if (msg) {
			if (udp_broadcaster) {
			  udp_broadcaster.send(msg, 0, msg.length, broadcastPort, broadcastIP);
			} else {
			  udp_broadcaster = dgram.createSocket('udp4');
			  udp_broadcaster.bind(broadcastPort, srv.ip);
			  udp_broadcaster.on('listening', function () {
				udp_broadcaster.setBroadcast(true);
				udp_broadcaster.send(msg, 0, msg.length, broadcastPort, broadcastIP);
			  });
			  udp_broadcaster.on("error", function (err) {
				logging.error("Cannot bind broadcaster");
			  });
			}
		  }
		});
	  }
