function getAllProduct(){
  let url = "http://35.232.232.192:8133/api/getProducts";
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      let product = "";
      data.productos.forEach(item => {
        product += "<div class='card'><div class='imagen-card'><img src='" + item.imagen + "' alt=''></div><div class='titulo-card'><a href='detalleProducto.html?id=" + item.id + "'>Ver " + item.nombre + "</a></div></div>";
      });
      $('.wrap-categorias').html(product);

    },
    data: {}
  });
}


function getProduct(id){
  let url = "http://35.232.232.192:8133/api/getProducts";
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      let proDD = data.productos;
      let url2 = "http://35.232.232.192:8133/api/getProductsCategorias";

      $.ajax({
        url: url2,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data2){


          let products = [];
          data2.categoriaProductos.forEach( item => {
            if(item.idCategoria == id){
              products.push(
                proDD.find(elem => elem.id == item.idProducto)
              );
            }
          });

          let htmlP = "";

          products.forEach( item => {
            htmlP += "<div class='card'><div class='imagen-card'><img src='" + item.imagen + "' alt=''></div><div class='titulo-card'><a href='detalleProducto.html?id=" + item.id + "'>Ver " + item.nombre + "</a></div></div>";
          });
          $('.wrap-categorias').html(htmlP);
        },
        data: {}
      });

    },
    data: {}
  });


}



function productos(){
  var queryString = window.location.search;
  queryString = new URLSearchParams(queryString);
  let id = queryString.get('id');
  let nombre = queryString.get('nombre');
  $('#Categoria').html("Nuestros productos");
  if(nombre != null){
    $('#Categoria').html("Productos de " + nombre);
  }
  if(id == null || id == 0){
    getAllProduct();
  }else{
    getProduct(id);
  }
}
