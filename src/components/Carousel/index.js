import React from 'react';
import {
  VideoCardGroupContainer, VideoCardList, Title, ExtraLink,
} from './styles';
import VideoCard from './components/VideoCard';
// import Slider, { SliderItem } from './components/Slider'; !!! Due to display issues

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'black' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
                        && (
                        <ExtraLink href={categoryExtraLink.url} target="_blank">
                          {categoryExtraLink.text}
                        </ExtraLink>
                        )}
        </>
      )}
      <VideoCardList>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
