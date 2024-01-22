import { Route, Routes } from "react-router-dom";
import { Login, Register } from "../pages";
import { AlbumRoutes } from "../routes/AlbumRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/*" element={<AlbumRoutes />} />
    </Routes>
  );
};
