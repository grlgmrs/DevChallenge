import React from "react";

import { ProfileView } from "../services/api";

export default function ProfileCard({ ...attr }, profileView: ProfileView) {
  return (
    <div className="profile-view-block">
      <div className="profile-view-image">
        <img src={`../assets/${profileView.image}`} alt={profileView.name} />
      </div>
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
