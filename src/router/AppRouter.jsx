import { Route, Routes } from "react-router-dom";
import { Login, Register } from "../pages";
import { AlbumRoutes } from "../routes/AlbumRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="login/*"
        element={
          <PublicRouter>
            <Routes>
              <Route path="/*" element={<Login />} />
            </Routes>
          </PublicRouter>
        }
      />

      <Route
        path="register/*"
        element={
          <PublicRouter>
            <Routes>
              <Route path="/*" element={<Register />} />
            </Routes>
          </PublicRouter>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRouter>
            <AlbumRoutes />
          </PrivateRouter>
        }
      />
    </Routes>
  );
};
