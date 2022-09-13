import { useContext } from "react";
import { StyledCategoriesSection } from "./styles";
import AppContext from "../../context/context";
import { Link } from "react-router-dom";

const CategoriesTitle = "Shop by the: ";
const CategoriesTitleSpan = "Category";

export const Categories = () => {
  const Dresses = "Dresses";
  const Tees = "Tees";
  const Swimwear = "Swimwear";
  const Denim = "Denim";
  const Tops = "Tops";
  const Beauty = "Beauty";

  const { setCategory } = useContext(AppContext);


  return (
    <StyledCategoriesSection>
      <section className="section-categories">
        <h2 className="section-title">
          {CategoriesTitle}
          <span className="section-title__span">{CategoriesTitleSpan}</span>
        </h2>
        <div className="categories-btn-container">
          <Link to={`/category/${Dresses}`}>
            <button
              className="categories-btn"
              onClick={() => setCategory(Dresses)}
            >
              <img
                src="assets/img/icons/categories/dress.svg"
                alt="#"
                className="button-icon"
              />
              <p className="button-text">{Dresses}</p>
            </button>
          </Link>
          <Link to={`/category/${Tees}`}>
            <button
              className="categories-btn "
              onClick={() => setCategory(Tees)}
            >
              <img
                src="assets/img/icons/categories/tees.svg"
                alt="#"
                className="button-icon"
              />
              <p className="button-text">{Tees}</p>
            </button>
          </Link>
          <Link to={`/category/${Swimwear}`}>
            <button
              className="categories-btn"
              onClick={() => setCategory(Swimwear)}
            >
              <img
                src="assets/img/icons/categories/swimwear.svg"
                alt="#"
                className="button-icon"
              />
              <p className="button-text">{Swimwear}</p>
            </button>
          </Link>
          <Link to={`/category/${Denim}`}>
            <button
              className="categories-btn"
              onClick={() => setCategory(Denim)}
            >
              <img
                src="assets/img/icons/categories/denim.svg"
                alt="#"
                className="button-icon"
              />
              <p className="button-text">{Denim}</p>
            </button>
          </Link>

          <Link to={`/category/${Tops}`}>
            <button
              className="categories-btn"
              onClick={() => setCategory(Tops)}
            >
              <img
                src="assets/img/icons/categories/tops.svg"
                alt="#"
                className="button-icon"
              />
              <p className="button-text">{Tops}</p>
            </button>
          </Link>
          <Link to={`/category/${Beauty}`}>
            <button
              className="categories-btn"
              onClick={() => setCategory(Beauty)}
            >
              <img
                src="assets/img/icons/categories/beauty.svg"
                alt="#"
                className="button-icon"
              />
              <p className="button-text">{Beauty}</p>
            </button>
          </Link>
        </div>
      </section>
    </StyledCategoriesSection>
  );
};
