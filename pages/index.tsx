import { gql } from 'graphql-request'
import Markdown from 'markdown-to-jsx';
import type { GetStaticProps, NextPage } from 'next'
import { Key } from 'react';
import { Image, useQuerySubscription } from 'react-datocms';
import Button from '../src/components/Button';
import Photo from '../src/components/Photo';
import { Container } from '../styles/pages/index';

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
          {data.main.botao.map((botao: { id: Key | null | undefined; tituloDoBotao: string; }) =>
            <Button key={botao.id}>{botao.tituloDoBotao}</Button>
          )}
          {data.main.redesSociais.map((rede: { id: Key | null | undefined; nomeRedeSocial: string; }) =>
            <h5 key={rede.id}>rede.nomeRedeSocial</h5>
          )}
        </>
      }
    </Container>
  )
}

export default Home


