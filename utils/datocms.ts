import tiny from 'tiny-json-http';

interface RequestParams {
  query: string;
  variables?: {
    limit: number
  };
  preview?: boolean;
}

export const requestFromDato = async ({ query, variables, preview }: RequestParams) => {

  const endpoint = preview
    ? `https://graphql-listen.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const { body } = await tiny.post({
    url: endpoint,
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    },
    data: {
      query,
      variables,
    },
  });
  return body.data;
}