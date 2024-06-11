import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi).then((response) => response.json());
}

/*fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
  })
  .then(() => {
    console.log('Finished');
  })
  .catch((error) => console.log(error));*/

fetchData(`${API}/products`)
  .then((products) => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((product) => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((category) => {
    console.log(category.name);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log('Finished'));
