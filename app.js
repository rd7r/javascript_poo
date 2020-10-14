class Product{

	constructor(name, price, year){
		this.name = name;
		this.price = price;
		this.year = year;
	}
}
class UI{

	addProduct(product){
		let productList = document.getElementById('product-list');
		//creamos un nuevo elemento con createElement
		let element = document.createElement('tr');
		element.innerHTML = `
						<tr>
							<td></td>
							<td>${product.name}</td>
							<td>${product.price}</td>
							<td>${product.year}</td>
						</tr>						
		`;
		//le vamos a decir que le vamos a insetar un elemento hijo con appendChild
		productList.appendChild(element);
	}

	deleteProduct(){

	}

	showMessage(){

	}

}
//capturamos el elemento id y el evento submit //DOM events
document.getElementById("product-form").addEventListener("submit", function(e){ //llamamos el evento e
	const name = document.getElementById('name').value;
	const price = document.getElementById('price').value;
	const year = document.getElementById('year').value;

	let product = new Product(name,price,year);
	let ui = new UI();
	ui.addProduct(product);
	//esto es para que deje de hacer refresh la pagina 
	e.preventDefault();
});