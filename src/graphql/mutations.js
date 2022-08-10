/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArreglo = /* GraphQL */ `
  mutation CreateArreglo(
    $input: CreateArregloInput!
    $condition: ModelArregloConditionInput
  ) {
    createArreglo(input: $input, condition: $condition) {
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
export const updateArreglo = /* GraphQL */ `
  mutation UpdateArreglo(
    $input: UpdateArregloInput!
    $condition: ModelArregloConditionInput
  ) {
    updateArreglo(input: $input, condition: $condition) {
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
export const deleteArreglo = /* GraphQL */ `
  mutation DeleteArreglo(
    $input: DeleteArregloInput!
    $condition: ModelArregloConditionInput
  ) {
    deleteArreglo(input: $input, condition: $condition) {
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
