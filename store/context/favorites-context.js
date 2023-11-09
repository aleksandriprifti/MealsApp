//first we have to create a context
import { createContext, useState } from "react";

//this object will be used as a component later on
export const FavoritsContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  remove: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  //const addFavorite = () => {};

  const [favoriteMealsIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  const remove = (id) => {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId.id !== id)
    );
  };

  return <FavoritsContext.Provider>{children}</FavoritsContext.Provider>;
};

export default FavoritesContextProvider;
