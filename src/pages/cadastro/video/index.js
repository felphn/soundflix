import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import categoriasRepository from '../../../repositories/categorias';
import videosRepository from '../../../repositories/videos';
import useForm from '../../../hooks/useForm';
import PageRoot from '../../../components/PageRoot';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import PadyDiv from '../../../components/PadyDiv';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageRoot>

      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(eventInfo) => {
        eventInfo.preventDefault();

        const categoriaChoosed = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaChoosed.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Url do Vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>

        <PadyDiv>
          <Link to="/cadastro/categoria">
            Cadastrar Categoria
          </Link>
        </PadyDiv>
      </form>

    </PageRoot>
  );
}

export default CadastroVideo;
