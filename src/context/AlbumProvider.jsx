import PropTypes from "prop-types";

import { useReducer } from "react";
import {
  albumInitFunction,
  albumReducer,
  albumInitialState,
} from "../reducer/albumReducer";
import { AlbumContext } from "./AlbumContext";
import { types } from "../types/types";

export const AlbumProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    albumReducer,
    albumInitialState,
    albumInitFunction
  );

  const setListPhotos = (listPhotos) => {
    dispatch({
      type: types.listPhotos,
      payload: {
        photos: listPhotos,
      },
    });
  };

  return (
    <AlbumContext.Provider value={{ state, dispatch, setListPhotos }}>
      {children}
    </AlbumContext.Provider>
  );
};

AlbumProvider.propTypes = {
  children: PropTypes.any,
};
