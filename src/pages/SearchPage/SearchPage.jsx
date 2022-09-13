import React from "react";
import { StyledSearchPage } from "./styles";
import AppContext from "../../context/context";
import { useContext } from "react";
import SearchList from "../../components/SearchList/SearchList";

export default function SearchPage({ onChangeSearchInput }) {
  const { searchValue, setSearchValue } = useContext(AppContext);
  return (
    <>
      <StyledSearchPage>
        <section className="search-section">
          <div className="search-block">
            {searchValue && (
              <img
                src="assets/img/icons/clear-search.svg"
                width={60}
                alt=""
                onClick={() => setSearchValue("")}
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              type="text"
              placeholder="ENTER SEARCH TERMS"
              className="search-input"
            />
          </div>
        </section>
        <h2>
          {searchValue ? `Searched for: ${searchValue}` : "Try to search"}
        </h2>
        <SearchList />
      </StyledSearchPage>
    </>
  );
}
