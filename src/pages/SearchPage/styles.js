import styled from "styled-components";

export const StyledSearchPage = styled.div`
  & .search-section {
    background: #e5e5e5;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .search-block {
    transform: translate(0, -100px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
  & .search-input {
    min-width: 1200px;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 3px solid #fff;
    font-size: 30px;
    outline: none;
  }
  & ::placeholder {
    color: #fff;
  }
  & h2 {
    text-align: center;
    font-size: 30px;
    padding: 100px 0 0;
  }
  @media screen and (max-width: 1360px) {
    .search-input {
      min-width: 0;
    }

    .search-list {
      justify-content: center;
    }
  }
`;
