import React from 'react';


import s from './SideBar.module.css'
import { NavLink } from 'react-router-dom';
const SideBar = () => {
  return <div className={s.wrapper}>
    <ul>
      <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
      <li><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></li>
      <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
      <li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
      <li><NavLink to="/setting" activeClassName={s.active}>Setting</NavLink></li>
    </ul>
  </div>
};
export default SideBar