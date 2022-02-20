import React, { useState } from "react";

const Feature = () => {
  const [data, setdata] = useState({
    feature: [
      {
        type: "Travel",
        cardTitle: "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all",
        image: require("../../../images/featureImg.png"),
        cardText: "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all",
        publisher: "U. R. Oliver",
      },
      {
        type: "Dine",
        cardTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.",
        cardText: "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all",
        publisher: "U. R. Oliver",
      },
      {
        type: "OPEN HOUSE",
        cardTitle: "UAE: CBSE Term 1 exams begin tomorrow; important guidelines announced",
        image: require("../../../images/tree.png"),
        cardText: "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all",
        publisher: "U. R. Oliver",
      },
      {
        type: "OPEN HOUSE",
        cardTitle: "Meals on wheels best food trucks in the UAE",
        image: require("../../../images/car.png"),
        cardText: "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all",
        publisher: "U. R. Oliver",
      },
      {
        type: "Dine",
        cardTitle: "Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium lobortis.",
        cardText: "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all",
        publisher: "U. R. Oliver",
      },
      {
        type: "Dine",
        cardTitle: "World Expo in Dubai: MP delegation holds discussion over film city and institute",
        cardText: "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all",
        publisher: "U. R. Oliver",
      },
      {
        type: "Dine",
        cardTitle: "Meals on wheels best food trucks in the UAE",
        cardText: "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all",
        publisher: "U. R. Oliver",
      },
    ],
  });

  return (
    <article className="feature container">
      {data.feature.map((item, i) => {
        return (
          <div key={i} className={`card card${i + 1}`}>
            <p className="type">{item.type}</p>
            <h3 className="card-title">{item.cardTitle}</h3>
            <p className="card-text">{item.cardText}</p>
            <p className="publisher">{item.publisher}</p>
            {item.image ? <img src={item.image} alt="feature" className="feature-img" /> : ""}
          </div>
        );
      })}
      {/* <div className="card card2">
        <p className="type">Travel</p>
        <h3 className="card-title">Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all</h3>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum. </p>
        <p className="publisher">U. R. Oliver</p>
        <img src={featureImg} alt="feature" className="feature-img" />
      </div>
      <div className="card card3">
        <p className="type">Travel</p>
        <h3 className="card-title">Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all</h3>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum. </p>
        <p className="publisher">U. R. Oliver</p>
        <img src={featureImg} alt="feature" className="feature-img" />
      </div>
      <div className="card card4">
        <p className="type">Travel</p>
        <h3 className="card-title">Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all</h3>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum. </p>
        <p className="publisher">U. R. Oliver</p>
        <img src={featureImg} alt="feature" className="feature-img" />
      </div>
      <div className="card card5">
        <p className="type">Travel</p>
        <h3 className="card-title">Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all</h3>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum. </p>
        <p className="publisher">U. R. Oliver</p>
        <img src={featureImg} alt="feature" className="feature-img" />
      </div>
      <div className="card card6">
        <p className="type">Travel</p>
        <h3 className="card-title">Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all</h3>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum. </p>
        <p className="publisher">U. R. Oliver</p>
        <img src={featureImg} alt="feature" className="feature-img" />
      </div>
      <div className="card card7">
        <p className="type">Travel</p>
        <h3 className="card-title">Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all</h3>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum. </p>
        <p className="publisher">U. R. Oliver</p>
        <img src={featureImg} alt="feature" className="feature-img" />
      </div> */}
    </article>
  );
};

export default Feature;
