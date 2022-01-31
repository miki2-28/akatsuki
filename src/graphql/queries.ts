/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNovels = /* GraphQL */ `
  query GetNovels($id: ID!) {
    getNovels(id: $id) {
      id
      title
      content
      summary
      count
      createdAt
      updatedAt
    }
  }
`;
export const listNovelss = /* GraphQL */ `
  query ListNovelss(
    $filter: ModelNovelsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNovelss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        summary
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
