var socket = require('socket.io-client')('https://ws-api.iextrading.com/1.0/tops');
var http = require('http');
var clear = require('clear');
var figlet = require('figlet');
var chalk = require('chalk');

function consoleTicker(){

	socket.on('message', function(message){
		//console.log(message);

		var quotes = JSON.parse(message)
		//console.log(quotes);
		console.log(chalk.blue("Bid Price: " + quotes.bidPrice));
		console.log(chalk.redBright(figlet.textSync("QQQ " + quotes.bidPrice, {
			horizontalLayout: 'default',
	    	verticalLayout: 'default'
		})));
		console.log(chalk.red("Volume: " + quotes.volume));
		console.log(chalk.yellow("Size: " + quotes.lastSaleSize));

	});

	socket.on('connect', function(message){
		socket.emit('subscribe', 'QQQ');
	});
}

// consoleTicker();

function balance(){
	var balance = 1000;
	var newBalance = 0;
	return newBalance;
}
function buy(stockAmountBuy, priceB){
	return stockAmountBuy * priceB;
}

function sell(stockAmountSell, priceS){
	return stockAmountSell * priceS;
}

function algo(){

}

