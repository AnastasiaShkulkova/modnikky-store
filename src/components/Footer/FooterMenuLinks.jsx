import { memo } from "react";
import {
  AboutLink,
  AddressLink,
  CareesLink,
  ContactLink,
  ContactTitle,
  DeliveryLink,
  EmailLink,
  FacebookLink,
  FaqLink,
  GiftLink,
  GuideLink,
  InfoTitle,
  InstagramLink,
  OdnoklassnikiLink,
  PaymentLink,
  PhoneNumberLink,
  PoliciesLink,
  ReturnLink,
  ServiceTitle,
  SocialTitle,
  TrackingLink,
} from "./config";

export const ServiceLinks = memo(() => {
  return (
    <div className="footer-menu">
      <h4 className="menu-title">{ServiceTitle}</h4>
      <ul className="menu-list">
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {ContactLink}
          </p>
        </li>
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {TrackingLink}
          </p>
        </li>
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {DeliveryLink}
          </p>
        </li>
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {PaymentLink}
          </p>
        </li>
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {ReturnLink}
          </p>
        </li>
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {FaqLink}
          </p>
        </li>
      </ul>
    </div>
  );
});

export const InfoLinks = memo(() => {
  return (
    <div className="footer-menu">
      <h4 className="menu-title">{InfoTitle}</h4>
      <ul className="menu-list">
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {GiftLink}
          </p>
        </li>
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {GuideLink}
          </p>
        </li>
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {CareesLink}
          </p>
        </li>
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {AboutLink}
          </p>
        </li>
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {PoliciesLink}
          </p>
        </li>
      </ul>
    </div>
  );
});

export const SocialLinks = memo(() => {
  return (
    <div className="footer-menu">
      <h4 className="menu-title">{SocialTitle}</h4>
      <ul className="menu-list">
        <li className="menu-list list-item">
          <div className="list-item item-container">
            <img
              className="item-icon"
              src="/assets/img/icons/facebok-logo.svg"
              alt="#"
            />
            <a href="https://www.facebook.com/" className="item-link">
              {FacebookLink}
            </a>
          </div>
        </li>
        <li className="menu-list list-item">
          <div className="list-item item-container">
            <img
              className="item-icon"
              src="/assets/img/icons/odonklassniki-logo.svg"
              alt="#"
            />
            <a href="https://ok.ru/" className="item-link">
              {OdnoklassnikiLink}
            </a>
          </div>
        </li>
        <li className="menu-list list-item">
          <div className="list-item item-container">
            <img
              className="item-icon"
              src="/assets/img/icons/instagram-logo.svg"
              alt="#"
            />
            <a href="https://www.instagram.com/" className="item-link">
              {InstagramLink}
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
});

export const ContactLinks = memo(() => {
  return (
    <div className="footer-menu">
      <h4 className="menu-title">{ContactTitle}</h4>
      <ul className="menu-list">
        <li className="menu-list list-item">
          <a href="https://mail.google.com/mail/" className="item-link">
            {EmailLink}
          </a>
        </li>
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {PhoneNumberLink}
          </p>
        </li>
        <li className="menu-list list-item">
          <p href="#" className="item-link">
            {AddressLink}
          </p>
        </li>
      </ul>
    </div>
  );
});
