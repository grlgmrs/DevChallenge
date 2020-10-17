import playlistData from "./playlists.json";
import profileViewData from "./profile_views.json";
import trackData from "./tracks.json";

export interface Playlist {
  image: string;
  title: string;
  trackCount: number;
}

export interface ProfileView {
  image: string;
  name: string;
  visitedAt: string;
  albumsCount: number;
}

export interface Track {
  image: string;
  title: string;
  album: string;
}

export function getPlaylistData(): Playlist[] {
  return playlistData.map((pD) => {
    return {
      ...pD,
      trackCount: pD.tracks_count,
    };
  });
}
export function getProfileViewData(): ProfileView[] {
  return profileViewData.map((pvD) => {
    return {
      ...pvD,
      visitedAt: pvD.visited_at,
      albumsCount: pvD.albums_count,
    };
  });
}
export function getTrackData(): Track[] {
  return trackData;
}
