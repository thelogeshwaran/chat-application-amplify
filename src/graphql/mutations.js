/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      name
      type
      createdAt
      updatedAt
      members
      messages {
        items {
          id
          message
          ownername
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      name
      type
      createdAt
      updatedAt
      members
      messages {
        items {
          id
          message
          ownername
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      name
      type
      createdAt
      updatedAt
      members
      messages {
        items {
          id
          message
          ownername
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      message
      ownername
      createdAt
      room {
        id
        name
        type
        createdAt
        updatedAt
        members
        messages {
          nextToken
        }
        owner
      }
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      message
      ownername
      createdAt
      room {
        id
        name
        type
        createdAt
        updatedAt
        members
        messages {
          nextToken
        }
        owner
      }
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      message
      ownername
      createdAt
      room {
        id
        name
        type
        createdAt
        updatedAt
        members
        messages {
          nextToken
        }
        owner
      }
      updatedAt
    }
  }
`;
