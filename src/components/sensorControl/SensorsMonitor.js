import React, { useContext, useEffect, useState } from "react";
import { SensorCard } from "./SensorCard";
import { AuthContext } from "../../auth/AuthContext";

import axios from "axios";

export const SensorsMonitor = () => {
  const [sensors, setSensors] = useState([]);

  const { userAuth } = useContext(AuthContext);

  useEffect(() => {
    const getSensors = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/sensor`,
          {
            headers: {
              token: userAuth?.token,
            },
          }
        );

        setSensors(data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSensors();
  }, []);

  return (
    <>
      <div className="sensor_card-grid">
        {sensors.map((sensor) => (
          <SensorCard
            key={sensor.name}
            sensorID={sensor.name}
            sensorType={sensor.ReadingType.MeasureType.type}
            value={sensor.lastValue}
            valueType={sensor.readSymbol}
            fullname={sensor.fullname}
          />
        ))}
      </div>
    </>
  );
};
