import React from "react";
import "./details-page.css";
import icon from '../../images/arrow.png'
import api from '../../api/mapapi.js';
import serialize from '../../utility/serialize'
const DetailPage = (props) => {
  const { user } = props.imageInfo;
  const { username, name, profile_image } = user;
  const [photoInfo, setPhotoInfo] = React.useState('');
  const [mapUrl, setMapUrl] = React.useState('');
  const [location, setLocation] = React.useState()
  const KEY = "pP1VR0q4_2Q8Jc71pIi6bt11j9PK_nUVQF7WW7TVEMI";

  React.useEffect(() => {
    fetchPhotoDetails();
  }, [])

  React.useEffect(() => {
    fetchFromApi()
  }, [photoInfo])


  const fetchPhotoDetails = async () => {
    await fetch(`https://api.unsplash.com/photos/${props.imageInfo.id}?client_id=${KEY}`)
      .then(response => response.json())
      .then(data => {
        setLocation(data.location)
        setPhotoInfo(data);

      })
  }


  const fetchFromApi = async () => {
    if (location) {
      const params = serialize({
        zoom: 13,
        size: '1200,350',
        center: `${location.position.latitude},${location.position.longitude}`,
        mcenter: `${location.position.latitude},${location.position.longitude}`,
        key: api.openStrepMapKey
      })
      setMapUrl(params)
    }

  }

  return (
    <>

      <div className="image">
        <img src={`${props.imageInfo.urls.regular}`}></img>
      </div>
      <div className="info">
        <div className="userInfo">
          <img src={profile_image.medium} alt={name} className="user-photo" />
        </div>
        <div className="user-text">
          <div className="user-link">
            <span>{props.imageInfo.user.name}</span>
          </div>
          <div className="user-profile">
            <a href={`https://unsplash.com/${username}`}>@{username}</a>
          </div>
        </div>
        <div className="download-link">
          <span className="download-icon">
            <img src={icon}></img></span>
          <a href={props.imageInfo.urls.full}>Download
              </a>
        </div>
      </div>
      {mapUrl && <div className="map">
        <div>
          <div>
            <a
              href={`https://www.openstreetmap.org/search?query=${location.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${api.openStrepMapBase}?${mapUrl}`}
                alt={location.title}
              />
            </a>
          </div>
          <div className="location-title-container">
            <span className="location">{location.title}</span>
          </div>
        </div>
      </div>}
    </>
  );
};

export default DetailPage;
