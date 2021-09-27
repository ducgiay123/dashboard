import "./widgetSm.css";
import React from "react";
import { MdVisibility } from "react-icons/md";
import User1 from "../../asserts/user1.jpg";
import { userRows } from "../../asserts/Data";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetTitle">New Join Member</span>
      <ul className="widgetSmList">
        <li className="widgetSmlistItem">
          <img src={User1} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">My Thien</span>
            <span className="widgetCarrer">Banking Assisstant</span>
          </div>
          <button className="widgetButton">
            <a className="widgetSmIcon">
              <MdVisibility />
            </a>
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmlistItem">
          <img src={userRows[0].avatar} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{userRows[0].username}</span>
            <span className="widgetCarrer">Banking Assisstant</span>
          </div>
          <button className="widgetButton">
            <a className="widgetSmIcon">
              <MdVisibility />
            </a>
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmlistItem">
          <img src={userRows[1].avatar} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{userRows[1].username}</span>
            <span className="widgetCarrer">Banking Assisstant</span>
          </div>
          <button className="widgetButton">
            <a className="widgetSmIcon">
              <MdVisibility />
            </a>
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmlistItem">
          <img src={User1} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">My Thien</span>
            <span className="widgetCarrer">Banking Assisstant</span>
          </div>
          <button className="widgetButton">
            <a className="widgetSmIcon">
              <MdVisibility />
            </a>
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmlistItem">
          <img src={User1} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">My Thien</span>
            <span className="widgetCarrer">Banking Assisstant</span>
          </div>
          <button className="widgetButton">
            <a className="widgetSmIcon">
              <MdVisibility />
            </a>
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmlistItem">
          <img src={User1} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">My Thien</span>
            <span className="widgetCarrer">Banking Assisstant</span>
          </div>
          <button className="widgetButton">
            <a className="widgetSmIcon">
              <MdVisibility />
            </a>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
