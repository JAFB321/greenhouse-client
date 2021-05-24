import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

import { AuthContext } from "../../auth/AuthContext";
import { MonitorHeader } from "../../components/monitor/MonitorHeader";
import { ZoneCard } from "./ZoneCard";

export const MonitorMenu = () => {
  const [zones, setZones] = useState([]);
  const [, setError] = useState({});

  const { userAuth } = useContext(AuthContext);

  useEffect(() => {
    const getZones = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/zone?populated=true`,
          {
            headers: {
              token: userAuth?.token,
            },
          }
        );
        console.log(data);
        if (data?.zones?.length) {
          const { zones } = data;

          setZones(zones);
          setError(false);
        } else setError(true);
      } catch (error) {
        setError(true);
      }
    };

    getZones();
  }, []);

  return (
    <>
      <MonitorHeader title="Greenhouse Monitor" />

      <div className="zone_card-grid">
        {zones.map(({ _id: zoneId, name, plants, sensors }) => (
          <ZoneCard
            zoneId={zoneId}
            name={name}
            plants={plants}
            sensors={sensors}
          />
        ))}
      </div>
    </>
  );
};
