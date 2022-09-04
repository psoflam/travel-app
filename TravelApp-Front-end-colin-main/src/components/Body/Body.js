import React from "react";
import "./body.css";

export default function Body() {
  return (
    <div id="body">
      <div className="div1">
        <p className="p1">
          <img
            className="image1"
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt=""
          />
          Looking for that weekend Getaway?
        </p>
      </div>

      <div className="div2">
        <p className="p2">
          <span className="textTwo">Need time away from the kids?</span>
          <img
            className="image2"
            src="https://images.unsplash.com/photo-1513807016779-d51c0c026263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </p>
      </div>

      <div className="div3">
        <p className="p3">
          <img
            className="image3"
            src="https://images.unsplash.com/photo-1529951185765-5e58e46d79e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <span className="textThree">Or Just looking to explore?</span>
        </p>
      </div>
    </div>
  );
}
