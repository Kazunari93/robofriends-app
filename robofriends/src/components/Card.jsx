import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="robots"
        src={`https://robohash.org/${id}`}
        width="100"
        height="100"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
