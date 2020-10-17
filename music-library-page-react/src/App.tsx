import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import "./styles/global.css";
import "./styles/pages/home.css";

import Sidebar from "./components/Sidebar";
import PlaylistCard from "./components/PlaylistCard";
import ProfileViewCard from "./components/ProfileViewCard";
import TrackCard from "./components/TrackCard";

import {
  getPlaylistData,
  getProfileViewData,
  getTrackData,
  Playlist,
  ProfileView,
  Track,
} from "./services/api";

function App() {
  const [playlistData, setPlaylistData] = useState<Playlist[]>();
  const [profileViewData, setProfileViewData] = useState<ProfileView[]>();
  const [trackData, setTrackData] = useState<Track[]>();

  useEffect(() => {
    setPlaylistData(getPlaylistData());
    setProfileViewData(getProfileViewData());
    setTrackData(getTrackData());
  }, []);

  function verticalToHorizontalWheel(e: React.WheelEvent<HTMLDivElement>) {
    e.preventDefault();

    e.currentTarget.scrollLeft += e.deltaY * 30;
  }

  return (
    <div id="home">
      <Sidebar />

      <main className="content">
        <div className="search-bar">
          <input type="text" placeholder="Search artists, playlists or tracks" />
          <FiSearch size={24} className="icon" />
        </div>

        <div id="featured-playlists">
          <h2>Featured Playlists</h2>

          <div
            className="featured-playlist-container"
            onWheel={verticalToHorizontalWheel}
          >
            {playlistData?.map((playlist) => (
              <PlaylistCard {...playlist} key={playlist.image} />
            ))}
          </div>
        </div>

        <div id="profile-views">
          <h2>Profile Views</h2>

          <div className="profile-views-container">
            {profileViewData?.map((profileView) => (
              <ProfileViewCard {...profileView} key={profileView.image.path} />
            ))}
          </div>
        </div>

        <div id="tracks">
          <h2>Tracks</h2>

          <div className="tracks-container" onWheel={verticalToHorizontalWheel}>
            {trackData?.map((track) => (
              <TrackCard {...track} key={track.image.path} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
