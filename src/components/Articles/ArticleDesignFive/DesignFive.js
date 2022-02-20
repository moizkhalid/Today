import React, { useState } from "react";
import bg from "../../../images/d-five-bg.png";

const DesignFive = () => {
  const [data, setdata] = useState({
    cardWithAvatar: [
      {
        image: require("../../../images/tree.png"),
        name: "Omar Mukhtar",
        desc: "Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in",
        publisher: "U. R. Oliver",
      },
    ],
  });
  return (
    <article className="article-design-five container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="full-width-card">
        <span className="read">LONG READ</span>
        <div className="detail">
          <p className="sub-heading">Meals on wheels: best in the UAE</p>
          <h2 className="title">Louvre Abu Dhabi marks 4th anniversary with world class exhibition Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all</h2>
          <p className="publisher">A. R. Oliver</p>
        </div>
      </div>
    </article>
  );
};

export default DesignFive;
