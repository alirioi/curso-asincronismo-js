/*
* • Desafió 2: Crear una función de delay que soporte asincronismo.
En este desafío tienes la función delay la cual se espera que un tiempo específico retorne un mensaje

La función deberá recibir dos parámetros:

time: el tiempo de espera
message: el mensaje que debe imprimir después del tiempo de espera
La función delay debe retornar una promesa para poderlo usarlo de forma asíncrona.

Nota: Debes usar la función setTimeout con el namespace window para poder monitorear su uso en la ejecución de pruebas,
ejemplo:

window.setTimeout(() => {
  // code
})

Ejemplo 1:

Input:
delay(2000, "Hello after 2s")
.then((message) => console.log(message))

Output:
// after 2s
"Hello after 2s"

Ejemplo 2:

Input:
delay(3000, "Hello after 3s")
.then((message) => console.log(message))

Output:
// after 3s
"Hello after 3s"
*/

//* • Solución del desafío:
//* Solución por mi cuenta:
// quite las palabra 'export' antes de 'function' y 'windows' antes de 'setTimeout' ya que no es necesario fuera del playground.

function delay(time, message) {
  const mensaje = new Promise((resolve, reject) => {
    if (time && message) {
      setTimeout(() => {
        resolve(message);
      }, time);
    } else {
      reject('Faltan parámetros');
    }
  });
  return mensaje;
}

delay(2000, 'Hello after 2s').then((message) => console.log(message));
delay(3000, 'Hello after 3s').then((message) => console.log(message));

//* • Solución en el playground con 'export' y 'windows':
//* Solución que da el desafío:
/*
export function delay(time, message) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(message);
    }, time)
  })
}
*/
