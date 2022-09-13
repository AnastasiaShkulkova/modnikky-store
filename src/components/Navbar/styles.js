import styled from "styled-components";

export const StyledNav = styled.nav`
  .nav-container {
    margin: 0 auto;
    padding: 20px 120px;
    display: flex;
    background-color: #fff;
    position: fixed;
    align-items: center;
    left: 0;
    width: 100%;
    z-index: 10;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    flex-wrap: wrap;
  }

  .nav-options {
    display: flex;
    justify-content: space-between !important;
    align-items: center;
    gap: 30px;
  }

  .options-tools {
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #000f08;
  }
  .nav-search-icon {
    height: 23px;
    width: 23px;
    margin-right: 5px;
  }

  .nav-image {
    margin: 0 75px;
  }

  .nav-block {
    flex: 1;
    display: flex;
    justify-content: center;
    max-width: 510px;
  }

  .nav-logo {
    max-width: 470px;
    height: 50px;
  }
  .search-input {
    font-family: "Roboto", sans-serif;
    padding: 10px;
    padding-left: 40px;
    border: none;
    min-width: 250px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  .search-block {
    align-items: center;
    position: relative;
  }
  .search-button {
    position: absolute;
    left: 10px;
  }
  .btn-remove {
    position: absolute;
    right: 10px;
  }

  .search-option {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nav-menu {
    display: none;
  }

  .mobile-nav-icons {
    display: none;
  }

  .burger-menu-container {
    height: 100vh;
    background: #fff;
    padding: 30px;
    position: fixed;
    left: 0;
    top: 0;
    width: 30vw;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 100;
    min-width: 350px;
  }

  .burger-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    margin-top: 10vh;
    font-size: 20px;
  }
  .mobile-icons {
    display: flex;
  }
  @media screen and (max-width: 1360px) {
    .nav-menu {
      display: block;
    }
    .nav-options {
      gap: 0;
    }
    .nav-options {
      display: none;
    }
    .mobile-nav-icons {
      display: block;
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 940px) {
    .nav-image {
      margin: 0;
    }

    .nav-container {
      padding: 20px 50px;
    }
  }
  @media screen and (max-width: 650px) {
    .nav-container {
      padding: 20px;
    }
    .logo {
      width: 200px;
    }
    .nav-image {
      flex: 0;
      margin-left: 20px;
    }
  }
`;
