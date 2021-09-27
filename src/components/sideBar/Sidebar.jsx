import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import WidgetsIcon from "@material-ui/icons/Widgets";
import TocIcon from "@material-ui/icons/Toc";
import SettingsInputCompositeIcon from "@material-ui/icons/SettingsInputComposite";
import FeedbackIcon from "@material-ui/icons/Feedback";
import ForumIcon from "@material-ui/icons/Forum";
import {
  AiOutlineUser,
  AiTwotoneCalendar,
  AiFillShop,
  AiOutlineShoppingCart,
  AiOutlineMail,
} from "react-icons/ai";
import TimelineIcon from "@material-ui/icons/Timeline";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            Dashnoard
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <HomeIcon className="sidebarIcon" />
                Home
              </li>
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                Analyst
              </li>
              <li className="sidebarListItem">
                <AiTwotoneCalendar className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </h3>
          <h3 className="sidebarTitle">
            Resources
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <AiOutlineUser className="sidebarIcon" />
                Users
              </li>
              <li className="sidebarListItem">
                <AiFillShop className="sidebarIcon" />
                Products
              </li>
              <li className="sidebarListItem">
                <AttachMoneyIcon className="sidebarIcon" />
                Transactions
              </li>
              <li className="sidebarListItem">
                <EmojiEmotionsIcon className="sidebarIcon" />
                Icons
              </li>
            </ul>
          </h3>
          <h3 className="sidebarTitle">
            UI element
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WidgetsIcon className="sidebarIcon" />
                Widgets
              </li>
              <li className="sidebarListItem">
                <AiOutlineShoppingCart className="sidebarIcon" />
                eCommerce
              </li>
              <li className="sidebarListItem">
                <SettingsInputCompositeIcon className="sidebarIcon" />
                Components
              </li>
              <li className="sidebarListItem">
                <TocIcon className="sidebarIcon" />
                Content
              </li>
            </ul>
          </h3>
          <h3 className="sidebarTitle">
            Notification
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <AiOutlineMail className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <FeedbackIcon className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <ForumIcon className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </h3>
        </div>
      </div>
    </div>
  );
}
