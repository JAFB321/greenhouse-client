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
          console.log(data?.data);
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
      <SensorCard
            sensorID={'Temperatura'}
            sensorType={'temperature'}
            value={24}
            valueType={'C'}
            fullname={'Sensor Alpine C-23'}
          />

        <SensorCard
            sensorID={'Humedad'}
            value={40}
            valueType={'%'}
            fullname={'Sensor Humidity 3000'}
          />
      </div>
    </>
  );
};
