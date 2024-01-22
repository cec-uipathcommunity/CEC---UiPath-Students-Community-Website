// SharedState.js
import { createContext, useContext, useState } from 'react';

const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
  const [isSlido, setIsSlido] = useState(false);

  const toggleSlido = () => {
    setIsSlido((prev) => !prev);
  };

  return (
    <SharedStateContext.Provider value={{ isSlido, toggleSlido }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => {
  const context = useContext(SharedStateContext);
  if (!context) {
    throw new Error('useSharedState must be used within a SharedStateProvider');
  }
  return context;
};
