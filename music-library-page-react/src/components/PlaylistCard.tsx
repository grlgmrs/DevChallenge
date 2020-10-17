import React from "react";

import { Playlist } from "../services/api";

import "../styles/components/playlist-card.css";

export default function PlaylistCard(playlist: Playlist) {
  return (
    <div className="playlist-card">
      <div className="playlist-image">
        <img src={require(`../images/${playlist.image}`)} alt={playlist.title} />
      </div>
      <div className="playlist-title">{playlist.title}</div>
      <div className="playlist-tracks">{playlist.trackCount} tracks</div>
    </div>
  );
}
