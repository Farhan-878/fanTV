import React from "react";
import { Button } from "react-bootstrap";
import bannerImg from "../../assets/images/banner.png";
import plus from "../../assets/images/plus.png";
import "./home.css";

const HomeBanner = () => {
  return (
    <div className="banner-content">
      <div className="container">
        <div className="banner-content-container">
          <div className="banner-title" data-aos="fade-up">
            <h2>Empowering the Digital Era: Decentarlizing Entertainment</h2>
            <p>
              Join the world’s first DePIN: Revolutionizing Content Streaming
              with faster, Safer and Cheaper Access
            </p>
            <Button>Coming Soon</Button>
          </div>

          <div className="banner-img" data-aos="zoom-in">
            <img src={bannerImg} alt="banner-img" />
          </div>
          <div className="banner-content-box" data-aos="zoom-in">
            <div className="banner-box">
              <div className="banner-box-title">
                <p>No. of Node Operators</p>
                <img src={plus} alt="banner-box-img" />
              </div>
              <h2>2000</h2>
            </div>
            <div className="banner-box">
              <div className="banner-box-title">
                <p>
                  Data Transferred in TB <span>(last 30 days)</span>
                </p>
                <img src={plus} alt="banner-box-img" />
              </div>
              <h2>12,000</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
