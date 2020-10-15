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
							<td><a href='' class='btn btn-danger' name='delete'>Eleminar</a></td>
						</tr>						
		`;
		//le vamos a decir que le vamos a insetar un elemento hijo con appendChild
		productList.appendChild(element);
	}
	//this is from reset el form
	resetform(){
		document.getElementById('product-form').reset();
	}

	deleteProduct(element){
		//comparamos el elemento a su name que es delete
		if(element.name === 'delete'){
			//aqui removemos el elemento padre de a y td que es tr
			element.parentElement.parentElement.remove();
		}
	}

	showMessage(message, cssClass){
		let alert = document.createElement('div');
		alert.className = `alert alert-${cssClass} mt-3 text-center`;
		//createTextNode= es insertar un text dentro del div
		alert.appendChild(document.createTextNode(message));
		//mostrando en el dom
		let container = document.querySelector('.container');
		let app = document.querySelector('#App');
		container.insertBefore(alert, app);
		setTimeout(function(){
			document.querySelector('.alert').remove();
		},3000);
	}

}
//capturamos el elemento id y el evento submit //DOM events
document.getElementById("product-form").addEventListener("submit", function(e){ //llamamos el evento e
	let name = document.getElementById('name').value;
	let price = document.getElementById('price').value;
	let year = document.getElementById('year').value;

	let product = new Product(name,price,year);
	let ui = new UI();
	if(name === '' || price === '' || year === ''){
		ui.showMessage('Complete los campos', 'warning');
	}else{
		ui.addProduct(product);
		ui.resetform();
		let message = 'Se inserto los datos exitosamente';
		ui.showMessage(message,'success');
		//esto es para que deje de hacer refresh la pagina 
		e.preventDefault();
	}
});

document.getElementById('product-list').addEventListener('click', function(e){
	let ui = new UI();
	ui.deleteProduct(e.target);
	let message = 'Se elimino los datos exitosamente';
	ui.showMessage(message,'danger');
	e.preventDefault();
});