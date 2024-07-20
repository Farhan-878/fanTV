import React from "react";
import explore from "../../assets/images/explore.png";
import "./network.css";

const FanNetwork = () => {
  return (
    <div className="fan-network-content">
      <div className="container">
        <div className="fan-network-container">
          <div className="fan-network-title" data-aos="fade-up">
            <h2>
              FanCloud CDN network revolutionizes video infrastructure with
              community-driven Innovation
            </h2>
            <p>
              FanCloud pioneers a new era of connectivity with its decentralised
              content delivery network (dCDN), leveraging a global network of
              community-powered nodes. By harnessing a decentralised
              architecture, dCDN drastically reduces data transfer and compute
              costs while enhancing load time. Join FanCloud’s dCDN network and
              experience the future of seamless, secure and community- driven
              consumption
            </p>
          </div>
          <div className="fan-network-img" data-aos="zoom-in">
            <img src={explore} alt="fan-network-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanNetwork;
