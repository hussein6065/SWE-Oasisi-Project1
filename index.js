// function getSomething() {
// 	// Api to use
// 	// https://www.coinapi.io/pricing?apikey for crypto
// 	// https://rapidapi.com/natkapral/api/currency-converter5 for the currency convertion
// }
var crypto_USD = null;
var currency_USD = null;
var currency_sign = {
	USD: '$',
	GHS: '₵',
	GBP: '£',
	EUR: '€',
	AUD: 'AU$‎',
	ADA: '₳',
	BNB: 'BNB',
	ETH: 'ETH',
	BCH: 'BCH',
	DOT: 'DOT',
	DOGE: 'DOGE',
	BTC: '',
};
var ob = document.createElement('i');
ob.className = 'fab fa-btc';
currency_sign.BTC = ob;
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
// document.getElementById('currencyInput').parentNode.children[2].value
var input = document.getElementById('currencyInput');
var output = document.getElementById('currencyOutput');
var cryptOutput = document.getElementById('cryptoOutput');

function convert() {
	if (crypto_USD != null && currency_USD != null) {
		output.value = currency_C(output.parentNode.children[2].value, input.value);
		cryptOutput.value = crypto_C(
			cryptOutput.parentNode.children[2].value,
			input.value
		);
		var item = cryptOutput.parentNode.children[2].value;
		if (item == 'BTC') {
			cryptOutput.parentNode.children[0].children[0].replaceChild(
				currency_sign[item],
				cryptOutput.parentNode.children[0].children[0].firstChild
			);
			// .append(currency_sign[item]);
		} else {
			cryptOutput.parentNode.children[0].children[0].innerHTML =
				currency_sign[item];
		}
	}
}
// function inverseConvertCur() {
// 	if (crypto_USD != null && currency_USD != null) {
// 		input.value = inverseCurrency_C(
// 			output.parentNode.children[2].value,
// 			output.value
// 		);
// 	}
// }

function onchangeNGN_CUR() {
	output.value = currency_C(output.parentNode.children[2].value, input.value);
	output.parentNode.children[0].children[0].innerHTML =
		currency_sign[output.parentNode.children[2].value];
}
function inverseConvertCur() {
	if (crypto_USD != null && currency_USD != null) {
		input.value = inverseCurrency_C(
			output.parentNode.children[2].value,
			output.value
		);
		cryptOutput.value = crypto_C(
			cryptOutput.parentNode.children[2].value,
			input.value
		);
	}
}
function inverseConvertcrypto() {
	if (crypto_USD != null && currency_USD != null) {
		input.value = inverserCrypto_C(
			cryptOutput.parentNode.children[2].value,
			cryptOutput.value
		);
	}
}
function currency_C(curOutput, value) {
	return currency_USD[curOutput] * value;
}
function crypto_C(curOutput, value) {
	return value * currency_USD.USD * crypto_USD[curOutput];
}
function inverseCurrency_C(curInput, value) {
	return (1 / currency_USD[curInput]) * value;
}
function inverserCrypto_C(input, value) {
	return value / crypto_USD[input] / currency_USD.USD;
}
window.addEventListener(
	'DOMContentLoaded',
	() => {
		getCoinRate();
		getCurrencyRate();
	},
	false
);
function cryptoConvert(item) {
	return 1 / crypto_USD[item] / currency_USD.USD;
}
if (crypto_USD != null && currency_USD != null) {
	var table = document.getElementsByTagName('Tbody')[0].children;
	for (var i = 0; i < 6; i++) {
		var item = table[i];
		item.children[1].innerHTML = cryptoConvert(table[i].id);
		console.log(table[i].id);
	}
}

setTimeout(() => {
	if (crypto_USD != null && currency_USD != null) {
		var table = document.getElementsByTagName('Tbody')[0].children;
		for (var i = 0; i < 6; i++) {
			var item = table[i];
			item.children[1].innerHTML = `${'₦'} ${parseFloat(
				cryptoConvert(table[i].id)
			).toFixed(2)}`;
			console.log(table[i].id);
			Math.r;
		}
	}
}, 3000);
