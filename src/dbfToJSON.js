var Parser = require('node-dbf');
var fs = require('fs')

if (process.argv.length < 2)
{
	console.log("Usage: dbfToJSON [DBF File] [Output File]");
	process.exit(1);
}

var parser = new Parser(process.argv[1]);
var dump = [];
filename = process.argv[2] ? process.argv[2] : process.argv[1];
filename += '.txt';

parser
	.on('start', function(){
		console.log('Parsing ' + process.argv[1]);
	})
	.on('header', function(data){
		//console.log(data);
	})
	.on('record', function(data){
		//console.log(data);
		dump.push(data);
	})
	.on('end', function(){
		//console.log(dump);
		// var date = new Date(),
		// 	y = date.getFullYear(),
		// 	month = date.getMonth(),
		// 	m = month > 9 ? month : "0" + month,
		// 	day = date.getDate(),
		// 	d = day > 9 ? day : "0" + day;
		var dumpString = JSON.stringify(dump);
		var buffer = fs.writeFile(filename , dumpString, function(args){
			process.exit();
		})
	})
	.parse()