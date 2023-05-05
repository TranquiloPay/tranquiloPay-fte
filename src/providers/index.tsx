import { ReactNode } from "react";
import { UserProvider } from "./User";
import { AuthProvider } from "./Auth";

interface ContextProps {
  children: ReactNode;
}

const Providers = ({ children }: ContextProps) => {
  return (
    <UserProvider>
      <AuthProvider>{children}</AuthProvider>
    </UserProvider>
  );
};

export default Providers;
