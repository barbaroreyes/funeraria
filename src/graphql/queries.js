/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArreglo = /* GraphQL */ `
  query GetArreglo($id: ID!) {
    getArreglo(id: $id) {
      id
      name
      description
      price
      picture
      createdAt
      updatedAt
    }
  }
`;
export const listArreglos = /* GraphQL */ `
  query ListArreglos(
    $filter: ModelArregloFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArreglos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        picture
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
