import { Store } from "./Store";

export const setupRootStore = () => {
  const rootTree = Store.create({
    messages: [],
    conversations: [],
    members: [],
    popup: "Chat",
  });

  return { rootTree };
};
