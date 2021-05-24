import React, { useState } from "react";
import { ZoneInfo } from "./ZoneInfo";

export const ZoneCard = ({ zoneId, name, plants, sensors }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`card zone_card ${isActive && "active"}`}
      onClick={() => !isActive && setIsActive(true)}
    >
      <button
        className={`btn logout zone_card-close ${!isActive && "hide"}`}
        onClick={() => isActive && setIsActive(false)}
      >
        Close
      </button>
      <h1 className="text-center">{name}</h1>

      <div className="zone_card-plant-grid">
        {isActive ? (
          <ZoneInfo
            key={zoneId}
            zoneId={zoneId}
            name={name}
            plants={plants}
            sensors={sensors}
          />
        ) : (
          plants.map(({ type, imageURL }) => (
            <div className="zone_card-plant_img">
              <img
                className="zone_card-plant_img"
                src={imageURL}
                alt={type}
                key={zoneId}
              ></img>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
