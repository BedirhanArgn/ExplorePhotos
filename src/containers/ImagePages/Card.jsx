import React from 'react';
import './card.css'
import DetailPage from '../DetailPage/DetailPage'
import { Link } from 'react-router-dom';
const Card=({image})=> {
const ref=React.createRef();
const [span,setSpan]=React.useState();
const [isOpen, setIsOpen] = React.useState(false);

React.useEffect(() => {
  ref.current.addEventListener('load', setSpans)
}, [])

const togglePopup = () => {
    setIsOpen(!isOpen);
  }

const setSpans = () => {
const height = ref.current.clientHeight
const spans = Math.ceil(height/10)
setSpan(spans);
};
const {description, urls} = image;
return (
    <>
    <div style={{gridRowEnd: `span ${span}`}}>
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