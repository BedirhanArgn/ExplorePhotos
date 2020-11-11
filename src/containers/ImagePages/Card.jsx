import React from 'react';
import './card.css'
import DetailPage from '../DetailPage/DetailPage'
import OutsideClickHandler from "react-outside-click-handler";
const Card = ({ image }) => {
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
          alt={description}
          src={urls.regular}
          onClick={togglePopup}
        />
      </div>
      {isOpen &&
        <div className="popup-box">
          <div className="box">

            <OutsideClickHandler onOutsideClick={() => { togglePopup() }}>
              <DetailPage
                imageInfo={image}
                handleClose={togglePopup}
              />
            </OutsideClickHandler>
          </div>
        </div>
      }

    </>

  );
}
export default Card;