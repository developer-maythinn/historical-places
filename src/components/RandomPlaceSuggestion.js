import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { markAsVisited, unmarkAsVisited } from "../redux/placesSlice"; // Adjust path as needed
import PlaceItem from "./PlaceItem";

const RandomPlaceSuggestion = () => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  const [randomPlaceId, setRandomPlaceId] = useState(null);

  // Function to get a random place
  const getRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    const randomPlace = places[randomIndex];
    setRandomPlaceId(randomPlace.id);
  };

  // Function to toggle visited status
  const toggleVisitedStatus = (id, visited) => {
    if (visited) {
      dispatch(unmarkAsVisited(id));
    } else {
      dispatch(markAsVisited(id));
    }
  };

  // Find the selected random place from the Redux store
  const randomPlace = randomPlaceId
    ? places.find((place) => place.id === randomPlaceId)
    : null;

  return (
    <div>
      <h3>Random Place Suggestion</h3>
      <button style={{ marginLeft: "30px" }} onClick={getRandomPlace}>
        Suggest Random Place
      </button>
      <div className="container">
        {randomPlace && (
          <PlaceItem
            place={randomPlace}
            toggleVisitedStatus={toggleVisitedStatus}
          />
        )}
      </div>
    </div>
  );
};

export default RandomPlaceSuggestion;
