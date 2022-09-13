import styled from "styled-components";

export const StyledCategoriesSection = styled.div`
  & .section-categories {
    padding: 150px 0;
  }

  & .categories-btn-container {
    padding-top: 140px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    flex-wrap: wrap;
  }

  & .categories-link {
    text-decoration: none;
  }

  & .categories-btn {
    padding: 10px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background: #ede7f0;
    border: none;
    flex: 1;
  }

  & .button-text {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 40px;
    line-height: 68px;
    color: #000f08;
  }
  @media screen and (max-width: 940px) {
    .section-categories {
      padding-top: 50px;
      padding-bottom: 70px;
    }
    
    .categories-btn-container {
      padding-top: 50px;
      justify-content: center;
    }
  }
`;


