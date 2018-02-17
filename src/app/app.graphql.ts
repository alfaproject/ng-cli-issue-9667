import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export interface QueryResponse {
  links: {
    edges: [{
      node: {
        name: string;
      };
    }];
  };
}

export const query: DocumentNode = gql`
  query App {
    links: qnaCategories(section: "info") {
      edges {
        node {
          name
        }
      }
    }
  }
`;
