import { memo } from "react";
import { StyledProductReviewSection } from "./styles";

const shop = "SHOP";
const shopInst = "SHOP INSTAGRAM";
const shopTag = "#MODNIKKY";

export const ProductReview = memo(() => {
  return (
    <StyledProductReviewSection>
      <div className="main-container">
        <section className="section-product-review">
          <div className="section-product-review links-container">
            <a className="link-tools" href="https://www.instagram.com/">
              {shopInst}
            </a>
            <a className="link-tools" href="https://www.instagram.com/">
              {shop}
              <img
                className="link-title-icon"
                src="/assets/img/icons/arrow.svg"
                alt="#"
              />
            </a>
          </div>
          <div className="section-product-review images-wrapper">
            <div className="product-review-content">
              <img
                className="image-item"
                src="/assets/img/ProductReview/black-blouse.png"
                alt="#"
              />
            </div>

            <div className="group-images-wrap product-review-content">
              <div className="group-images-container">
                <img
                  className="group-images-item"
                  src="/assets/img/ProductReview/striped-jumper.png"
                  alt="#"
                />
                <img
                  className="group-images-item"
                  src="/assets/img/ProductReview/black-top.png"
                  alt="#"
                />
              </div>
              <div className="group-images-container">
                <img
                  className="group-images-item"
                  src="/assets/img/ProductReview/black-crop-top.png"
                  alt="#"
                />
                <img
                  className="group-images-item"
                  src="/assets/img/ProductReview/grey-suit.png"
                  alt="#"
                />
              </div>
            </div>
          </div>
          <h3 className="section-product-review shop-tag">{shopTag}</h3>
        </section>
      </div>
    </StyledProductReviewSection>
  );
});
