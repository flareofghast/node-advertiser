/**
 *  based on the work from kebian
 *  http://void7.net/advertising-linux-minecraft-servers-to-the-lan/
 *  author: FlareOfGhast
 */

var keypress = require('keypress');
var child = require('child_process');
var proc;
// add your servers like the example separated by commas eg. [MOTD,PORT],[MOTD,PORT] 
// there is no tailing comma
var servers = [
	["A MOTD here", 25565]
];

// simple output
console.log("Broadcasting Minecraft servers to LAN")

proc = child.spawn("node", ["broadcast",]);
proc.on('error', function(e){console.log(e)});
