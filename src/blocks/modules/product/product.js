
const products = document.querySelectorAll('.product')
products.forEach(function (product){
	const decrease = product.querySelector('.counter__decrease');
	const increase = product.querySelector('.counter__increase');
	let productCount = product.querySelector('.counter__count').value
	const productBasket = product.querySelector('.counter__basket');

	increase.addEventListener('click', function () {
		productCount++
		product.querySelector('.counter__count').value = productCount
	});

	decrease.addEventListener('click', function () {
		
		if(productCount===0){
			emptyCard()
		}
		else{
			productCount--
			product.querySelector('.counter__count').value = productCount
		}
	});

	function emptyCard(){
		productCount= 0
		product.querySelector('.counter__count').value = productCount
	}

	productBasket.addEventListener('click', function () {
		emptyCard()
	});

	const btnToggler = product.querySelectorAll('.btn--toggler');

	btnToggler.forEach((btn)=>{
		btn.addEventListener('click', function() {
			btnToggler.forEach((btn)=>{
				btn.classList.remove('btn--toggler--active')
			})
			btn.classList.add('btn--toggler--active')
		})
	})

})


