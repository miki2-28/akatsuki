/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNovelsInput = {
  id?: string | null,
  title: string,
  content: string,
  summary: string,
  count: number,
  createdAt?: string | null,
};

export type ModelNovelsConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  count?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNovelsConditionInput | null > | null,
  or?: Array< ModelNovelsConditionInput | null > | null,
  not?: ModelNovelsConditionInput | null,
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

export type Novels = {
  __typename: "Novels",
  id?: string,
  title?: string,
  content?: string,
  summary?: string,
  count?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateNovelsInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  summary?: string | null,
  count?: number | null,
  createdAt?: string | null,
};

export type DeleteNovelsInput = {
  id: string,
};

export type ModelNovelsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  count?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNovelsFilterInput | null > | null,
  or?: Array< ModelNovelsFilterInput | null > | null,
  not?: ModelNovelsFilterInput | null,
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

export type ModelNovelsConnection = {
  __typename: "ModelNovelsConnection",
  items?:  Array<Novels | null >,
  nextToken?: string | null,
};

export type CreateNovelsMutationVariables = {
  input?: CreateNovelsInput,
  condition?: ModelNovelsConditionInput | null,
};

export type CreateNovelsMutation = {
  createNovels?:  {
    __typename: "Novels",
    id: string,
    title: string,
    content: string,
    summary: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNovelsMutationVariables = {
  input?: UpdateNovelsInput,
  condition?: ModelNovelsConditionInput | null,
};

export type UpdateNovelsMutation = {
  updateNovels?:  {
    __typename: "Novels",
    id: string,
    title: string,
    content: string,
    summary: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNovelsMutationVariables = {
  input?: DeleteNovelsInput,
  condition?: ModelNovelsConditionInput | null,
};

export type DeleteNovelsMutation = {
  deleteNovels?:  {
    __typename: "Novels",
    id: string,
    title: string,
    content: string,
    summary: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetNovelsQueryVariables = {
  id?: string,
};

export type GetNovelsQuery = {
  getNovels?:  {
    __typename: "Novels",
    id: string,
    title: string,
    content: string,
    summary: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNovelssQueryVariables = {
  filter?: ModelNovelsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNovelssQuery = {
  listNovelss?:  {
    __typename: "ModelNovelsConnection",
    items:  Array< {
      __typename: "Novels",
      id: string,
      title: string,
      content: string,
      summary: string,
      count: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateNovelsSubscription = {
  onCreateNovels?:  {
    __typename: "Novels",
    id: string,
    title: string,
    content: string,
    summary: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNovelsSubscription = {
  onUpdateNovels?:  {
    __typename: "Novels",
    id: string,
    title: string,
    content: string,
    summary: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNovelsSubscription = {
  onDeleteNovels?:  {
    __typename: "Novels",
    id: string,
    title: string,
    content: string,
    summary: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
