import { flow, types } from "mobx-state-tree";
import { getConversation } from "../graphql/queries";
import API, { graphqlOperation } from "@aws-amplify/api";
import { listConversations } from "../graphql/queries";
import { listUsers } from "../graphql";

export const MessageModel = types.model("MessageModel", {
  authorId: types.string,
  content: types.string,
  createdAt: types.string,
  id: types.string,
  messageConversationId: types.string,
  updatedAt: types.optional(types.maybeNull(types.string), null),
});

export const MemberModel = types.model("MemberModel", {
  id: types.string,
  username: types.string,
  createdAt: types.optional(types.maybeNull(types.string), null),
});
export const ConversationModel = types.model("ConversationModel", {
  id: types.string,
  createdAt: types.optional(types.maybeNull(types.string), null),
  members: types.array(types.string),
  name: types.string,
  updatedAt: types.optional(types.maybeNull(types.string), null),
});

export const Store = types
  .model("Store", {
    messages: types.array(MessageModel),
    conversations: types.array(ConversationModel),
    members: types.array(MemberModel),
  })
  .actions((self) => ({
    addNewMessage(message) {
      self.messages.push(message);
    },
    addNewConversation(conversation) {
      self.conversations.unshift(conversation);
    },
    addNewMember(member) {
      console.log(member);
      self.members.push(member);
    },
    setMessages(messages) {
      self.messages = messages;
    },
    setConversations(conversations) {
      self.conversations = conversations;
    },
    setMembers(members) {
      self.members = members;
    },
    fetchMessages: flow(function* (id) {
      try {
        const { data } = yield API.graphql(
          graphqlOperation(getConversation, { id })
        );
        self.setMessages(data.getConversation.messages.items);
      } catch (err) {
        console.log(err);
      }
    }),
    fetchConversations: flow(function* () {
      try {
        const { data } = yield API.graphql(graphqlOperation(listConversations));
        self.setConversations(data.listConversations.items);
      } catch (err) {
        console.log(err);
      }
    }),
    fetchMembers: flow(function* (user) {
      try {
        const { data } = yield API.graphql(graphqlOperation(listUsers));
        const users = data.listUsers.items.filter(
          (item) => item.username !== user.username
        );
        self.setMembers(users);
      } catch (err) {
        console.log(err);
      }
    }),
    subscribeCreateUser() {},
  }))
  .views((self) => ({
    list() {
      return self.messages;
    },
  }));
