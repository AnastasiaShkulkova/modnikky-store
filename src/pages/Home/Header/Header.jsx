import { StyledHeader} from "./styles";

const HomePageTitle = "NEW COLLECTION";
const HomepageSubtitle =
  "Our easiest chuck-on-and-go staples come with a serious style heritage that’s liberating, sexy, comfy and supremely cool.";
const HomePageButtonText = "SHOP NEW ARRIVALS";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="homepage-container">
        <div className="homepage-info">
          <div className="homepage-offer">
            <h1 className="homepage-title">{HomePageTitle}</h1>
            <p className="homepage-subtitle">{HomepageSubtitle}</p>
            <button className="homepage-btn">
              <p className="btn-text">{HomePageButtonText}</p>
            </button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default (Header);
