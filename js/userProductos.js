function editar(n){
  window.location.href = "editarProducto.html?id="+n;
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
  }
}


function getProducts(){
  let url = "http://35.223.20.167:8133/api/findUser";
  let url2 = "http://35.223.20.167:8133/api/getProducts";

  var myuser = {
    usuarios: localStorage.getItem('user'),
    pass: localStorage.getItem('pass')
  };

  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      if(data.error){
        window.location.href = 'login.html';
      }
      let idUser = data.user[0].id;
      $.ajax({
        url: url2,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data2){
          let productos = "";
          data2.productos.forEach(item => {
            if(item.idUsuario == idUser){
              productos += "<div class='tarjeta'><div class='imagen' style='background-image: url(" + item.imagen + ")'></div><button type='button' onclick='editar(" + item.id + ")' id='editar'><i class='fas fa-edit'></i></button><button type='button' onclick='borrar(" + item.id + ")' id='borrar'><i class='fas fa-minus-circle'></i></button><div class='Informacion'><p id='nombre'><mark>" + item.nombre + "</mark></p><p id='detalle'>" + item.precio + ".00<label id='cantidad'>" + item.disponibles + "</label></p><p id='descripcion'>" + item.descripcion + "</p></div></div>";
            }
          });

          $('.contenedor').html(productos);

        },
        data: {}
      });

    },
    data: myuser
  });

}


function registrar(){
  window.location.href = "registroProd.html";
}
