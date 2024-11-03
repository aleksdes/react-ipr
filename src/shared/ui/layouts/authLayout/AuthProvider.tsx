import { Context, createContext, ReactNode, useState } from 'react';

export type AuthContextType = {
  routeData?: {
    isMonoLogo?: boolean;
  };
  setRouteData?: (data: Record<string, any>) => void;
};

export const AuthContext: Context<AuthContextType> = createContext({});

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [routeData, setRouteData] = useState({});

  return (
    <AuthContext.Provider value={{ routeData, setRouteData }}>
      {children}
    </AuthContext.Provider>
  );
};
