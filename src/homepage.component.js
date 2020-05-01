import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div classnName="menu-item">
        <div className="content">
          <h1 classnName="title">HATS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div classnName="menu-item">
        <div className="content">
          <h1 classnName="title">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div classnName="menu-item">
        <div className="content">
          <h1 classnName="title">WOMENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>

    <div classnName="menu-item">
      <div className="content">
        <h1 classnName="title">MENS</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  </div>
);

export default HomePage;
