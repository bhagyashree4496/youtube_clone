import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [selectCategory, setSelectCategory] = useState("New");
  const [searchResults, setSearchResults] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(true);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategory);
  }, [selectCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        selectCategory,
        setSelectCategory,
        mobileMenu,
        setMobileMenu,
        searchResults,
        setSearchResults,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
