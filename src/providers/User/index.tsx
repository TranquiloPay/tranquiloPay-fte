import { useState, useContext, ReactNode, createContext } from "react";

interface User {
  email: string;
  id: number;
  name: string;
  customerId: string
}

interface UserContextData {
  user: User;
  setUser: (props: User) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>(
    JSON.parse(localStorage.getItem("@user:tranquilopay")!) || {} as User
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
