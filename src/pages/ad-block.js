import React, { useEffect } from 'react';
import styled from 'styled-components';

import Miner from '../components/core/Miner';
import Layout from '../components/layout';

import adblockPlusImg from '../images/adblock-plus.png';
import adblockImg from '../images/adblock.png';
import adblockProImg from '../images/adblock-pro.png';

const AdBlock = () => {
  useEffect(() => {
    window.gtag && window.gtag('config', 'UA-161435848-1', {
      page_title: 'ad-block',
      page_path: '/ad-block',
    });
  }, []);

  return (
    <Layout>
      <Miner />
      <Wrapper>
        <TextWrapper>
          <BigText>Seu AdBlock está ligado :(</BigText>
          <Text>
            Bloqueadores de anuncio não permitem mineração de criptomoedas.
          </Text>
          <Content>
            <Description>
              Mas calma! Você não precisa remover o seu AdBlock - apenas permita
              que ele não bloqueie a sua doação.
            </Description>
            <AdBlockWrapper>
              <AdBlockName>AdBlock Plus</AdBlockName>
              <AdBlockDescription>
                1) Clique no ícone do AdBlock Plus, localizado à direita da
                barra de endereços do seu navegador
              </AdBlockDescription>
              <AdBlockDescription>
                2) Um menu drop-down aparecerá na tela
              </AdBlockDescription>
              <AdBlockDescription>
                3) Clique em “Enabled on this site” para desativar o bloqueio da
                publicidade
              </AdBlockDescription>
              <AdBlockDescription>
                4) Após o clique, o texto será substituído por “Disabled on this
                site”
              </AdBlockDescription>
              <AdBlockDescription>5) Atualize esta página</AdBlockDescription>
              <AdBlockImage src={adblockPlusImg} />
            </AdBlockWrapper>
            <AdBlockWrapper>
              <AdBlockName>AdBlock</AdBlockName>
              <AdBlockDescription>
                1) Clique no ícone do AdBlock, localizado à direita da barra de
                endereços do seu navegador
              </AdBlockDescription>
              <AdBlockDescription>
                2) Um menu drop-down aparecerá na tela
              </AdBlockDescription>
              <AdBlockDescription>
                3) Clique em “Don’t run on pages on this domain” para desativar
                o bloqueio da publicidade
              </AdBlockDescription>
              <AdBlockDescription>
                4) Uma nova janela abrirá e você precisará clicar no botão
                “Exclude”
              </AdBlockDescription>
              <AdBlockDescription>5) Atualize esta página</AdBlockDescription>
              <AdBlockImage src={adblockImg} />
            </AdBlockWrapper>
            <AdBlockWrapper>
              <AdBlockName>AdBlock Pro</AdBlockName>
              <AdBlockDescription>
                1) Clique no ícone do AdBlock Pro, localizado à direita da barra
                de endereços do seu navegador
              </AdBlockDescription>
              <AdBlockDescription>
                2) Um menu drop-down aparecerá na tela
              </AdBlockDescription>
              <AdBlockDescription>
                3) Clique no primeiro ícone (ligar) para para desativar o
                bloqueio da publicidade
              </AdBlockDescription>
              <AdBlockDescription>4) Atualize esta página</AdBlockDescription>
              <AdBlockImage src={adblockProImg} />
            </AdBlockWrapper>
          </Content>
        </TextWrapper>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: block;
`;

const TextWrapper = styled.div`
  padding: 40px 20px 0;
`;

const BigText = styled.div`
  font-size: 40px;
  line-height: 50px;
`;

const Text = styled.div`
  font-size: 22px;
`;

const Content = styled.div`
  font-size: 18px;
  margin-top: 40px;
`;

const Description = styled.div`
  margin: 40px 0;
  font-style: italic;
`;

const AdBlockWrapper = styled.div`
  margin-bottom: 40px;
`;

const AdBlockName = styled.div`
  font-size: 18px;
  word-spacing: 5px;
  margin-bottom: 10px;
`;

const AdBlockDescription = styled.p`
  font-size: 16px;
`;

const AdBlockImage = styled.img`
  max-width: 100%;
`;

export default AdBlock;
