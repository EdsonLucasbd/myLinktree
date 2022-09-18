import { gql } from 'graphql-request'
import type { GetStaticProps, NextPage } from 'next'
import { Key } from 'react';
import Image from 'next/image'
import { Image as DatoImage, useQuerySubscription } from 'react-datocms';
import ContactButton from '../src/components/ContactButton';
import SocialButton from '../src/components/SocialButton';
import { IndexContainer, ContentContainer, Description, Footer, SocialButtonsContainer, Title } from '../styles/pages/index';

import { requestFromDato } from '../utils/datocms'
import Head from 'next/head';
import { Photo } from '../src/components/Photo';

interface Props {
  subscription: any,
}

const DATA_QUERY = gql`
query MyQuery {
  main {
    foto {
      responsiveImage(imgixParams: {auto: format, fit: crop, w: "124", h: "124"}) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
    titulo
    tituloAba
    descricao
    botao {
      tituloDoBotao
      link
    }
    redesSociais {
      nomeRedeSocial
      linkRedeSocial
    }
    corFundo {
      hex
    }
    corIcones {
      hex
    }
    corTextos {
      hex
    }
    corHoverBotao {
      hex
    }
    corTextoBotaoNormal {
      hex
    }
    corTextoBotaoSelecionado {
      hex
    }
    favicon {
      url
    }
  }
}
`

export const getStaticProps: GetStaticProps = async () => {
  const graphqlRequest = {
    query: DATA_QUERY,
    variables: { limit: 10 },
  };
  return {
    props: {
      subscription: {
        ...graphqlRequest,
        initialData: await requestFromDato(graphqlRequest),
        token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
      }
    },
  }
};

const Home: NextPage<Props> = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription(subscription);

  const statusMessage = {
    connecting: 'Connecting to DatoCMS...',
    connected: 'Connected to DatoCMS, receiving live updates!',
    closed: 'Connection closed',
  };

  console.log('Status: ', statusMessage[status])

  error && console.log('Erro: ', error)

  return (
    <IndexContainer>
      <Head>
        <title>{`${data.main.tituloAba}`}</title>
        <link rel="icon" href={`${data.main.favicon.url}`} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContentContainer backgroundColor={data.main.corFundo.hex}>
        {data &&
          <>
            <Photo url={data.main.foto.responsiveImage} />
            <Title textColor={data.main.corTextos.hex}>{data.main.titulo}</Title>
            <Description textColor={data.main.corTextos.hex}>
              {data.main.descricao}
            </Description>
            {data.main.botao.map((botao: {
              id: Key | null | undefined;
              tituloDoBotao: string;
              link: string;
            }) =>
              <ContactButton
                key={botao.id}
                buttonLink={botao.link}
                color={data.main.corIcones.hex}
                hoverColor={data.main.corHoverBotao.hex}
                textColor={data.main.corTextoBotaoNormal.hex}
                textHoverColor={data.main.corTextoBotaoSelecionado.hex}
              >
                {botao.tituloDoBotao}
              </ContactButton>
            )}
            <SocialButtonsContainer>
              {data.main.redesSociais.map((rede: {
                id: Key | null | undefined;
                nomeRedeSocial: string;
                linkRedeSocial: string;
              }) =>
                <SocialButton
                  key={rede.id}
                  socialLink={rede.linkRedeSocial}
                  socialName={rede.nomeRedeSocial}
                  color={data.main.corIcones.hex}
                />
              )}
            </SocialButtonsContainer>
          </>
        }
      </ContentContainer>
      <Footer backgroundColor={data.main.corFundo.hex} textColor={data.main.corTextos.hex}>
        <p>Desenvolvido por</p>
        <a href='https://meu-portfolio-vercel.vercel.app/' target='_blank' rel='noopener' aria-label='Acesse o portfólio do desenvolvedor deste site'>
          <Image
            src='https://www.datocms-assets.com/66381/1660706075-contact-logo-3.png'
            width={23}
            height={23}
            alt='Edson Lucas'
          />
        </a>
      </Footer>
    </IndexContainer>
  )
}

export default Home
