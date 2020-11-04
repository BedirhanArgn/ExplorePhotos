import Navbar from "../../components/Navbar/Navbar";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Images from "../ImagePages/Images";
import "./mainpage.css";
const MainPage = () => {
    const searched = useSelector((state) => {
    return state.photos.data.results;
  });

  const loading = useSelector((state) => {
    return state.photos.loading;
  });

  const spinner = (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  return (
    <>
      <Navbar />
      {loading===false&&searched? (
        <div className="container">
          <Images images={searched}></Images>
        </div>
      )
        : (  
        <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>)
      }
    </>
  );
};

export default MainPage;
