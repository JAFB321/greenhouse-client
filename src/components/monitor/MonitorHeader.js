import React from "react";

export const MonitorHeader = ({ title }) => {
  return (
    <div className="monitor_header">
      <img
        className="logo align-center"
        src="/greenhouse.svg"
        alt="greenhouse icon"
      />
      <h1 className=" text-center title_primary">{title}</h1>
    </div>
  );
};
