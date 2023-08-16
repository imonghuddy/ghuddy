import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [hotels, setHotels] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");
    const API = "https://dev.ghuddy.link/api/v1/open/hotels";
    const API2 = `https://dev.ghuddy.link/api/v1/open/hotels?propertyType=${activeCategory}`;

    const handleCategoryClick = (label) => {
      setActiveCategory((prevActiveCategory) =>
        prevActiveCategory === label ? "" : label
      );
    };

    useEffect(() => {
      fetch(`${activeCategory.length <= 0 ? API : API2}`)
        .then((res) => res.json())
        .then((data) => setHotels(data.esHotelCardList))
        .catch((error) => console.log(error));
    }, [activeCategory, API2]);

    // console.log("API 2", API2);
    // console.log(hotels)


    

    
    
    // console.log(activeCategory)




    const authInfo = {
      hotels,
      setActiveCategory,
      activeCategory,
      handleCategoryClick
    };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;