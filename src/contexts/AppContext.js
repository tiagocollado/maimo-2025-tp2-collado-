"use client";

import { useState, useEffect, useContext, createContext } from "react";
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  //aca va mi logica y funciones custom

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const handleAddToFavorites = (title, image, id) => {
    setFavorites([...favorites, { title, image, id }]);
  };

  const favoritesQty = () => favorites.length;

  const handleRemoveFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        handleAddToFavorites,
        handleRemoveFromFavorites,
        favoritesQty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppcontext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
