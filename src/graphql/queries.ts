/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtworks = /* GraphQL */ `
  query GetArtworks($id: ID!) {
    getArtworks(id: $id) {
      id
      title
      content
      summary
      count
      URL
      category
      published
      createdAt
      updatedAt
    }
  }
`;
export const listArtworkss = /* GraphQL */ `
  query ListArtworkss(
    $filter: ModelArtworksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtworkss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        summary
        count
        URL
        category
        published
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
