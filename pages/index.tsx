import { gql } from 'graphql-request'
import Markdown from 'markdown-to-jsx';
import type { GetStaticProps, NextPage } from 'next'
import { Key } from 'react';
import { Image, useQuerySubscription } from 'react-datocms';
import ContactButton from '../src/components/ContactButton';
import SocialButton from '../src/components/SocialButton';
import { Container, SocialButtonsContainer } from '../styles/pages/index';

import { requestFromDato } from '../utils/datocms'

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
    descricao(markdown: true)
    botao {
      tituloDoBotao
      link
      id
    }
    redesSociais {
      nomeRedeSocial
      linkRedeSocial
      id
    }
    corFundo {
      hex
    }
  }
}
`

export const getStaticProps: GetStaticProps = async (context) => {
  const graphqlRequest = {
    query: DATA_QUERY,
    preview: context.preview,
    variables: { limit: 10 }
  };
  return {
    props: {
      subscription: context.preview
        ? {
          ...graphqlRequest,
          initialData: await requestFromDato(graphqlRequest),
          token: process.env.NEXT_DATOCMS_API_TOKEN,
        }
        : {
          enabled: false,
          initialData: await requestFromDato(graphqlRequest),
        },
    },
  }
};

const Home: NextPage<Props> = ({ subscription }) => {
  const { data, status, error } = useQuerySubscription(subscription);

  return (
    <Container>
      {data &&
        <>
          <Image data={data.main.foto.responsiveImage} />
          <h3>{data.main.titulo}</h3>
          <Markdown>{data.main.descricao}</Markdown>
          {data.main.botao.map((botao: { 
            id: Key | null | undefined; 
            tituloDoBotao: string; 
            link: string; 
          }) =>
            <ContactButton key={botao.id} buttonLink={botao.link}>{botao.tituloDoBotao}</ContactButton>
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
              />
            )}
          </SocialButtonsContainer>
        </>
      }
    </Container>
  )
}

export default Home


