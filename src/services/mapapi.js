import axios from "axios";
import mapapi from '../api/mapapi'
const instance = axios.create({
  baseURL: mapapi.openStrepMapBase,
});

export default instance;