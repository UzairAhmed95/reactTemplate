import React from "react";
import { Placeholder } from "rsuite";

const LoadingSection = ({ height }) => {
  return (
    <div className="card mb-3 widget-content">
      <Placeholder.Graph height={height} active />
    </div>
  );
};

export default LoadingSection;
