import { useContext } from "react";
import { CardItem } from "./CardItem";
import { AlbumContext } from "../context/AlbumContext";

export const ListCards = () => {
  const { state } = useContext(AlbumContext);

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
