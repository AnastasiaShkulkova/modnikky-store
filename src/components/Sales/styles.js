import styled from "styled-components";

export const StyledSales = styled.section`
  & .slider-container {
    overflow: hidden;
    max-width: 100%;
    padding: 100px 0 60px;
  }

  & .slick-list {
    display: flex;
    gap: 15px;
  }

  & .slick-track {
    display: flex;
  }

  & .item-image {
    max-width: 100%;
  }

  & .item-price-container {
    display: flex;
    gap: 30px;
  }

  & .item-price {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 76px;
    text-decoration-line: line-through;
    color: #000f08;
  }

  & .item-price-discount {
    font-family: "Roboto", sans-serif;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 76px;
    color: #d7302d;
  }
  @media screen and (max-width: 940px) {
    .slider-container {
      padding-top: 50px;
      padding-bottom: 0;
    }
  }
`;
