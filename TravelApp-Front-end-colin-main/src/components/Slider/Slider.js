import React, { useState } from "react";
import "./slider.css";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const SliderData = [
    {
      id: 1,
      img: "../Assets/Images/photo-1518684079-3c830dcef090.avif",
      key: 11,
    },
    {
      id: 2,
      img: "../Assets/Images/photo-1476514525535-07fb3b4ae5f1.avif",
      key: 12,
    },
    {
      id: 3,
      img: "../Assets/Images/photo-1500530855697-b586d89ba3ee.avif",
      key: 13,
    },
    {
      id: 4,
      img: "../Assets/Images/photo-1502791451862-7bd8c1df43a7.avif",
      key: 14,
    },
    {
      id: 5,
      img: "../Assets/Images/photo-1523906834658-6e24ef2386f9.avif",
      key: 15,
    },
    {
      id: 6,
      img: "../Assets/Images/photo-1527631746610-bca00a040d60.avif",
      key: 16,
    },
    {
      id: 7,
      img: "../Assets/Images/photo-1533105079780-92b9be482077.avif",
      key: 17,
    },
    {
      id: 8,
      img: "../Assets/Images/pexels-julius-silver-753626.jpg",
      key: 18,
    },
    {
      id: 9,
      img: "../Assets/Images/pexels-nubia-navarro-(nubikini)-386009.jpg",
      key: 19,
    },
    {
      id: 10,
      img: "../Assets/Images/pexels-te-lensfix-1371360.jpg",
      key: 20,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrent(current > 0 ? current - 1 : 2)
      : setCurrent(current < SliderData.length - 5 ? current + 1 : 2);
  };

  return (
    <div className="slider--container">
      <div
        className="slider--body"
        style={{ transform: `translateX(-${current * 20}vw)` }}
      >
        {SliderData.map((d) => (
          <div className="img--container" key={d.key}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <img className="imgContainer" src={d.img} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FaArrowAltCircleLeft
        className="left-arrow"
        onClick={() => handleClick("left")}
      />
      <FaArrowAltCircleRight
        className="right-arrow"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
//  className={index === current ? "slide active" : "slide"}
