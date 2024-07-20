import React from "react";
import explore from "../../assets/images/explore.png";
import arrowblack from "../../assets/images/arrow-right-black.png";
import "./network.css";
import { Button } from "react-bootstrap";

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
          <div className="fan-network-box-container">
            <div className="fan-network-box blue-box" data-aos="fade-up">
              <h2>Content Nodes</h2>
              <p>
                Content Nodes, Earn rewards for supplying their GPU, Storage and
                bandwidth for dCDN
              </p>
              <div className="fan-network-box-btn">
                <Button>
                  Deploy
                  <img src={arrowblack} alt="arrow" />
                </Button>
              </div>
            </div>
            <div className="fan-network-box color-box" data-aos="fade-up">
              <h2>Orchestrators</h2>
              <p>
                Orchestrators will be responsible for connecting the client with
                the content node for seamless streaming. Traffic distribution
                will be based on multiple factors like job type, performance
              </p>
              <div className="fan-network-box-btn">
                <div className="coming-soon-red">Coming Soon</div>
              </div>
            </div>
            <div className="fan-network-box green-box" data-aos="fade-up">
              <h2>Validators</h2>
              <p>
                Validators will be responsible for validating the execution of
                dCDN Network. Validators will earn rewards from Staking and earn
                a cut on the executions validated.
              </p>
              <div className="fan-network-box-btn">
                <div className="coming-soon">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanNetwork;
