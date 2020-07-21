
const products = document.querySelectorAll('.product')
products.forEach(function (product){
	const decrease = document.querySelector('.product-decrease');
	const increase = document.querySelector('.product-increase');
	let productCount = document.querySelector('.product-count').innerText
	const productBasket = document.querySelector('.product-basket');

	increase.addEventListener('click', function () {
		productCount++
		document.querySelector('.product-count').innerText = productCount
	});

	decrease.addEventListener('click', function () {
		
		if(productCount===0){
			emptyCard()
		}
		else{
			productCount--
			document.querySelector('.product-count').innerText = productCount
		}
	});

	function emptyCard(){
		productCount= 0
		document.querySelector('.product-count').innerText = productCount
	}

	productBasket.addEventListener('click', function () {
		emptyCard()
	});

})
