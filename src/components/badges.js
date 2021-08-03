import React from "react";
const Badges = ({ label, variant }) => {
  return <div className={variant}>{label}</div>;
};

export default Badges;
