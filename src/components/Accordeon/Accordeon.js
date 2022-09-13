import React from "react";
import { useState } from "react";
import { StyledAccordeon } from "./styles";
export default function Accordeon({title, content}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledAccordeon>
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? (
              <img src="/assets/img/icons/minus.svg" alt="" />
            ) : (
              <img src="/assets/img/icons/plus.svg" alt="" />
            )}
            <div>{title}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
    </StyledAccordeon>
  );
}
