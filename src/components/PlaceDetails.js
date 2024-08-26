// src/components/PlaceDetails.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toggleVisited } from "../redux/placesSlice";
import PlaceItem from "./PlaceItem";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlaceDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const place = useSelector((state) =>
    state.places.places.find((place) => place.id === parseInt(id))
  );

  if (!place) {
    return <div style={{ paddingLeft: 30 }}>Place not found</div>;
  }

  return (
    <div>
      <button className="go-back" onClick={() => navigate(-1)}>
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} style={{ paddingRight: 5 }} />
        Go Back
      </button>
      <div className="container">
        <PlaceItem place={place} isDetail={true} />
      </div>
    </div>
  );
};

export default PlaceDetails;
