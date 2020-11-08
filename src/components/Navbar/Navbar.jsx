import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import "./navbar.css";
import logo from '../../images/logo.png'
import * as actions from '../../store/action/photoaction';
const Navbar = (props) => {
  const [inputValue, setInputValue] = useState('istanbul');
  const [selectValue, setSelectValue] = useState('nature')
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.fetchFromApi(inputValue, selectValue, 1))
  }
  React.useEffect(() => {
    dispatch(actions.fetchFromApi(inputValue, null, 1))
    props.parentCallBack({ 'inputValue': inputValue, 'selectedValue': selectValue })
  }, [])

  const sendDatatoParent = () => {
    props.parentCallBack({ 'inputValue': inputValue, 'selectedValue': selectValue })

  }
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <img src={logo} style={{ width: "80px", height: "80px" }}></img>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="nav-textinput">
            <input type="text" value={inputValue} placeholder="Try Istanbul .etc" onChange={e => setInputValue(e.target.value)} />
          </div>
          <div className="nav-select">
            <select value={selectValue} className="select-css" onChange={e => setSelectValue(e.target.value)}>
              <option value="3957566">Turkey</option>
              <option value="2141901">Europa</option>
              <option value="4315412">Party</option>
              <option value="785618">Concert</option>
            </select>
          </div>
          <div className="submit-button">
            <button type="submit" onClick={sendDatatoParent}>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
