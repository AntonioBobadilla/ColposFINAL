var url = "http://35.223.20.167:8133/api/createUser";

function postUser() {
  var myuser = {
    usuarios: {
        usuario: $('#nombreUsuario').val(),
        contrasena: $('#contrasenia').val(),
        idDatosUsuario: 1,
        correo: $('#emailUsuario').val(),
        celular: $('#noCelular').val(),
        idUbicacion: 1
    },
    ubicacions: {
        codigoPostal: $('#codigoPostal').val(),
        estado: $('#estado').val(),
        ciudad: $('#ciudad').val(),
        calle: $('#calle').val()
    },
    datosUsuarios: {
        nombre: $('#nombre').val(),
        apellidoPaterno: $('#apellidoPaterno').val(),
        apellidoMaterno: $('#apellidoMaterno').val(),
        nacimiento: $('#fechaNacimineto').val()
      }
  };

  console.log(myuser);

  $.ajax({
    url: url,
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      alert("Registro terminado exitosamente!");
      window.location.href = 'login.html';
    },
    data: JSON.stringify(myuser)
  });
}
