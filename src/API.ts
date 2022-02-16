/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArtworksInput = {
  id?: string | null,
  title: string,
  content?: string | null,
  summary: string,
  count?: number | null,
  URL?: string | null,
  category: string,
  published: boolean,
};

export type ModelArtworksConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  count?: ModelIntInput | null,
  URL?: ModelStringInput | null,
  category?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelArtworksConditionInput | null > | null,
  or?: Array< ModelArtworksConditionInput | null > | null,
  not?: ModelArtworksConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Artworks = {
  __typename: "Artworks",
  id?: string,
  title?: string,
  content?: string | null,
  summary?: string,
  count?: number | null,
  URL?: string | null,
  category?: string,
  published?: boolean,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateArtworksInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  summary?: string | null,
  count?: number | null,
  URL?: string | null,
  category?: string | null,
  published?: boolean | null,
};

export type DeleteArtworksInput = {
  id: string,
};

export type ModelArtworksFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  count?: ModelIntInput | null,
  URL?: ModelStringInput | null,
  category?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelArtworksFilterInput | null > | null,
  or?: Array< ModelArtworksFilterInput | null > | null,
  not?: ModelArtworksFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelArtworksConnection = {
  __typename: "ModelArtworksConnection",
  items?:  Array<Artworks | null >,
  nextToken?: string | null,
};

export type CreateArtworksMutationVariables = {
  input?: CreateArtworksInput,
  condition?: ModelArtworksConditionInput | null,
};

export type CreateArtworksMutation = {
  createArtworks?:  {
    __typename: "Artworks",
    id: string,
    title: string,
    content?: string | null,
    summary: string,
    count?: number | null,
    URL?: string | null,
    category: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArtworksMutationVariables = {
  input?: UpdateArtworksInput,
  condition?: ModelArtworksConditionInput | null,
};

export type UpdateArtworksMutation = {
  updateArtworks?:  {
    __typename: "Artworks",
    id: string,
    title: string,
    content?: string | null,
    summary: string,
    count?: number | null,
    URL?: string | null,
    category: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArtworksMutationVariables = {
  input?: DeleteArtworksInput,
  condition?: ModelArtworksConditionInput | null,
};

export type DeleteArtworksMutation = {
  deleteArtworks?:  {
    __typename: "Artworks",
    id: string,
    title: string,
    content?: string | null,
    summary: string,
    count?: number | null,
    URL?: string | null,
    category: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetArtworksQueryVariables = {
  id?: string,
};

export type GetArtworksQuery = {
  getArtworks?:  {
    __typename: "Artworks",
    id: string,
    title: string,
    content?: string | null,
    summary: string,
    count?: number | null,
    URL?: string | null,
    category: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArtworkssQueryVariables = {
  filter?: ModelArtworksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArtworkssQuery = {
  listArtworkss?:  {
    __typename: "ModelArtworksConnection",
    items:  Array< {
      __typename: "Artworks",
      id: string,
      title: string,
      content?: string | null,
      summary: string,
      count?: number | null,
      URL?: string | null,
      category: string,
      published: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateArtworksSubscription = {
  onCreateArtworks?:  {
    __typename: "Artworks",
    id: string,
    title: string,
    content?: string | null,
    summary: string,
    count?: number | null,
    URL?: string | null,
    category: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArtworksSubscription = {
  onUpdateArtworks?:  {
    __typename: "Artworks",
    id: string,
    title: string,
    content?: string | null,
    summary: string,
    count?: number | null,
    URL?: string | null,
    category: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArtworksSubscription = {
  onDeleteArtworks?:  {
    __typename: "Artworks",
    id: string,
    title: string,
    content?: string | null,
    summary: string,
    count?: number | null,
    URL?: string | null,
    category: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
