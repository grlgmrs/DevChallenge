import React from "react";

import { Track } from "../services/api";

import "../styles/components/track-card.css";

export default function TrackCard(track: Track) {
  const trackImg = require(`../images/${track.image.path}`);
  const trackImgPosition = `${track.image.anchor.x}% ${track.image.anchor.y}%`;

  return (
    <div className="track-block">
      <div
        className="track-image"
        style={{
          backgroundImage: `url("${trackImg}")`,
          backgroundPosition: trackImgPosition,
        }}
      />
      <div className="track-text">
        <span className="track-title">{track.title}</span>
        <span className="track-album">{track.album}</span>
      </div>
    </div>
  );
}
