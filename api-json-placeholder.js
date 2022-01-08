function listarUsuarios(){
	let listadoUsuarios = document.getElementById('usuarios')
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(function(respuesta){
			respuesta.json().then(function (datos){
				let usuarioHTML = ''
				for (let i = 0; i < datos.length; i++) {
					let usuarioActual = datos[i];
					usuarioHTML +=`
					<tr>
				  <th scope="row">${usuarioActual.id}</th>
				  <td>${usuarioActual.name}</td>
				  <td>${usuarioActual.username}</td>
				  <td>${usuarioActual.email}</td>
				  <td>${usuarioActual.phone}</td>
				  <td>${usuarioActual.website}</td>
				  <td>${usuarioActual.address.street}</td>
				  <td>${usuarioActual.company.name}</td>
				</tr>
				`;
				}
				listadoUsuarios.innerHTML = usuarioHTML;
			});
		})
		.catch(function (error){
			alert('Estoy en el error!');
			console.log(error)
		});
}

function listarComentarios(){
	let contenidoComentarios = document.getElementById('contenido-comentarios')
	fetch('https://jsonplaceholder.typicode.com/comments')
	.then(function(respuesta){
		respuesta.json().then(function(datos){
			let comentariosHTML = ''
			for (let i = 0; i < datos.slice(0,10).length; i++) {
				let comentarioActual = datos[i];
				comentariosHTML +=`
				<div class="col-sm-3 mb-1">
				  <div class="card" style="width: 18rem;">
					<div class="card-body">
					  <h5 class="card-title">${comentarioActual.name}</h5>
					  <h6 class="card-subtitle mb-2 text-muted">${comentarioActual.email}</h6>
					  <p class="card-text">${comentarioActual.body}</p>
					</div>
				</div>
			</div>
			`;
				
			}
			contenidoComentarios.innerHTML = comentariosHTML;
		})

	})
	.catch(function(error){
		alert('Estoy en el error dentro de listado de comentarios')
		console.log(error);
	})
}

function listarImagenes(){
	let contenidoGaleria=document.getElementById('fotos')
	fetch('https://jsonplaceholder.typicode.com/photos')
	.then(function(respuesta){
		respuesta.json().then(function(datos){
			let imagenesHTML =''
			for (let i = 0; i < datos.slice(0,10).length; i++) {
				let imagenActual = datos[i];
				imagenesHTML +=`
				<div class="col-sm-3">
					<div class="card" style="width: 18rem;">
						<img src="${imagenActual.thumbnailUrl}">
						<div class="card-body">
						  <p class="card-text">${imagenActual.title}</p>
						</div>
					  </div>
				</div>
				`;
				
			}
			contenidoGaleria.innerHTML = imagenesHTML
		})
	})
}

listarUsuarios()
listarComentarios()
listarImagenes()


