import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_HOST}/videos`;

function create(videoObject) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const hostResponse = await serverResponse.json();
        return hostResponse;
      }
      throw new Error('Não foi possível cadastrar o vídeo!');
    });
}

export default {
  create,
};
