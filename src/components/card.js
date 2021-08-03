import React from "react";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="main-card mb-3 card">
        <div class="card-body">
          <h5 class="card-title pb-1">{props.title}</h5>
          <hr />
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
