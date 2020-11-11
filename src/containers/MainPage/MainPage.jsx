import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Images from "../ImagePages/Images";
import * as actions from '../../store/action/photoaction';
import "./mainpage.css";
import loaderImg from '../../images/loader.gif'
const MainPage = () => {
  const [pageNo, setPageNo] = React.useState(1);
  const [inputVal, setInputVal] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('');
  const dispatch = useDispatch();
  const searched = useSelector((state) => {
    return state.photos.data.results;
  });

  const loading = useSelector((state) => {
    return state.photos.loading;
  });

  const totalPages = useSelector((state) => {
    return state.photos.data.total_pages;
  });


  const handlePrevious = () => {
    dispatch(actions.fetchFromApi(inputVal, selectValue, pageNo - 1))
    setPageNo(pageNo - 1)

  }
  const handleNext = () => {
    dispatch(actions.fetchFromApi(inputVal, selectValue, pageNo + 1))
    setPageNo(pageNo + 1)

  }

  const callBackFunction = (childData) => {
    setInputVal(childData.inputValue)
    setSelectValue(childData.selectedValue)
  }

  return (
    <>
      <Navbar parentCallBack={callBackFunction} />
      {loading === false && searched && totalPages !== 0 ? (
        <div className="container">
          <Images images={searched}></Images>
          <div className="paging" >
            {pageNo > 1 ? (
              <button className="paging-button-pre" onClick={() => handlePrevious()}>Previous Page</button>
            ) : <button className="paging-button-pre-disable">Previous Page</button>}
            {totalPages > pageNo ? (
              <button className="paging-button-next" onClick={() => handleNext()}>Next Page</button>
            ) : <button className="paging-button-next-disable">Next Page</button>}
          </div>
        </div>
      )
        : (
          <>
            {totalPages !== 0 ?
              <div className="spinner-border" role="status">
                <img src={loaderImg} width="70%"></img>
              </div>
              : ""}
          </>
        )
      }
      {loading === false && totalPages === 0 ? (
        <div className="container">
          <div className="error-handle">
            <span>Bu Kategoride Fotograf Bulunamadı</span>
          </div>
        </div>
      ) : ""}
    </>
  );
};

export default MainPage;
