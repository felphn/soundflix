import React, { useEffect, useState } from 'react';
// import defaultData from '../../data/default_data.json';
import categoriasRepository from '../../repositories/categorias';
import PageRoot from '../../components/PageRoot';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

// build da homepage
function HomePage() {
  const [defaultData, setDefaultData] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasWithVideo) => {
        setDefaultData(categoriasWithVideo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageRoot paddingAll={0}>

      {defaultData.length === 0 && (<div>Carregando...</div>)}

      {defaultData.map((defaultCategory, index) => {
        if (index === 0) {
          return (
            <div key={defaultCategory.id}>
              <BannerMain
                videoTitle={defaultData[0].videos[0].titulo}
                url={defaultData[0].videos[0].url}
                videoDescription=""
              />
              <Carousel
                ignoreFirstVideo
                category={defaultData[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={defaultCategory.id}
            category={defaultCategory}
          />
        );
      })}
    </PageRoot>
  );
}

export default HomePage;
