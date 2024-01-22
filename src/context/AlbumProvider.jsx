import PropTypes from "prop-types";

import { useReducer } from "react";
import {
  albumInitFun,
  albumReducer,
  albumState,
} from "../reducer/albumReducer";
import { AlbumContext } from "./AlbumContext";

export const AlbumProvider = ({ children }) => {
  const [state, dispatch] = useReducer(albumReducer, albumState, albumInitFun);

  return (
    <AlbumContext.Provider value={{ state, dispatch }}>
      {children}
    </AlbumContext.Provider>
  );
};

AlbumProvider.propTypes = {
  children: PropTypes.any,
};
