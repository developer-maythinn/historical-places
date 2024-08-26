import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleVisited } from "../redux/placesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMapMarker,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import PlaceItem from "./PlaceItem";
import RandomItem from "./RandomItem";

const PlacesList = () => {
  const places = useSelector((state) => state.places.places);
  const [randomPlace, setRandomPlace] = useState(null);
  const dispatch = useDispatch();

  const suggestRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    setRandomPlace(places[randomIndex]);
  };

  return (
    <div>
      <button style={{ marginLeft: 30 }} onClick={suggestRandomPlace}>
        Suggestion Place
      </button>
      {randomPlace && (
        <div className="container">
          <RandomItem place={randomPlace} />
        </div>
      )}
      <h1>All Historical Places</h1>
      <div className="container">
        {places &&
          places.length > 0 &&
          places.map((place) => (
            <React.Fragment key={place.id}>
              <PlaceItem place={place} />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default PlacesList;
