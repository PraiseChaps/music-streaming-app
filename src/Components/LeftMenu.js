import React from "react";
import "../styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";
import TrackList from "./TrackList";
import { Menu } from "./Menu";

function LeftMenu() {
  return (
    <div className="LeftMenu">
      <div className="logoContainer">
      <div className="logo">
          <i>
            <FaSpotify />
          </i>

          <h2>PRAISE CHAPARIKA</h2>
        </div>

        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      
         <Menu title={"Menu"} listObject={MenuList}/>
         <MenuPlayList />
         <TrackList trackName={"Take On Me"} artistName={"A-ha"} />
    </div>
  );
}

export { LeftMenu };
