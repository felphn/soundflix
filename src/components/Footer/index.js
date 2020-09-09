import React from 'react';
import { FooterBase } from './styles';
import GitHubLogo from '../../assets/img/github-logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.github.com/felpshn/">
        <img src={GitHubLogo} alt="Logo GitHub" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
