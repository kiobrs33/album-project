import { useContext } from "react";
import { AlbumContext } from "../context/AlbumContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRouter = ({ children }) => {
  const { state } = useContext(AlbumContext);

  if (state.auth?.isLogged) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

PrivateRouter.propTypes = {
  children: PropTypes.any,
};
