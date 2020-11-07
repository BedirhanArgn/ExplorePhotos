import Navbar from "../../components/Navbar/Navbar";
import React, { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Images from "../ImagePages/Images";
import * as actions from '../../store/action/photoaction';

import "./mainpage.css";
const MainPage = () => {
  const [page,setPage]=React.useState(1);

const dispatch = useDispatch();
    const searched = useSelector((state) => {
    return state.photos.data.results;
  });

  const loading = useSelector((state) => {
    return state.photos.loading;
  });

  const totalPages=useSelector((state)=>{
    return state.photos.data.total_pages;
  });

  const spinner = (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
 

const notData=(<>    <Navbar />
  <div className="container">
          <p>NOt data</p>
        </div>
  </>)
console.log("serar",searched);
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

{loading===false&&totalPages===0?(

<div className="container">
  <div className="error-handle">
    <span>Bu Kategoride Fotograf Bulunamadı</span>
  </div>

</div>


):""}

    </>
    

  
   






  );
};

export default MainPage;
