import { useContext } from "react";
import { AlbumContext } from "../context/AlbumContext";

export const Dashboard = () => {
  const { state } = useContext(AlbumContext);

  console.log("guy!", state)

  return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center ">
        <span className="border rounded-circle border-5">
          <img
            src="https://media.giphy.com/media/eh7t1ScpKTm5FGAu8A/giphy.gif?cid=82a1493b3xl7s3a0wax35g2bh9o8qs06c1h2doe3j6u0p4vx&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
            className="rounded-circle"
            style={{ width: "150px", height: "150px" }}
            alt="user-loged"
          />
        </span>
        <h2>{state.auth?.userName}</h2>
        <p>Pin : {state.auth?.userId}</p>
        <button className="btn btn-secondary">Editar perfil</button>
      </div>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-5">
          <div className="col d-flex justify-content-center">
            <img
              src="https://media.giphy.com/media/eh7t1ScpKTm5FGAu8A/giphy.gif?cid=82a1493b3xl7s3a0wax35g2bh9o8qs06c1h2doe3j6u0p4vx&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              className="img-fluid rounded opacity-25"
              alt="..."
            />
          </div>
          <div className="col d-flex justify-content-center">
            <img
              src="https://media.giphy.com/media/qiMbLh4WHEZyw/giphy.gif?cid=82a1493bxciboz57y2imvj9o663pvj39k6fc1zrmsen5xkfe&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              className="img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col d-flex justify-content-center">
            <img
              src="https://media.giphy.com/media/eh7t1ScpKTm5FGAu8A/giphy.gif?cid=82a1493b3xl7s3a0wax35g2bh9o8qs06c1h2doe3j6u0p4vx&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              className="img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col d-flex justify-content-center">
            <img
              src="https://media.giphy.com/media/qiMbLh4WHEZyw/giphy.gif?cid=82a1493bxciboz57y2imvj9o663pvj39k6fc1zrmsen5xkfe&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              className="img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col d-flex justify-content-center">
            <img
              src="https://media.giphy.com/media/eh7t1ScpKTm5FGAu8A/giphy.gif?cid=82a1493b3xl7s3a0wax35g2bh9o8qs06c1h2doe3j6u0p4vx&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              className="img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col d-flex justify-content-center">
            <img
              src="https://media.giphy.com/media/eh7t1ScpKTm5FGAu8A/giphy.gif?cid=82a1493b3xl7s3a0wax35g2bh9o8qs06c1h2doe3j6u0p4vx&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              className="img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col d-flex justify-content-center">
            <img
              src="https://media.giphy.com/media/qiMbLh4WHEZyw/giphy.gif?cid=82a1493bxciboz57y2imvj9o663pvj39k6fc1zrmsen5xkfe&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              className="img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col d-flex justify-content-center">
            <img
              src="https://media.giphy.com/media/eh7t1ScpKTm5FGAu8A/giphy.gif?cid=82a1493b3xl7s3a0wax35g2bh9o8qs06c1h2doe3j6u0p4vx&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              className="img-fluid rounded"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
