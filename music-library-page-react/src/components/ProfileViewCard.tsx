import React from "react";

import { ProfileView } from "../services/api";

import "../styles/components/profile-view-card.css";

export default function ProfileViewCard(profileView: ProfileView) {
  const imagePath = require(`../images/${profileView.image.path}`);
  const backgroundPosition = `${profileView.image.anchor.x}% ${profileView.image.anchor.y}%`;
  const backgroundZoom = `${profileView.image.zoom * 100}%`;

  return (
    <div className="profile-view-block">
      <div
        className="profile-view-image"
        style={{
          backgroundImage: `url("${imagePath}")`,
          backgroundSize: backgroundZoom,
          backgroundPosition,
        }}
      ></div>
      <div className="profile-view-name-visualization">
        <span className="profile-view-name">{profileView.name}</span>
        <span className="profile-view-visited">{profileView.visitedAt}</span>
      </div>
      <div className="profile-view-total-albums">
        <span>{profileView.albumsCount} albums</span>
      </div>
    </div>
  );
}
