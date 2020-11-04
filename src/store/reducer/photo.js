import * as actionTypes from "../actionTypes/phototype";
import { updateObject } from "../../utility/updater";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PHOTO_START:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_PHOTO_SUCCESS:
      return updateObject(state, { data: action.photos, loading: false, });
    case actionTypes.FETCH_PHOTO_FAIL:
      return updateObject(state, { loading: false, error: action.error });
    default:
      return state;
  }
};
export default reducer;