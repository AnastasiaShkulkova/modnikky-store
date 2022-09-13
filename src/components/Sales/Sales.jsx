import { useContext } from "react";
import AppContext from "../../context/context";
import { StyledSales } from "./styles";
import Slider from "react-slick";
import { Card } from "../Card/Card";

const SalesTitle = "#MODNIKKY_";
const SalesTitleSpan = "Sale";
const Sales = () => {

const { items } = useContext(AppContext);

var settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};


  return (
    <StyledSales>
      <div className="main-container">
        <section className="section-sales">
          <h2 className="section-title">
            {SalesTitle}
            <span className="section-title__span">{SalesTitleSpan}</span>
          </h2>
          <div className="slider-container">
            <Slider {...settings}>
              {items &&
                items.map((sales) => (
                  <Card key={sales.id} {...sales} />
                ))}
            </Slider>
          </div>
        </section>
      </div>
    </StyledSales>
  );
};

export default Sales;
