import { memo, useState } from "react";
import { StyledSubscriptionSection } from "./styles";

const subscribeTitle = "SIGN UP FOR UPDATES";
const subscribeSubtitle =
  "Sign up for exclusive early sale access and tailored new arrivals.";
const inputPlaceholder = "Your email address";
const buttonText = "JOIN";

const UpdateSubscription = () => {
  const [emailValue, setEmailValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const emailHead = emailValue.split("@");

    // if (
    //   emailHead[0].length > 5 &&
    //   emailValue.includes("@") &&
    //   emailHead[1].includes(".")
    // ) {
    //   console.log("true");
    // } else {
    //   console.log("Error");
    // }
  };

  const handleChange = (e) => setEmailValue(e.target.value);

  return (
    <StyledSubscriptionSection>
      <div className="main-container">
        <section className="section-update-subscription">
          <div className="subscription-container">
            <h3 className="subscription-title">{subscribeTitle}</h3>
            <p className="subscription-subtitle">{subscribeSubtitle}</p>
            <form className="subscription-form">
              <input
                className="subscription-form-input"
                placeholder={inputPlaceholder}
                onChange={handleChange}
                value={emailValue}
              />
              <button
                className="subscription-form-button"
                onClick={handleSubmit}
              >
                {buttonText}
              </button>
            </form>
          </div>
        </section>
      </div>
    </StyledSubscriptionSection>
  );
};

export default memo(UpdateSubscription);
