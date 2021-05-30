function enviar(){

  let url = 'http://35.232.232.192:8133/api/createProduct';
  let url2 = "http://35.232.232.192:8133/api/findUser";
  let url3 = "http://35.232.232.192:8133/api/createCategoriaProducto";

  var myuser = {
    usuarios: localStorage.getItem('user'),
    pass: localStorage.getItem('pass')
  };



  $.ajax({
    url: url2,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      var producto = {
        nombre: $('#nombre').val(),
        descripcion: $('#descripcion').val(),
        imagen: $('#imagen').val(),
        idUsuario: data.user[0].id,
        disponibles: $('#disponibles').val(),
        precio: $('#precio').val()
      }
      $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data2){
          console.log("Registro exitoso");

          document.querySelectorAll('#check:checked').forEach( item => {
            console.log("Registrando id" + item.value);
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
                idProducto: data2.productos.id
              })
            });

          });
          document.getElementById("formulario").reset();

        },
        data: JSON.stringify(producto)
      });


    },
    data: myuser
  });

}


function categorias(){
  let url = 'http://35.232.232.192:8133/api/getCategorias';

  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data2){
      let datos = "";
      data2.categorias.forEach( item => {
        datos += "<label class='nombre'>" + item.nombre + "</label><input type='checkbox' id='check' value='" + item.idCategoria + "'>";
      });

      $('.checks').html(datos);

    },
    data: {}
  });

}
