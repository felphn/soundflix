import styled from 'styled-components';

// styled responsável pelas características do footer
// eslint-disable-next-line import/prefer-default-export
export const FooterBase = styled.footer`
    background: var(--black);
    border-top: 1px solid var(--primary);
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 20px;
    padding-bottom: 20px;
    color: var(--blackLighter);
    text-align: center;

    @media (max-width: 800px) {
        margin-bottom: 50px;
    }
`;
