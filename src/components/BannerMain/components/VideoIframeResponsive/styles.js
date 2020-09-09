import styled from 'styled-components';

// provavelmente o bloco que o video
export const VideoContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 60.0%;
    @media (max-width: 800px) {
        display: none;
    }
`;

export const ResponsiveIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;
