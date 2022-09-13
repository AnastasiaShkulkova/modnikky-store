import styled from "styled-components";

export const StyledAccordeon = styled.div`
  .accordion {
    &-item {
      margin-bottom: 30px;
    }
    &-title {
      display: flex;
      cursor: pointer;
      gap: 15px;
      font-size: 20px;
    }
    &-content {
      padding-top: 15px;
      color: #8c8c8c;
      letter-spacing: 0.5px;
    }
  }
`;
