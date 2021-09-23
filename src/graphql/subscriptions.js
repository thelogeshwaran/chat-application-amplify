/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessages = /* GraphQL */ `
  subscription OnCreateMessages($room: ID!) {
    onCreateMessages(room: $room) {
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom($owner: String, $members: String) {
    onCreateRoom(owner: $owner, members: $members) {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom($owner: String, $members: String) {
    onUpdateRoom(owner: $owner, members: $members) {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom($owner: String, $members: String) {
    onDeleteRoom(owner: $owner, members: $members) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
