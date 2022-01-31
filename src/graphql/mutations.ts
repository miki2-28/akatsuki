/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNovels = /* GraphQL */ `
  mutation CreateNovels(
    $input: CreateNovelsInput!
    $condition: ModelNovelsConditionInput
  ) {
    createNovels(input: $input, condition: $condition) {
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
export const updateNovels = /* GraphQL */ `
  mutation UpdateNovels(
    $input: UpdateNovelsInput!
    $condition: ModelNovelsConditionInput
  ) {
    updateNovels(input: $input, condition: $condition) {
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
export const deleteNovels = /* GraphQL */ `
  mutation DeleteNovels(
    $input: DeleteNovelsInput!
    $condition: ModelNovelsConditionInput
  ) {
    deleteNovels(input: $input, condition: $condition) {
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
