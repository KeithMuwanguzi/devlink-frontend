"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Create a context
const AppContext = createContext<
  | {
      currentPage: string;
      handleSetCurrentPage: (input: string) => void;
    }
  | undefined
>(undefined);

// Create a provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<string>("dashboard");


  const handleSetCurrentPage = (input: string) => {
    setCurrentPage(input);
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        handleSetCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
