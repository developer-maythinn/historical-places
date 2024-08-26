import React from "react";

function RandomItem(props) {
  const { place } = props;
  console.log(place);
  return (
    <>
      <div className="container">
        <div className="random-card">
          <img src={place.image} alt={place.name} />
          <div className="content">
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RandomItem;
