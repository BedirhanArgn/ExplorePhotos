import React, { useState } from "react";
import {useDispatch }from 'react-redux'
import "./navbar.css";
import * as actions from '../../store/action/photoaction';
const Navbar = () => {
const [inputValue, setInputValue] = useState('istanbul');
const [selectValue,setSelectValue]=useState('nature')
const dispatch = useDispatch();

const handleSubmit=(e)=>{
e.preventDefault();
dispatch(actions.fetchFromApi(inputValue,selectValue))

}
React.useEffect(() => {
  dispatch(actions.fetchFromApi(inputValue,selectValue))
}, [])


  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">Explore</div>
        <form className="form" onSubmit={handleSubmit}>
        <div className="nav-textinput">
          <input type="text" value={inputValue} placeholder="Try Istanbul .etc" onChange={e => setInputValue(e.target.value)}/>
        </div>
        <div className="nav-select">
          <select value={selectValue} className="select-css" onChange={e => setSelectValue(e.target.value)}>
            <option value="nature">Nature</option>
            <option avlue="city">City</option>
            <option>wallpaper</option>
            <option>Grapes</option>
            <option>Oranges</option>
          </select>
        </div>
        <div className="submit-button">
          <button type="submit">Ara</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
