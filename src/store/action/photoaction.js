import * as actionTypes from "../actionTypes/phototype";
import axios from "../../services/api";

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


export const fetchFromApi =(inputValue,selectValue)=>{
    return(dispatch)=>{
        dispatch(fetchPhotoStart())
            return axios.get("/photos",{
                params: { client_id:'pP1VR0q4_2Q8Jc71pIi6bt11j9PK_nUVQF7WW7TVEMI',query: inputValue,collections:selectValue,per_page:50}
            }).then((response)=>{
                console.log(response.data);
                dispatch(fetchPhotoSuccess(response.data))
            })
            .catch((error)=>{
                dispatch(fetchPhotoFail(error))
            })


    }


}