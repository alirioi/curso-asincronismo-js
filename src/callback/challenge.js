const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

//función principal que obtendrá la información del producto como un objeto JSON
function fetchData(urlApi, callback) {
  //inicializar un objeto de tipo XMLHttpRequest
  let xhttp = new XMLHttpRequest();
  //El método .open realiza la petición de apertura de comunicación, el método puede ser 'GET' o 'POST', luego se envía la URL, si es asíncrono (true o false), usuario y contraseña. En esta caso solo se utiliza el método, la url y async
  xhttp.open('GET', urlApi, true);
  //en este método almacena el nombre de la función que se ejecutará cuando el objeto XMLHttpRequest cambie de estado
  xhttp.onreadystatechange = function () {
    //el atributo readyState define el estado del objeto XMLHttpRequest
    //0 No inicializado
    //1 Loading
    //2 ejecutado
    //3 interactuando
    //4 completado
    if (xhttp.readyState === 4) {
      //si la respuesta de la API es exitosa (200 Ok)
      if (xhttp.status === 200) {
        //se obtiene el contenido de la respuesta y lo parsea en JSON
        //El atributo devuelve un DOMString que contiene la  respuesta a la consulta como un texto o null si la consulta no tuvo éxito o aun no ha sido completada.
        callback(null, JSON.parse(xhttp.responseText));
        //se envía un mensaje de error si la respuesta no es exitosa
      } else {
        //se inicializa un objeto de tipo Error donde se le envían como argumentos un mensaje de error y la URL de la API para conocer en dónde se produjo el error
        const error = new Error('Error ' + urlApi);
        //se ejecuta el callback recibiendo como argumentos el error y null debido a que no se pudo obtener el objeto
        return callback(error, null);
      }
    }
  };
  //el método .send() envía la petición al servidor
  xhttp.send();
}

//se invoca el método fetchData() pasándole como argumentos la variable API concatenada con la cadena 'products' para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traídos por la API).
fetchData(`${API}/products`, function (error1, data1) {
  //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error
  if (error1) return console.error(error1);
  //se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envía como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error
    if (error2) return console.error(error2);
    //Se invoca nuevamente la función fetchData con el fin de acceder a la categoría, se envían como parámetros la url de la API con la concatenación de 'Categories' y el atributo Id de categoría del objeto data2 de la función anterior
    //en este caso puntual se hace uso de Optional Chaining el cual hace una evaluación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.
    //igual que las anteriores e envía una función anónima con 2 argumentos, un objeto Error y un objeto de datos
    fetchData(
      `${API}/categories/${data2?.category?.id}`,
      function (error3, data3) {
        //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error
        if (error3) return console.error(error3);
        //Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el método invocado inicialmente
        console.log(data1[0]);
        //Se imprime el titulo del objeto que se consultó en la segunda invocación de la función fetchData
        console.log(data2.title);
        //Se imprime el nombre de la categoría del objeto que se consultó en la segunda invocación de la función fetchData
        console.log(data3.name);
      }
    );
  });
});
