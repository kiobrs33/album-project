import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AlbumContext } from "../context/AlbumContext";
import PropTypes from "prop-types";

export const PublicRouter = ({ children }) => {
  const { state } = useContext(AlbumContext);

  if (!state.auth?.isLogged) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

PublicRouter.propTypes = {
  children: PropTypes.any,
};
