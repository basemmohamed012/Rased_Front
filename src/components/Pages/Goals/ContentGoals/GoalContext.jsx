import React, { createContext, useContext, useState } from "react";

const GoalContext = createContext();

export const useGoals = () => useContext(GoalContext);

export const GoalProvider = ({ children }) => {
  const [goals] = useState([
    { id: 1, title: "المنزل", saved: 3000, target: 5000, date: "25 مايو 2025" },
    { id: 2, title: "السيارة", saved: 2000, target: 10000, date: "10 يونيو 2025" },
    { id: 3, title: "السفر", saved: 500, target: 3000, date: "1 يوليو 2025" },
  ]);

  return (
    <GoalContext.Provider value={{ goals }}>
      {children}
    </GoalContext.Provider>
  );
};
