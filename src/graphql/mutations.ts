/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArtworks = /* GraphQL */ `
  mutation CreateArtworks(
    $input: CreateArtworksInput!
    $condition: ModelArtworksConditionInput
  ) {
    createArtworks(input: $input, condition: $condition) {
      id
      title
      content
      summary
      count
      URL
      category
      createdAt
      updatedAt
    }
  }
`;
export const updateArtworks = /* GraphQL */ `
  mutation UpdateArtworks(
    $input: UpdateArtworksInput!
    $condition: ModelArtworksConditionInput
  ) {
    updateArtworks(input: $input, condition: $condition) {
      id
      title
      content
      summary
      count
      URL
      category
      createdAt
      updatedAt
    }
  }
`;
export const deleteArtworks = /* GraphQL */ `
  mutation DeleteArtworks(
    $input: DeleteArtworksInput!
    $condition: ModelArtworksConditionInput
  ) {
    deleteArtworks(input: $input, condition: $condition) {
      id
      title
      content
      summary
      count
      URL
      category
      createdAt
      updatedAt
    }
  }
`;
