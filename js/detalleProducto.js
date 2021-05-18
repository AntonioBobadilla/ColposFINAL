function control(){
  var queryString = window.location.search;
  queryString = new URLSearchParams(queryString);
  let id = queryString.get('id');
  let url = "http://35.232.232.192:8133/api/findProduct";
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(datas){
      $('.nombre').html("<h2>" + datas.productos[0].nombre + "</h2><hr>");
      $('#descripcion').html("<p>" + datas.productos[0].descripcion + "</p>");
      document.getElementsByClassName("imagen__prod")[0].style.backgroundImage =  "url('" + datas.productos[0].imagen + "')";
      $('.precio').html("<hr><p>" + datas.productos[0].precio + ".00$</p>");
      $('#disponibles').html("<p>Disponibles: " + datas.productos[0].disponibles + "</p>");

      let informacionPR = {
        idDatosUsuario: datas.productos[0].idUsuario
      };
      let url2 = "http://35.232.232.192:8133/api/findUserID";
      $.ajax({
        url: url2,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data2){
          $('.vendedor').html("<p>Vendedor: <a href='#'>" + data2.datosUsuarios.nombre + " " + data2.datosUsuarios.apellidoPaterno + " " + data2.datosUsuarios.apellidoMaterno + "</a> </p>");
          $('#celular').html("<p>Celular: " + data2.usuarios.celular + "</p>");
        },
        data: informacionPR
      });
    },
    data: {id: id}
  });


}

function regresar(){
  window.history.back();
}
