import React from 'react';

const ToyCard = ({name, likes, image, id}) => {

  const handleLike = () => {
    console.log("Clicked", id);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} className="toy-avatar" alt={name}/>
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {'<3'}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}


export default ToyCard;
