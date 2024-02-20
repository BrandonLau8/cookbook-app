import React from "react";
import { createContext, useContext, useState } from "react";

export interface FoodItem {
  id?: number;
  name: string;
  // Add any other properties of a food item here
}

export interface FoodServiceResponse {
  data: {
    content: FoodItem[];
    // Add any other properties of the response data here
  };
  // Add any other properties of the response here
}

interface FoodContextType {
  foods: FoodItem[];
  setFoods: React.Dispatch<React.SetStateAction<FoodItem[]>>;
}
export const FoodContext = createContext<FoodContextType>({
  foods: [],
  setFoods: () => {},
});
export const useFoodContext = () => useContext(FoodContext);

export const FoodProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [foods, setFoods] = useState<FoodItem[]>([]);

  return (
    <FoodContext.Provider value={{ foods, setFoods }}>
      {children}
    </FoodContext.Provider>
  );
};
