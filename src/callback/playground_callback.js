/* 
* • Desafío 1: Crear una función que ejecute un callback con un tiempo de demora de 2 segundos.
Tienes la función execCallback que recibirá un callback es decir una función como parámetro,
tu reto es ejecutar esa función con un tiempo de demora de 2 segundos.

Para hacer que la función se demore 2 segundos debes usar la función setTimeout,
pero para ejecutarla debes llamarla mediante el namespace window para poder monitorear su uso en la ejecución de pruebas,

ejemplo:

window.setTimeout(() => {
  // code
})

Dentro del cuerpo de la función execCallback debes escribir tu solución.

Ejemplo:

Input:
const myFunc = () => console.log('Log after 2s')
execCallback(myFunc);

Output:
Execute myFunc 2s after
*/

//* • Solución del desafío:

// quite las palabra 'export' antes de 'function' y 'windows' antes de 'setTimeout' ya que no es necesario fuera del playground.
function execCallback(callback) {
  setTimeout(callback, 2000);
}

const myFunc = () => console.log('Log after 2s');
execCallback(myFunc);

/*
* • Solución en el playground con 'export' y 'windows':

export function execCallback(callback) {
  window.setTimeout(callback, 2000)
}

const myFunc = () => console.log('Log after 2s')
execCallback(myFunc);
*/
