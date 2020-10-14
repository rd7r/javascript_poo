<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Product App</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
	
	<!--navegation-->
	<nav class="navbar navbar-dark bg-danger">
		<a href="" class="navbar-brand">
			Product App
		</a>
	</nav>
	<!--navegation-->
	<!--Contenido de la Pagina-->

	<div class="container">
		
		<div class="row mt-5 pt-5" id="App">
			
			<div class="col-md-4 card">
				<div class="card-header"><h3 class="card-title text-center">Add a Product</h3></div>
				<div class="card-body">
					<form action="" id="" class="form-group">
						<input type="text" required id="name" name="" placeholder="Product Name" class="form-control my-3">
						<input type="number" required step="0.01" id="price" name="" placeholder="Product Price" class="form-control my-3"><!--is-invalid -->
						<input type="number" required id="year" name="" value="2020" class="form-control my-3">
						<button class="btn btn-outline-success btn-block" type="submit"><b>Save</b></button>
					</form>
				</div>
			</div>
			<div class="ml-5 col-md-7 alert alert dismissible alert-success" id="product-list">
				
			</div>

		</div>

	</div>
<script type="text/javascript" src="app.js"></script>
</body>
</html>