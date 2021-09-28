import React, { useContext, useEffect, createContext, useState } from "react";
import { Auth } from "aws-amplify";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState("");
    const [popup, setPopup] = useState("Chat");

    useEffect(() => {
        fetchUser();
      }, []);

    async function fetchUser() {
        try {
          const user = await Auth.currentAuthenticatedUser();
          user && setUser(user);
          console.log(user)
        } catch (err) {
          console.log(err);
        }
      }


  return (
    <AuthContext.Provider
      value={{
        user,
        popup,
        setPopup
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthProvider() {
    return useContext(AuthContext);
  }
