import React from 'react';
import './card.css'
const Card=({image})=> {
const ref=React.createRef();
const [span,setSpan]=React.useState();

React.useEffect(() => {
  ref.current.addEventListener('load', setSpans)

}, [])
const setSpans = () => {
const height = ref.current.clientHeight
const spans = Math.ceil(height/10)
setSpan(spans);
};
const {description, urls} = image;
return (
    <div style={{gridRowEnd: `span ${span}`}}>
        <img
            ref={ref}
            alt={description}
            src={urls.regular}
            onClick={()=>window.open(urls.regular)}
        />
    </div>
);

}
export default Card;