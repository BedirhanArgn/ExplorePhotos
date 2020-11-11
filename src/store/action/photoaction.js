import * as actionTypes from "../actionTypes/phototype";
import axios from "../../services/api";
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 100, checkperiod: 200 });

const fetchPhotoStart = () => {
  return {
    type: actionTypes.FETCH_PHOTO_START
  };
}

const fetchPhotoSuccess = (photos) => {
  return {
    type: actionTypes.FETCH_PHOTO_SUCCESS,
    photos: photos,
  };
};

const fetchPhotoFail = (error) => {
  return {
    type: actionTypes.FETCH_PHOTO_FAIL,
    error: error,
  };
}


export const fetchFromApi = (inputValue, selectValue, pageNo) => {
  return (dispatch) => {
    dispatch(fetchPhotoStart())
    const url = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${inputValue}&client_id='pP1VR0q4_2Q8Jc71pIi6bt11j9PK_nUVQF7WW7TVEMI'&collections=${selectValue}`
    if (!cache.has(url)) {
      return axios.get("/photos", {
        params: { page: pageNo, client_id: 'pP1VR0q4_2Q8Jc71pIi6bt11j9PK_nUVQF7WW7TVEMI', query: inputValue, collections: selectValue, per_page: 20 }
      }).then((response) => {
        cache.set(url, response.data, 600);
        dispatch(fetchPhotoSuccess(response.data))
      })
        .catch((error) => {
          dispatch(fetchPhotoFail(error))
        })
    }
    else {
      dispatch(fetchPhotoSuccess(cache.get(url)))
    }


  }


}