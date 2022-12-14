import React from "react";

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.incrementScore(props.name)}>
      <img className="cardImg" src={props.source} alt={props.name} />
      <div className="cardName">
        <h4>{props.name}</h4>
      </div>
    </div>
  );
};

export default Card;
