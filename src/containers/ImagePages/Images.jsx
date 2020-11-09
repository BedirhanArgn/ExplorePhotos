import React from 'react';
import './images.css';
import Card from './Card'
const Images = (props) => {

    const images = props.images.map((image) => {
        return (
            <Card key={image.id} image={image} />
        )
    });


    return (
        <div className="image-list"> {images} </div>
    );

}
export default Images;