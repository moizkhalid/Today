import React, { useState } from "react";
const DesignTwo = () => {
  const [data, setdata] = useState({
    cardWithAvatar: [
      {
        image: require("../../../images/avatar.png"),
        name: "Vladimir Putin",
        desc: "Meals on wheels best in the UAE",
      },
      {
        image: require("../../../images/avatar.png"),
        name: "Vladimir Putin",
        desc: "Meals on wheels best in the UAE",
      },
      {
        image: require("../../../images/avatar.png"),
        name: "Vladimir Putin",
        desc: "Meals on wheels best in the UAE",
      },
      {
        image: require("../../../images/avatar.png"),
        name: "Vladimir Putin",
        desc: "Meals on wheels best in the UAE",
      },
    ],
  });
  return (
    <article className="article-with-avatar container">
      {data.cardWithAvatar.map((item, i) => {
        return (
          <div key={i} className="card-with-avatar">
            <span>{i + 1}</span>
            <img src={item.image} alt="avatar" />
            <h5 className="name">{item.name}</h5>
            <p className="desc">{item.desc}</p>
          </div>
        );
      })}
    </article>
  );
};

export default DesignTwo;
