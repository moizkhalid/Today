import React, { useState } from "react";

const DesignFour = () => {
  const [data, setdata] = useState({
    cardWithAvatar: [
      {
        image: require("../../../images/d-four-one.png"),
        name: "Omar Mukhtar",
        desc: "Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in",
        publisher: "U. R. Oliver",
      },
      {
        image: require("../../../images/d-four-one.png"),
        name: "Omar Mukhtar",
        desc: "Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in",
        publisher: "U. R. Oliver",
      },
      {
        image: require("../../../images/d-four-one.png"),
        name: "Omar Mukhtar",
        desc: "Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in",
        publisher: "U. R. Oliver",
      },
      {
        image: require("../../../images/d-four-one.png"),
        name: "Omar Mukhtar",
        desc: "Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in",
        publisher: "U. R. Oliver",
      },
    ],
  });
  return (
    <article className="container article-design-four">
      {data.cardWithAvatar.map((item, i) => {
        return (
          <div key={i} className="card-with-avatar">
            <img src={item.image} alt="avatar" />
            <h5 className="name">{item.name}</h5>
            <p className="desc">{item.desc}</p>
            <p className="publisher">{item.publisher}</p>
          </div>
        );
      })}
    </article>
  );
};

export default DesignFour;
