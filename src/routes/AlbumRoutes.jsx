import { Navigate, Route, Routes } from "react-router-dom";
import { About, AddPhoto, Dashboard, EditPhoto, Home } from "../pages";
import { Header, ThemeButton } from "../components";
import { ViewPhoto } from "../pages/ViewPhoto";

export const AlbumRoutes = () => {
  return (
    <>
      <ThemeButton />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/add-photo" element={<AddPhoto />} />
        <Route path="/view-photo/:photoId" element={<ViewPhoto />} />
        <Route path="/edit-photo" element={<EditPhoto />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
