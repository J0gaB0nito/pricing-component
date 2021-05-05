const range = document.querySelector(".range");
const rangeLabel = document.querySelector(".range__label");
const price = document.querySelector(".price__bold");
const discount = document.querySelector(".switch");
const prices = ["8.00", "12.00", "16.00", "24.00", "36.00"];
const pageviews = ["10k", "50k", "100k", "500k", "1M"];
const PERCENTS = 0.75;

// Changing the price and pagevieves depending on range value

function getValues() {
	let newPrice = getPrice(prices);
	rangeLabel.textContent = `${pageviews[this.value - 1]} pageviews`;
	price.textContent = `$${newPrice[this.value - 1]}`;
}

// Checks if user choose price with discount

function getDiscount(price){
	return price.map((el) => el * PERCENTS + `.00`);
}

function getPrice(price) {
	let priceDiscount = price;
	if (discount.checked) {
		priceDiscount = getDiscount(price);
	}
	return priceDiscount;
}

// Colorize the bar depending on value - changing the :before width value.

function getSliderColor() {
	const root = document.querySelector(":root");
	const index = (this.value - 1) / (prices.length - 1);
	root.style.setProperty("--pseudo-width", `${100 - index * 100}%`);
}

range.addEventListener("input", getValues);
range.addEventListener("input", getSliderColor);
discount.addEventListener("input", getValues.bind(range));
