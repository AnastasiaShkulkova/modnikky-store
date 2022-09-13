import styled from "styled-components";

export const StyledCard = styled.div`
  .card {
    position: relative;
    padding-bottom: 40px;
    max-width: 100%;
  }

  .card-like {
    position: absolute;
    right: 15px;
    top: 15px;
  }

  .card-image {
    max-width: 100%;
  }
  .card-hover {
    left: -0;
    top: 0;
    position: absolute;
    background: rgba(0, 15, 8, 0.6);
    width: 100%;
    height: 100%;
    transform: translate(-100%, 0);
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-image-container {
    position: relative;
    overflow: hidden;
  }

  .card-image-container:hover .card-hover {
    left: 0;
    transform: translate(0, 0);
  }
  .card-hover-btn {
    background: #fff;
    border-radius: 28px;
    padding: 10px 40px;
    font-family: Roboto;
    font-weight: 700;
  }
`;
