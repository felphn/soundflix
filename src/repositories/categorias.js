import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_HOST}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const hostResponse = await serverResponse.json();
        return hostResponse;
      }
      throw new Error('Não foi possível cadastrar a Categoria!');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const hostResponse = await serverResponse.json();
        return hostResponse;
      }
      throw new Error('Não foi possível realizar a operação!');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
