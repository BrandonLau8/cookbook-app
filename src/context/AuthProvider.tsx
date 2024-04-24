import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react'

export const AuthContext = createContext<{
    status: boolean;
    setStatus: Dispatch<SetStateAction<boolean>>;
  }>({
    status: false,
    setStatus: () => {},
  });

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  const [status, setStatus] = useState<boolean>(false);
    return (
    <AuthContext.Provider value={{status, setStatus}}>
        {children}
    </AuthContext.Provider>
  )
}
