import React from "react";
import { useContext } from "react";
import AppContext from "../../../context/context";
import { Card } from "../../Card/Card";

export default function CategoriesList() {
  const { items, category } = useContext(AppContext);

  const categoryItems = () => {
    const filterCategory = items.filter((item) => item.type.includes(category));

    return filterCategory.map((item, index) => <Card key={index} {...item} />);
  };

  return (
    category && (
      <div className="sorted-category">
        <div className="container">
          <h4>{category}</h4>
          <div className="search-list">{categoryItems()}</div>
        </div>
      </div>
    )
  );
}
