import { GraphQLClient } from "graphql-request";

interface RequestParams {
  query: string;
  variables: {
    limit: number
  };
  preview?: boolean;
}

export const requestFromDato = ({ query, variables, preview }: RequestParams) => {
  
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    }
  });
  return client.request(query, variables);
}