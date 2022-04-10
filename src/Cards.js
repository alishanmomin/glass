import React from "react";
import avatar from "./assets/images/img_avatar.png";

const Cards = () => {
  return (
    <div className="cards">
      <div className="sidebar">
        <img src={avatar} alt="" />
        <div>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-whatsapp"></i>
        </div>
      </div>
      <div className="main-content">
        <h1>Ali Shan Momin</h1>
        <p className="role">Web Developer</p>
        <p>
          Headings must have content and the content must be accessible by a
          screen reader Headings must have content and the content must be
          accessible by a screen readerHeadings must have content and the
          content must be accessible by a screen reader
        </p>
      </div>
    </div>
  );
};

export default Cards;
