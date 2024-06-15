const API = 'https://api.escuelajs.co/api/v1';
const urlApi = API;

//Declaración de fetchData como la función del Generador
async function* fetchData(url) {
  const response = await fetch(url);
  yield await response.json();
}

//Llamadas con el método next() en el objeto del Generador usando .then() y manipulando value
fetchData(`${urlApi}/products`)
  .next()
  .then(({ value }) => {
    console.log(value); //Imprime la lista de los Productos de la API

    const idProduct = value[0].id; //Extrae el id del producto que queremos manipular

    fetchData(`${urlApi}/products/${idProduct}`)
      .next()
      .then(({ value }) => {
        console.log(value.title); //Imprime el Título del producto solicitado

        const idCategory = value.category.id;

        fetchData(`${urlApi}/categories/${idCategory}`)
          .next()
          .then(({ value }) => {
            console.log(value.name); //Imprime el nombre de la categoría del producto seleccionado
          });
      });
  });
