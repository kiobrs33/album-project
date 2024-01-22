import { useParams } from "react-router-dom";

export const ViewPhoto = () => {
  const { photoId } = useParams();

  console.log(photoId);

  return (
    <div>
      <h1>ViewPhoto</h1>
    </div>
  );
};
