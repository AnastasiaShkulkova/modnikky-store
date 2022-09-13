import React from "react";
import { useContext } from "react";
import AppContext from "../../context/context";
import { Card } from "../Card/Card";
import { StyledSearchList } from "./styles";

export default function SearchList() {
  const { items, searchValue } = useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    return filteredItems.map((item) => <Card itemId={item.id} {...item} />);
  };

  return (
    <StyledSearchList>
      <div className="container">
        <div className="search-list">{renderItems()}</div>
      </div>
    </StyledSearchList>
  );
}
