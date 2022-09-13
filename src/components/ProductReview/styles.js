import styled from "styled-components";

export const StyledProductReviewSection = styled.div`
  & .links-container {
    padding: 25px 0;
    display: flex;
    gap: 70px;
  }

  & .link-tools {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    line-height: 48px;
    color: #000f08;
    text-decoration: none;
  }

  & .link-title-icon {
    margin-left: 10px;
    height: 20px;
  }

  & .images-wrapper {
    display: flex;
  }

  & .group-images-container {
    display: flex;
  }

  & .image-item {
    max-width: 100%;
  }

  & .group-images-item {
    max-width:50%;
  }

  & .shop-tag {
    padding: 20px 0;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 48px;
    letter-spacing: 4%;
    color: #000f08;
  }
  & .images-wrapper {
    flex-wrap: wrap;
    max-width: 100%;
  }

  & .product-review-content {
    max-width:50%;
    min-width: 400px;
  }
  @media screen and (max-width: 940px) {
    .section-product-review {
      justify-content: center;
    }
    .group-images-container {
      flex-direction: column;
    }
    .group-images-item {
      max-width: 100%;
    }
    h3 {
      text-align: center;
    }
  }
  @media screen and (max-width: 650px) {
  .product-review-content {
    min-width: none;
  }

  }
`;
