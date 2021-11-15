import { combineReducers } from "redux";

const songsReducer = () => {
  return [];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "ACTION_SELECT") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
