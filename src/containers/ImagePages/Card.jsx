import React from 'react';
import './card.css'
import DetailPage from '../DetailPage/DetailPage'
const Card = ({ image }) => {
  const ref = React.createRef();
  const [isOpen, setIsOpen] = React.useState(false);


  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  const { description, urls } = image;
  return (
    <>
      <div className="card-photo">
        <img
          className="list-image"
          ref={ref}
          alt={description}
          src={urls.regular}
          onClick={togglePopup}
        />

      </div>
      {isOpen && <DetailPage
        imageInfo={image}
        handleClose={togglePopup}
      />}
    </>

  );

}
export default Card;