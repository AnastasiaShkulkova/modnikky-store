import styled from "styled-components";


export const StyledItemPage = styled.div`
  & .itempage-flex {
    padding-top: 80px;
    display: flex;
    max-width: 100%;
  }

  & .item-images {
    display: flex;
    max-width: 75%;
  }
  & .item-image {
    max-width: 100%;
  }

  & .item-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 80px;
  }
  & .item-name {
    font-size: 26px;
    line-height: 48px;
    letter-spacing: 0.04em;
    color: #000f08;
    font-weight: 400;
    text-transform: uppercase;
    text-align: left;
    padding-top: 0;
  }

  & .item-price {
    margin-top: 25px;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
  }

  & .pre-order {
    text-transform: uppercase;
    color: #d8d8d8;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    margin-top: 10px;
  }

  & .order-color-options-item {
    width: 40px;
    height: 40px;
    border: 1px solid #000;
    cursor: pointer;
  }

  & .order-option-title {
    text-transform: uppercase;
    color: #8c8c8c;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    margin-top: 40px;
    margin-bottom: 10px;
  }

  & .order-size-options {
    display: flex;
    gap: 25px;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    font-weight: 400;
    color: #000f08;
  }

  & .item-option-sizes {
    cursor: pointer;
  }

  & .add-buttons {
    margin-top: 50px;
    display: flex;
    gap: 2px;
  }
  & .add-button {
    background-color: #000;

    padding: 15px;
  }

  & .add-to-bag {
    font-size: 20px;
    flex: 1;
    color: #fff;
    text-transform: uppercase;
  }
  .accordeon {
    margin-top: 70px;
  }
`;