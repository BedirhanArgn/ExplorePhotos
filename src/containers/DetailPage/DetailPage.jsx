import React from "react";
import "./details-page.css";
const DetailPage = (props) => {
  const { user } = props.imageInfo;
  const { username, name, profile_image } = user;
  return (
      <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div className="image">
          <img src={`${props.imageInfo.urls.regular}`}></img>
        </div>
        <div className="userInfo">
          <img src={profile_image.medium} alt={name} className="user-photo" />
          <span>{props.imageInfo.user.name}</span>
          <div className="user-link">
            <a href={`https://unsplash.com/${username}`}>@{username}</a>
          </div>
        </div>
        <div className="download-link">
        <button><a href={props.imageInfo.urls.full}>indir</a></button>

        </div>
      </div>
    </div>

  );
};

export default DetailPage;
