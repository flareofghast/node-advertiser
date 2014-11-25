/**
 *  based on the work from kebian
 *  http://void7.net/advertising-linux-minecraft-servers-to-the-lan/
 *  author: FlareOfGhast
 */

var child = require('child_process');
var proc;

// add your servers like the example separated by commas eg. [MOTD,PORT],[MOTD,PORT] 
// there is no tailing comma
var servers = [
	["A MOTD here", 25565],
	["A Second MOTD",25566]
];

// simple output not necessary really
console.log("Broadcasting Minecraft servers to LAN");

// spawn child process to run in the background
proc = child.spawn("node", ["broadcast", servers]);
proc.on('error', function(e){console.log(e)});

// test that the code has continued on.
// console.log("Still running on");