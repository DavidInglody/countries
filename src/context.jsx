import { createContext, useContext, useState } from "react";

const CreateGlobalContext = createContext();

export const useGlobalContext = () => useContext(CreateGlobalContext);

const AppContext = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("slovakia");

  return (
    <CreateGlobalContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </CreateGlobalContext.Provider>
  );
};
export default AppContext;
