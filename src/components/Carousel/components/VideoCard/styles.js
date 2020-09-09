import styled from 'styled-components';

// styled responsável pelas características do videocontainer
// eslint-disable-next-line import/prefer-default-export
export const VideoCardContainer = styled.a`
    text-decoration: none;
    border: none;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
    width: 298px;
    height: 197px;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    filter: grayscale(0.4);
    transition: opacity .5s, filter.5s;
    color: white;
    flex: 0 0 298px;
    border-radius: 1px;
    align-items: flex-end;
    padding: 10px;

    transition: opacity .3s;
    &:hover,
    &:focus {
        filter: grayscale(0) brightness(1.3);
        opacity: .5;
        --webkit-transform: scale(1.3);
            --ms-transform: scale(1.3);
            transform: scale(1.3);
            border: none;
            transition: 0.5s;
            margin-left: 30px;
            margin-right: 30px;
    }

    &:not(:first-child) {
        margin-left: 20px;
    }
`;
