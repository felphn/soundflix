import React, { useState, useEffect } from 'react';
import PageRoot from '../../../components/PageRoot';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    defTitle: '',
    defDescription: '',
    defColor: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_BACKEND_HOST = 'http://localhost:8080/categorias';

    fetch(URL_BACKEND_HOST)
      .then(async (serverResponse) => {
        const hostResponse = await serverResponse.json();
        setCategorias([
          ...hostResponse,
        ]);
      });
  }, []);

  return (
    <PageRoot>

      <h1>
        Cadastro de Categorias
      </h1>

      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="defTitle"
          value={values.defTitle}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="defDescription"
          value={values.defDescription}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="defColor"
          value={values.defColor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categorias) => (
          <li key={`${categorias.defTitle}`}>
            {categorias.titulo}
            {categorias.defTitle}
          </li>
        ))}
      </ul>

    </PageRoot>
  );
}

export default CadastroCategoria;
