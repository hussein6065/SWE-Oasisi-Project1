// function getSomething() {
// 	// Api to use
// 	// https://www.coinapi.io/pricing?apikey for crypto
// 	// https://rapidapi.com/natkapral/api/currency-converter5 for the currency convertion
// }
var crypto_USD = null;
var currency_USD = null;
function getCurrencyRate() {
	fetch(
		'https://api.exchangerate.host/latest?base=NGN&symbols=USD,EUR,GHS,GBP,AUD',
		{
			method: 'GET',
		}
	)
		.then((response) => response.json())
		.then((data) => {
			currency_USD = data.rates;
			console.log(currency_USD);
		});
}

function getCoinRate() {
	fetch(
		'https://api.exchangerate.host/latest?base=USD&symbols=BTC,ETH,BNB,BCH,DOGE,DOT,ADA&source=crypto',
		{
			method: 'GET',
		}
	)
		.then((response) => response.json())
		.then((data) => {
			crypto_USD = data.rates;
			console.log(crypto_USD);
		});
}

window.addEventListener(
	'DOMContentLoaded',
	() => {
		getCoinRate();
		getCurrencyRate();
	},
	false
);
