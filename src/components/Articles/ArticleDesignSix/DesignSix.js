import React from "react";
import dummyImg from "../../../images/d-six.png";

const DesignSix = () => {
  return (
    <article className="container article-design-six">
      <div className="card">
        <img src={dummyImg} alt="feature" />
        <p className="type">OPEN HOUSE</p>
        <h5 className="contant">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.</h5>
        <p className="publisher">U. R. Oliver</p>
      </div>
      <div className="card">
        <img src={dummyImg} alt="feature" />
        <p className="type">OPEN HOUSE</p>
        <h5 className="contant">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.</h5>
        <p className="publisher">U. R. Oliver</p>
      </div>
      <div className="card">
        <img src={dummyImg} alt="feature" />
        <p className="type">OPEN HOUSE</p>
        <h5 className="contant">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.</h5>
        <p className="publisher">U. R. Oliver</p>
      </div>
    </article>
  );
};

export default DesignSix;
