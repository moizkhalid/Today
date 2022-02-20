import React, { useState } from "react";
import dummyImg from "../../../images/d-three-one.png";
const DesignThree = () => {
  const [data, setdata] = useState({
    designThree: [
      {
        image: require("../../../images/d-three-one.png"),
        type: "Travel",
        title: "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all",
        content: "Exhin imlave asfear asfasas afsfeaarsa asfasfasf asfasfa ten cultable doice inverum",
        publisher: "Cvita Doleschall",
      },
      {
        image: require("../../../images/d-three-one.png"),
        type: "Culture",
        title: "Meals on wheels best food trucks in the UAE",
        publisher: "U. R. Oliver",
      },
      {
        image: require("../../../images/d-three-one.png"),
        type: "Culture",
        title: "Meals on wheels best food trucks in the UAE",
        publisher: "U. R. Oliver",
      },
      {
        image: require("../../../images/d-three-one.png"),
        type: "Culture",
        title: "Meals on wheels best food trucks in the UAE",
        publisher: "U. R. Oliver",
      },
    ],
  });
  return (
    <article className="article-design-three container">
      {/* {data.designThree.map((item, i) => {
        return (
          <div key={i} className="card-with-avatar">
            <span>{i + 1}</span>
            <img src={item.image} alt="avatar" />
            <h5 className="name">{item.name}</h5>
            <p className="desc">{item.desc}</p>
          </div>
        );
      })} */}
      <div className="card card1">
        <img src={dummyImg} alt="feature" />
        <div className="details">
          <p className="type">Travel</p>
          <h3 className="title">Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all</h3>
          <h5 className="content">Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all</h5>
          <p className="publisher">Cvita Doleschall</p>
        </div>
      </div>
      <div className="card card2">
        <img src={dummyImg} alt="feature" />
        <div className="details">
          <p className="type">Travel</p>
          <h3 className="title">Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all</h3>
          <p className="publisher">Cvita Doleschall</p>
        </div>
      </div>
      <div className="card card3">
        <img src={dummyImg} alt="feature" />
        <div className="details">
          <p className="type">Travel</p>
          <h3 className="title">Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all</h3>
          <p className="publisher">Cvita Doleschall</p>
        </div>
      </div>
      <div className="card card4">
        <img src={dummyImg} alt="feature" />
        <div className="details">
          <p className="type">Travel</p>
          <h3 className="title">Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all</h3>
          <p className="publisher">Cvita Doleschall</p>
        </div>
      </div>
    </article>
  );
};

export default DesignThree;
