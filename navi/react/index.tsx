import * as React from "react";
import * as ReactDOM from 'react-dom';

interface NaviElement {
  href : string,
  label? : string
}

function NaviElement({href, label} : NaviElement, key : number) {
  return <li key={key}>
    <a href={href}>{label || href}</a>
  </li>
}

interface Navi {
  children : NaviElement[]
}

function Navi({ children } : Navi) {
  return (
    <nav className="navi">
      <img className="logo" src="img/logo.svg"/>
      <span id="open_nav"></span>
      <span id="close_nav"></span>

      <ul className="list">
        {children.map(NaviElement)}
      </ul>

      <div className="toggler">
        <div></div>
        <div></div>
        <div></div>
        <a className="close" href="#close_nav"></a>
        <a href="#open_nav"></a>
      </div>

    </nav>
  );
}


export default Navi;
