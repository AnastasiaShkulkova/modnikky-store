import { memo } from "react";
import {
  ContactLinks,
  InfoLinks,
  ServiceLinks,
  SocialLinks,
} from "./FooterMenuLinks";
import { StyledFooterSection } from "./styles";

export const FooterSection = memo(() => {
  return (
    <StyledFooterSection>
      <div className="container">
        <section className="footer-section">
          <ServiceLinks />
          <InfoLinks />
          <SocialLinks />
          <ContactLinks />
        </section>
      </div>
    </StyledFooterSection>
  );
});
