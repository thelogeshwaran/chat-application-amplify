/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
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
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          owner
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const roomsByDate = /* GraphQL */ `
  query RoomsByDate(
    $type: String
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    roomsByDate(
      type: $type
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
