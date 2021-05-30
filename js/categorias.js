var url = "http://35.232.232.192:8133/api/getCategorias";

function categorias() {
  var datos = {};

  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      let category = "";
      category +="<div class='card'><div class='imagen-card'><img src='" + "https://firebasestorage.googleapis.com/v0/b/colposfinal.appspot.com/o/jason-blackeye-K1uLEiqTQEA-unsplash.jpg?alt=media&token=2bdbaad9-5b85-4993-b5ef-505fb18cbcd0" + "' alt='" + "Todas las categorias" + "'></div><div class='titulo-card'><a onclick=redireccion(" + 0 + ",";
      category += "'" + "todo" + "'";
      category += ")>" + "Todas las categorias" + "</a><p>" + "Explora todo nuestro catalogo" + "</p></div></div>";
      data.categorias.forEach(item => {
        category +="<div class='card'><div class='imagen-card'><img src='" + item.imagen + "' alt='" + item.nombre + "'></div><div class='titulo-card'><a onclick=redireccion(" + item.idCategoria + ",";
        category += "'" + item.nombre + "'";
        category += ")>" + item.nombre + "</a><p>" + item.descripcion + "</p></div></div>";
      });

      $('.wrap-categorias').html(category);

    },
    data: datos
  });
}


function redireccion(n, f){
  if(n != 0){
    window.location.href = 'productos.html?id='+n+'&nombre='+f;
  }else{
    window.location.href = 'productos.html';
  }
}
