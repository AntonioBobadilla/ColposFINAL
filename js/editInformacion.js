function control() {
  let url = "http://35.223.20.167:8133/api/findUser";
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
      console.log(data);
      document.getElementById("nombre").value = data.datosUsuarios[0].nombre;
      document.getElementById("nombreUsuario").value = data.user[0].usuario;
      document.getElementById("emailUsuario").value = data.user[0].correo;
      document.getElementById("ciudad").value = data.ubicacions[0].ciudad;
      document.getElementById("codigoPostal").value = data.ubicacions[0].codigoPostal;
      document.getElementById("apellidoPaterno").value = data.datosUsuarios[0].apellidoPaterno;
      document.getElementById("apellidoMaterno").value = data.datosUsuarios[0].apellidoMaterno;
      document.getElementById("fechaNacimineto").value = data.datosUsuarios[0].nacimiento;
      document.getElementById("noCelular").value = data.user[0].celular;
      document.getElementById("estado").value = data.ubicacions[0].estado;
      document.getElementById("calle").value = data.ubicacions[0].calle;
      document.getElementById("idDatosUsuario").value = data.datosUsuarios[0].id;
      document.getElementById("idUsuario").value = data.user[0].id;
      document.getElementById("idUbicacion").value = data.ubicacions[0].id;
    },
    data: myuser
  });
}


function actualizar(){
  if($('#contrasenia').val() == localStorage.getItem('pass')){
    let myuser = {
      usuarios: {
          id: document.getElementById("idUsuario").value,
          usuario: document.getElementById("nombreUsuario").value,
          contrasena: localStorage.getItem('pass'),
          idDatosUsuario: document.getElementById("idDatosUsuario").value,
          correo: document.getElementById("emailUsuario").value,
          celular: document.getElementById("noCelular").value,
          idUbicacion: document.getElementById("idUbicacion").value
      },
      ubicacions: {
          id: document.getElementById("idUbicacion").value,
          codigoPostal: document.getElementById("codigoPostal").value,
          estado: document.getElementById("estado").value,
          ciudad: document.getElementById("ciudad").value,
          calle: document.getElementById("calle").value
      },
      datosUsuarios: {
          id: document.getElementById("idDatosUsuario").value,
          nombre: document.getElementById("nombre").value,
          apellidoPaterno: document.getElementById("apellidoPaterno").value,
          apellidoMaterno: document.getElementById("apellidoMaterno").value,
          nacimiento:  document.getElementById("fechaNacimineto").value
        }
    };
    console.log(myuser);
    let url = "http://35.223.20.167:8133/api/updateUsuarios";
    $.ajax({
    url: url,
    type: 'put',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      alert("Datos actualizados");

    },
    data: JSON.stringify(myuser)
  });
  }else{
    alert("Tas bien popo");
  }

}
