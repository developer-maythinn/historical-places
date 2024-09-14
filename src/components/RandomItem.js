import React from "react";

function RandomItem(props) {
  const { place } = props;
  return (
    <>
      <div className="container">
        <div className="random-card">
          <img src={place.image} alt={place.name} />
          <div className="content">
            <h3>{place.name}</h3>
            <p>{place.description} Test</p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default RandomItem;
