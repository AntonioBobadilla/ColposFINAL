var url = "http://35.232.232.192:8133/api/getUsers";

function postUser() {

  const usuario = $("#usuario").val();
  const pwd = $("#contrasena").val();


  var myuser = {
    usuarios: usuario,
    pass: pwd
  };

  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      console.log(data);
      let tabla1 = "<thead class='table-primary'><tr><th scope='col'>ID</th><th scope='col'>Usuario</th><th scope='col'>idDatosUsuario</th><th scope='col'>Correo</th><th scope='col'>Celular</th><th scope='col'>idUbicacion</th></tr></thead><tbody>";
      data.usuarios.forEach( item => {
        tabla1 += "<tr>";
        tabla1 += "<td>" + item.id + "</td>";
        tabla1 += "<td>" + item.usuario + "</td>";
        tabla1 += "<td>" + item.idDatosUsuario + "</td>";
        tabla1 += "<td>" + item.correo + "</td>";
        tabla1 += "<td>" + item.celular + "</td>";
        tabla1 += "<td>" + item.idUbicacion + "</td>";
        tabla1 += "</tr></tbody>";
      });
      $('#tablita1').html(tabla1);

      let tabla2 = "<thead class='table-dark'><tr><th scope='col'>ID</th><th scope='col'>Codigo Postal</th><th scope='col'>Estado</th><th scope='col'>Ciudad</th><th scope='col'>Calle</th></tr></thead><tbody>";
      data.ubicacions.forEach( item => {
        tabla2 += "<tr>";
        tabla2 += "<td>" + item.id + "</td>";
        tabla2 += "<td>" + item.codigoPostal + "</td>";
        tabla2 += "<td>" + item.estado + "</td>";
        tabla2 += "<td>" + item.ciudad + "</td>";
        tabla2 += "<td>" + item.calle + "</td>";
        tabla2 += "</tr></tbody>";
      });
      $('#tablita2').html(tabla2);

      let tabla3 = "<thead class='table-danger'><tr><th scope='col'>ID</th><th scope='col'>Nombre</th><th scope='col'>Apellido Paterno</th><th scope='col'>Apellido Materno</th><th scope='col'>Nacimiento</th></tr></thead><tbody>";
      data.datosUsuarios.forEach( item => {
        tabla3 += "<tr>";
        tabla3 += "<td>" + item.id + "</td>";
        tabla3 += "<td>" + item.nombre + "</td>";
        tabla3 += "<td>" + item.apellidoPaterno + "</td>";
        tabla3 += "<td>" + item.apellidoMaterno + "</td>";
        tabla3 += "<td>" + item.nacimiento + "</td>";
        tabla3 += "</tr></tbody>";
      });
      $('#tablita3').html(tabla3);
    },
    data: myuser
  });
}


function control(){
  postUser();
}
