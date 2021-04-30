var url = "http://35.223.20.167:8133/api/findUser";

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
      if(data.error){
        $('.error').html("Datos incorrectos.");
      }else{
          myStorage = window.localStorage;
          localStorage.setItem('user', usuario);
          localStorage.setItem('pass', pwd);
          window.location.href = 'user.html';
      }
    },
    data: myuser
  });
}


function control(){
  postUser();
}
