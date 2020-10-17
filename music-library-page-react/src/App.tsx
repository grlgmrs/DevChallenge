import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import "./styles/global.css";
import "./styles/pages/home.css";

import Sidebar from "./components/Sidebar";
import PlaylistCard from "./components/PlaylistCard";

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

  function featuredPlaylistContainerWheel(e: React.WheelEvent<HTMLDivElement>) {
    e.preventDefault();

    const featuredPlaylistsContainer = document.querySelector(
      ".featured-playlist-container"
    )!;

    featuredPlaylistsContainer.scrollLeft += e.deltaY * 30;
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
            onWheel={featuredPlaylistContainerWheel}
          >
            {playlistData?.map((playlist) => (
              <PlaylistCard {...playlist} key={playlist.image} />
            ))}
          </div>
        </div>

        <div id="profile-views"></div>

        <div id="tracks"></div>
      </main>
    </div>
  );
}

export default App;
