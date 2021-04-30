var url = "http://35.223.20.167:8133/api/findUser";

function postUser() {
  myStorage = window.localStorage;
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
      $('#texto1').html(data.datosUsuarios[0].nombre);
      $('#texto2').html(data.user[0].usuario);

      $('#nombre').html(data.datosUsuarios[0].nombre);
      $('#usuario').html(data.user[0].usuario);
      $('#correo').html(data.user[0].correo);
      $('#ciudad').html(data.ubicacions[0].ciudad);
      $('#cp').html(data.ubicacions[0].codigoPostal);
      $('#apellidos').html(data.datosUsuarios[0].apellidoPaterno + " " + data.datosUsuarios[0].apellidoMaterno);
      $('#nacimiento').html(data.datosUsuarios[0].nacimiento);
      $('#celular').html(data.user[0].celular);
      $('#estado').html(data.ubicacions[0].estado);
      $('#calle').html(data.ubicacions[0].calle);

      /*let web = "<p class='parametro'><label>Nombre</label>" + data.datosUsuarios[0].nombre + "</p>";
      web += "<p class='parametro'><label>Apellidos</label>" + data.datosUsuarios[0].apellidoPaterno + " " + data.datosUsuarios[0].apellidoMaterno + "</p>";
      web += "<p class='parametro'><label>Usuario</label>" + data.user[0].usuario + "</p>";
      web += "<p class='parametro'><label>Nacimiento</label>" + data.datosUsuarios[0].nacimiento + "</p>";
      web += "<p class='parametro'><label>Correo</label>" + data.user[0].correo + "</p>";
      web += "<p class='parametro'><label>Celular</label>" + data.user[0].celular + "</p>";
      web += "<p class='parametro'><label>Codigo Postal</label>" + data.ubicacions[0].codigoPostal + "</p>";
      web += "<p class='parametro'><label>Estado</label>" + data.ubicacions[0].estado + "</p>";
      web += "<p class='parametro'><label>Ciudad</label>" + data.ubicacions[0].ciudad + "</p>";
      web += "<p class='parametro'><label>Calle</label>" + data.ubicacions[0].calle + "</p>";
      $('.informacion').html(web);*/
    },
    data: myuser
  });
}


function control(){
  postUser();
}


function cerrar(){
  storage = window.localStorage;
  storage.removeItem("user");
  storage.removeItem("pass");
  window.location.href = 'login.html';
}

function redirect1(){
  window.location.href = 'misProductos.html';
}
