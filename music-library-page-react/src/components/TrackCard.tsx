import React from "react";

import { Track } from "../services/api";

export default function TrackCard({ ...attr }, track: Track) {
  return (
    <div className="track-block">
      <div className="track-image">
        <img src={`../assets/${track.image}`} alt={track.title} />
      </div>
      <div className="track-text">
        <span className="track-title">${track.title}</span>
        <span className="track-album">${track.album}</span>
      </div>
    </div>
  );
}
