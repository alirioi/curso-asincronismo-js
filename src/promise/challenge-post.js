// import fetch from 'node-fetch'; -> ya no es necesario porque node ya tiene la API fetch de forma nativa a partir de la version 18
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: '12091993',
  price: 1993,
  description: 'Test description',
  categoryId: 1,
  images: ['https://placeimg.com/640/480/any'],
};

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log('\nFinished'));

// PUT (actualiza)
const dataActualizado = {
  title: '12091993',
  price: 2024,
  description: 'ACTUALIZADO CON PUT',
  categoryId: 1,
  images: ['https://placeimg.com/640/480/any'],
};

fetch('https://api.escuelajs.co/api/v1/products/165', {
  method: 'PUT',
  mode: 'cors',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataActualizado),
})
  .then((response) => response.json())
  .then((data) =>
    console.log(`Success: se actualizó el producto con id ${data.id}`)
  )
  .catch((err) => console.log(err));

// DELETE (elimina)
fetch('https://api.escuelajs.co/api/v1/products/164', {
  method: 'DELETE',
})
  .then((response) => response.json())
  .then((data) =>
    console.log(`Success: se eliminó el producto con id ${data.id}`)
  )
  .catch((err) => console.log(err));
