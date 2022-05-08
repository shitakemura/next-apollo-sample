import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: Todo;
  toggleTodo: Todo;
};


export type MutationAddTodoArgs = {
  title: Scalars['String'];
};


export type MutationToggleTodoArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type CreateTodoMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', addTodo: { __typename?: 'Todo', id: string, title: string, completed: boolean } };

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, completed: boolean }> };


export const CreateTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<CreateTodoMutation, CreateTodoMutationVariables>;
export const GetTodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<GetTodosQuery, GetTodosQueryVariables>;