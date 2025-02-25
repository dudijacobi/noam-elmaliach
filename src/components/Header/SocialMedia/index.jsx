import React from "react";
import InstagramIcon from "../../svg/InstagramIcon";
import FacebookIcon from "../../svg/FacebookIcon";
import WhatsappIcon from "../../svg/WhatsappIcon";
import "./index.css";

const SocialMedia = () => (
  <div className="social-media">
    <a
      title="Instagram profile - link"
      target="blank"
      href="https://www.google.com/noam-elmaliach"
    >
      <InstagramIcon />
    </a>
    <a
      title="Facebook profile - link"
      target="blank"
      href="https://www.google.com/noam-elmaliach"
    >
      <FacebookIcon />
    </a>
    <a
      title="Whatsapp contact - link"
      target="blank"
      href="https://www.google.com/noam-elmaliach"
    >
      <WhatsappIcon />
    </a>
  </div>
);

export default SocialMedia;
