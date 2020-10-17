import React from "react";
import {
  FiAperture,
  FiTrello,
  FiMusic,
  FiRadio,
  FiSliders,
  FiMessageSquare,
  FiBell,
  FiUser,
  FiSettings,
} from "react-icons/fi";

import "../styles/components/sidebar.css";
import profileImg from "../images/profile.jpg";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-information-container">
        <div className="profile-information-card">
          <div className="profile-information-image">
            <img src={profileImg} alt="Dany Schudler" />
          </div>
          <div className="profile-information-description">
            <span className="name">Dany Schudler</span>
            <div className="edit-profile">
              <span className="text">Edit profile</span>
              <FiSettings size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="lists">
        <ul className="discover-list">
          {/* {icons.map((i) => (
            <li className="active">
              <IconBase {...i.icon} />
              <span className="list-text">Overview</span>
            </li>
          ))} */}
          <li className="active">
            <FiAperture size={20} className="list-icon" />
            <span className="list-text">Overview</span>
          </li>
          <li>
            <FiTrello size={20} className="list-icon" />
            <span className="list-text">News</span>
          </li>
          <li>
            <FiMusic size={20} className="list-icon" />
            <span className="list-text">Playlists</span>
          </li>
          <li>
            <FiRadio size={20} className="list-icon" />
            <span className="list-text">Discover</span>
          </li>
        </ul>

        <ul className="profile-options-list">
          <li>
            <FiSliders size={20} className="list-icon" />
            <span className="list-text">Dashboard</span>
          </li>
          <li>
            <FiMessageSquare size={20} className="list-icon" />
            <span className="list-text">Messages</span>
          </li>
          <li>
            <FiBell size={20} className="list-icon" />
            <span className="list-text">Notifications</span>
          </li>
          <li>
            <FiUser size={20} className="list-icon" />
            <span className="list-text">Account</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
