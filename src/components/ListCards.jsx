import { useContext } from "react";
import { CardItem } from "./CardItem";
import { AlbumContext } from "../context/AlbumContext";
import { useEffect } from "react";
import { getPhotos } from "../utils/getData";

export const ListCards = () => {
  const { state, setListPhotos } = useContext(AlbumContext);

  const getListPhotos = async () => {
    try {
      getPhotos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListPhotos();
  }, []);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
          {state.photos.map((item) => {
            return (
              <div className="col" key={item.id}>
                <CardItem photo={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
