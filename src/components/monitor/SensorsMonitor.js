import React, { useEffect, useState } from "react";
import { SensorCard } from "./SensorCard";
import socketIOClient from "socket.io-client";

export const SensorsMonitor = () => {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    try {
      const socket = socketIOClient("ws://localhost:8080");
      socket.on("sensorsData", function (data) {
        var sensors = JSON.parse(data);

        if (sensors) {
          setSensors(
            sensors.map(({ name, fullname, ReadingType, lastValue }) => ({
              name,
              fullname,
              lastValue,
              measureType: ReadingType.MeasureType.type,
              readSymbol: ReadingType.symbol,
              readFullname: ReadingType.fullname,
            }))
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="moinitor__main">
        <div className="container">
          <div className="monitor__box-container card">
            <img
              className="logo align-center"
              src="greenhouse.svg"
              alt="greenhouse icon"
            />
            <h1 className=" text-center title_primary">
              Greenhouse Sensor Monitor
            </h1>
            <div className="sensor_card-grid">
              {sensors.map((sensor) => (
                <SensorCard
                  key={sensor.name}
                  sensorID={sensor.name}
                  sensorType={sensor.measureType}
                  value={sensor.lastValue}
                  valueType={sensor.readSymbol}
                  fullname={sensor.fullname}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
