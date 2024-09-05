import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { markAsVisited, unmarkAsVisited } from "../redux/placesSlice"; // Adjust path as needed
import RandomPlaceSuggestion from "./RandomPlaceSuggestion";
import PlaceItem from "./PlaceItem";

const PlacesList = () => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  const toggleVisitedStatus = (id, visited) => {
    if (visited) {
      dispatch(unmarkAsVisited(id));
    } else {
      dispatch(markAsVisited(id));
    }
  };
  return (
    <div>
      <RandomPlaceSuggestion />

      <h1>All Historical Places</h1>
      <div className="container">
        {places &&
          places.length > 0 &&
          places.map((place) => (
            <React.Fragment key={place.id}>
              <PlaceItem
                place={place}
                toggleVisitedStatus={toggleVisitedStatus}
              />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default PlacesList;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";

// const PlacesList = () => {
//   const places = useSelector((state) => state.places.places);
//   const dispatch = useDispatch();

//   const toggleVisitedStatus = (id, visited) => {
//     if (visited) {
//       dispatch(unmarkAsVisited(id));
//     } else {
//       dispatch(markAsVisited(id));
//     }
//   };

//   return (
//     <div>
//       <h3>Places List</h3>
//       <RandomPlaceSuggestion />
//       <hr />{" "}
//       <div className="container">
//         {places?.places.map((place, index) => (
//           <React.Fragment key={index}>
//             <PlaceItem
//               place={place}
//               toggleVisitedStatus={toggleVisitedStatus}
//             />
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PlacesList;
