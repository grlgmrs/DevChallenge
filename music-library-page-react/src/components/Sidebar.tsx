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
  FiX,
} from "react-icons/fi";

import "../styles/components/sidebar.css";
import profileImg from "../images/profile.jpg";

export default function Sidebar() {
  function handleNavigationListMobile(e: React.ChangeEvent<HTMLInputElement>) {
    const lists = document.querySelector(".lists")!;

    lists.classList[e.target.checked ? "add" : "remove"]("active");
  }

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

      <div className="open-list-mobile">
        <input
          type="checkbox"
          id="open-list-mobile-button"
          onChange={handleNavigationListMobile}
        />
        <label
          className="open-list-mobile-button-styled"
          htmlFor="open-list-mobile-button"
        >
          <div className="first-bar" />
          <div className="second-bar" />
        </label>
      </div>

      <div className="lists">
        <label
          className="close-list-mobile-button-styled"
          htmlFor="open-list-mobile-button"
        >
          <FiX size={34} />
        </label>
        <ul className="discover-list">
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
