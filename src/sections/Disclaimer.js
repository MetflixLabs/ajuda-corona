import React from 'react';
import styled from 'styled-components';

import BottomTitle from '@components/BottomTitle';

export default () => (
  <BottomBlockWrapper>
    <BottomTitle>Como funciona</BottomTitle>
    <BottomParagraph>
      Visando ajudar de alguma forma na pandemia da COVID-19, nós da{' '}
      <a
        href="https://twitter.com/MetflixLabs"
        target="_blank"
        rel="noopener noreferrer"
      >
        @MetflixLabs
      </a>{' '}
      desenvolvemos este website. Ao clicar no botão "power", você estará
      emprestando um pouco do poder de procesamento do seu dispositivo, gerando
      assim o processo de "mineração" de uma criptomoeda (
      <a
        href="https://cointimes.com.br/como-minerar-bitcoin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        confira um artigo que explica melhor esse conceito)
      </a>
      .
    </BottomParagraph>
    <BottomParagraph>
      O projeto é totalmente voluntário e não visa nenhum lucro. Vamos doar
      integralmente todo o valor arrecadado para instituições engajadas no
      combate à COVID-19.
    </BottomParagraph>
    <BottomParagraph>
      Se você é representante de alguma instituição ou representante do governo,
      por favor entre em contato conosco atráves de uma{' '}
      <a
        href="https://twitter.com/messages/compose?recipient_id=1132804885978734593&text=Sou%20um%20representante%20e%20quero%20ajudar"
        target="_blank"
        rel="noopener noreferrer"
      >
        mensagem direta
      </a>{' '}
      no twitter para que possamos conversar.
    </BottomParagraph>
    <BottomParagraph right>
      <a
        href="https://github.com/MetflixLabs/ajuda-corona"
        target="_blank"
        rel="noopener noreferrer"
      >
        Código fonte do website
      </a>{' '}
      <a
        href="https://github.com/MetflixLabs/ajuda-corona-api"
        target="_blank"
        rel="noopener noreferrer"
      >
        Código fonte da api
      </a>{' '}
      <a
        href="/politica-de-privacidade.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Política de Privacidade
      </a>{' '}
    </BottomParagraph>
  </BottomBlockWrapper>
);

const BottomParagraph = styled.p`
  text-align: ${props => (props.right ? 'right' : 'left')};

  a {
    padding: ${props => (props.right ? '0 20px' : '0')};
  }
`;

const BottomBlockWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 40px 0;
`;
