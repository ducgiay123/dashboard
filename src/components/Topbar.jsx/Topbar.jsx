import "./topbar.css"
import NotificationsIcon from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import React, { useState } from 'react';
import Avatar from "../../asserts/avatar.jpg";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';





export default function Topbar() {
    const [open,setOpen] = useState(false);
    const [language,setlanguage] = useState(false);

    function dropbar_profile(){
        return(
        <div className="dropDownBar">
            <div className="iconDropbar">
                <div className="content">
                    <AccountCircleIcon/>  
                    <span className="content-text">Profile</span>
                </div>
            </div>
            <div className="iconDropbar">
                <div className="content">
                    <SettingsIcon/>  
                    <span className="content-text">Setting</span>
                </div>
            </div>
            <div className="iconDropbar">
                <div className="content">
                    <PowerSettingsNewIcon/>  
                    <span className="content-text">Log out</span>
                </div>
            </div>
        </div>)
    }

    function dropbar_language(){
        return(
            <div className="dropDownBarLanguage">
                <div className="iconDropbar">
                    <div className="content"> 
                        <span className="content-text">Vietnamese</span>
                    </div>
                </div>
                <div className="iconDropbar">
                    <div className="content">
                        <span className="content-text">English</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="topbar">
            <div className = "topbarWrapper">
                <div className = "topLeft">
                    <span className="logo">Admin Page</span>
                </div>
                
                <div className ="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsIcon/>
                        <span className="iconNotify">1</span>
                    </div>
                    <div className="topbarIconContainer">
                        <ModeCommentIcon/>
                        <span className="iconNotify">1</span>
                    </div>
                    <div className="topbarIconContainer" onClick={() => setlanguage(!language)}>
                        <LanguageIcon/>
                        {language && dropbar_language()
                        }
                    </div>
                    <img src={Avatar}
                            alt=""
                        
                            className="top-avartar"/>
                    <div className="menuDropbar">                       
                        <a className="topAvartarArrow" href="#profile" onClick={() => setOpen(!open)}>
                            <ArrowDropDownIcon/>
                        </a>
                        {open && dropbar_profile()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


