import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.png";
import ava02 from "../../assets/all-images/ava-3.png";
import ava03 from "../../assets/all-images/ava-2.png";

const OUR__MEMBERS = [
  {
    name: "Nishit Rokad",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "https://www.instagram.com/nishit_patel_078/",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "Bhargav Sandis",
    experience: "3 years of experience",
    fbUrl: "#",
    instUrl: "https://www.instagram.com/mad_boi_o07/",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Smit Patel",
    experience: "2 years of experience",
    fbUrl: "#",
    instUrl: "https://www.instagram.com/smit0164/",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i className="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i className="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i className="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
