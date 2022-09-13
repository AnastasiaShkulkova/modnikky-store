import React from "react";
import { useContext } from "react";
import AppContext from "../../context/context";
import UpdateSubscription from "../../components/UpdateSubscription/UpdateSubscription";
import { StyledItemPage } from "./styles";
import Accordeon from "../../components/Accordeon/Accordeon";

export default function ItemPage() {
  const accordionData = [
    {
      title: "PRODUCT DESCRIPTION",
      content: `Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. `,
    },
    {
      title: "SHIPPING & RETURNS",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "FABRIC COMPOSITION",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];

  const { clickedItem, onAddToCart } = useContext(AppContext);

  const itemColors = clickedItem.color;

  const getItemColors = () => {
    for (let key in itemColors) {
      return (
        <div
          style={{
            backgroundColor: itemColors[key],
          }}
          className="order-color-options-item"
        ></div>
      );
    }
  };

  const itemSizes = clickedItem.availableSizes;


  const getItemSizes = () => {
    return itemSizes[0]
      .split(",")
      .map((item) => <p className="item-option-sizes">{item}</p>);
  };

  return (
    <>
      <StyledItemPage>
        <div className="itempage-flex">
          <div className="item-images">
            <div className="image-container">
              <img className="item-image" src={clickedItem.images[0]} alt="" />
            </div>
            <div className="image-container">
              <img className="item-image" src={clickedItem.images[1]} alt="" />
            </div>
          </div>
          <div className="item-info">
            <div className="item-info-options">
              <h4 className="item-name">{clickedItem.name}</h4>
              <p className="item-price">
                {clickedItem.price.currency} ${clickedItem.price.value}
              </p>
            </div>
            <div className="order">
              <p className="pre-order">pre-order</p>
              <div className="order-option">
                <p className="order-option-title">color</p>
                <div className="order-color-options">{getItemColors()}</div>
              </div>
              <div className="order-option">
                <p className="order-option-title">size</p>
                <div className="order-size-options">{getItemSizes()}</div>
              </div>
            </div>
            <div className="add-buttons" onClick={onAddToCart}>
              <button className="add-button add-to-bag">add to bag</button>
              <button className="add-button add-to-fav">
                <img
                  src="/assets/img/icons/wishlist-icon-white.svg"
                  width={25}
                  alt=""
                />
              </button>
            </div>
            <div className="accordeon">
              {accordionData.map(({ title, content }) => (
                <Accordeon title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </StyledItemPage>
      <UpdateSubscription />
    </>
  );
}
