import React from "react";

export const ReportsHeader = ({ title }) => {
  return (
    <div>
      <div className="monitor_header">
        <img
          className="logo align-center"
          src="/greenhouse.svg"
          alt="greenhouse icon"
        />
        <h1 className=" text-center title_primary">{title}</h1>
      </div>
    </div>
  );
};
