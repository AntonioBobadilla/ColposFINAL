function control() {
  var queryString = window.location.search;
  queryString = new URLSearchParams(queryString);
  let id = queryString.get('id');
  if(id == undefined || id == 0 || id == null || id == ""){
    window.location.href('misProductos.html');
  }
  let url = "http://35.223.20.167:8133/api/findProduct";
  let url2 = 'http://35.223.20.167:8133/api/getProductsCategorias';
  let url3 = 'http://35.223.20.167:8133/api/getCategorias';

  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      console.log(data);
      document.getElementById('id').value = data.productos[0].id;
      document.getElementById('nombre').value = data.productos[0].nombre;
      document.getElementById('descripcion').value = data.productos[0].descripcion;
      document.getElementById('imagen').value = data.productos[0].imagen;
      document.getElementById('imagenVista').src = data.productos[0].imagen;
      document.getElementById('imagenVista').alt = data.productos[0].nombre;
      document.getElementById('disponibles').value = data.productos[0].disponibles;
      document.getElementById('precio').value = data.productos[0].precio;
      $(".botones").html("<button type='button' class='button' onclick='borrar(" + data.productos[0].id + ")'>Borrar producto</button><button type='button' class='button' onclick='regresar()'>Regresar</button>");
    },
    data: {id: id}
  });

  $.ajax({
    url: url3,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data2){
      let datos = "";
      data2.categorias.forEach( item => {
        datos += "<label class='nombre'>" + item.nombre + "</label><input type='checkbox' id='check' class='" + item.idCategoria + "' value='" + item.idCategoria + "'>";
      });

      $('.checks').html(datos);

    },
    data: {}
  });

  $.ajax({
    url: url2,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      data.categoriaProductos.forEach((item) => {
        if(item.idProducto == id){
          document.getElementsByClassName(item.idCategoria)[0].checked = true;
        }
      });

    },
    data: JSON.stringify({id: id})
  });

}


function borrar(n){
  if(confirm("Seguro que quieres borrar el producto #"+n)){
    let url = "http://35.223.20.167:8133/api/deleteProduct";

    $.ajax({
      url: url,
      type: 'DELETE',
      dataType: 'json',
      contentType: 'application/json',
      success: function(data){
        console.log(data);
      },
      data: JSON.stringify({id: n})
    });
    window.location.href = "misProductos.html";
  }

}

function regresar(){
  window.location.href = "misProductos.html";
}


function guardarUnProd(){

  let n = document.getElementById('id').value;

  console.log(n);

  let url = "http://35.223.20.167:8133/api/updateProduct";

  let producto = {
    id: n,
    nombre: $('#nombre').val(),
    descripcion: $('#descripcion').val(),
    imagen: $('#imagen').val(),
    disponibles: $('#disponibles').val(),
    precio: $('#precio').val()
  }

  $.ajax({
    url: url,
    type: 'put',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      console.log(data);
      console.log("Actualizacion completa");
    },
    data: JSON.stringify(producto)
  });

  let url2 = 'http://35.223.20.167:8133/api/getProductsCategorias';
  let url22 = 'http://35.223.20.167:8133/api/deleteCategoriaProducto';

  $.ajax({
    url: url2,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      data.categoriaProductos.forEach((item) => {
        if(item.idProducto == n){
          $.ajax({
            url: url22,
            type: 'DELETE',
            dataType: 'json',
            contentType: 'application/json',
            success: function(data){},
            data: JSON.stringify({id: item.id})
          });

        }
      });

    },
    data: JSON.stringify({id: id})
  });

  let url3 = "http://35.223.20.167:8133/api/createCategoriaProducto";

  document.querySelectorAll('#check:checked').forEach( item => {
    console.log("Registrando id " + item.value);
    $.ajax({
      url: url3,
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      success: function(data3){
        console.log("Exito!");
      },
      data: JSON.stringify({
        idCategoria: item.value,
        idProducto: n
      })
    });

  });

}
