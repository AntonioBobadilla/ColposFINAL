function cambiar(){
  myStorage = window.localStorage;
  if($('#antigua').val() == localStorage.getItem('pass') && $('#nueva').val() == $('#nueva2').val()){
    let url = "http://35.223.20.167:8133/api/updateContrasenia";
    console.log($('#nueva').val());
    console.log($('#antigua').val());
    console.log(localStorage.getItem('pass'));
    console.log(localStorage.getItem('user'));
    $.ajax({
      url: url,
      type: 'put',
      dataType: 'json',
      contentType: 'application/json',
      success: function(data){
        localStorage.setItem('pass', $('#nueva').val());
        window.location.href = 'user.html';
      },
      data: JSON.stringify({
        usuarios: localStorage.getItem('user'),
        pass: localStorage.getItem('pass'),
        contrasenaN: $('#nueva').val()
      })
    });
  }else{
    alert("Revisa bien tus datos");
  }
}
