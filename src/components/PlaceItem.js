import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMapMarker,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const PlaceItem = (props) => {
  const { place, isDetail, toggleVisitedStatus } = props;
  return (
    <div className="card-container">
      <div className="card">
        <img src={place.image} alt={place.name} />
        <h3>{place.name}</h3>
        <p>{place.description}</p>
        <p className="status-text">
          {place.visited ? "Visited" : "Not Visited"}
        </p>

        <div
          className="btn-gp"
          style={{ justifyContent: isDetail ? "center" : "space-between" }}
        >
          <button onClick={() => toggleVisitedStatus(place.id, place.visited)}>
            <FontAwesomeIcon
              icon={place.visited ? faMapMarkerAlt : faMapMarker}
              style={{ paddingRight: 5 }}
            />
            {place.visited ? "Unmark as Visited" : "Mark as Visited"}
          </button>
          {!isDetail && (
            <Link to={`/place/${place.id}`}>
              <button>
                View Details
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ paddingLeft: 5 }}
                />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceItem;
