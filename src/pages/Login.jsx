import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AlbumContext } from "../context/AlbumContext";
import { types } from "../types/types";

export const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AlbumContext);

  const onLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        userId: "12345678",
        userName: "Rene Lozano Ramos",
      },
    });

    localStorage.setItem(
      "auth",
      JSON.stringify({
        isLogged: true,
        userId: "12345678",
        userName: "Rene Lozano Ramos",
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container-fluid p-4 m-0">
      <div className="d-flex justify-content-center">
        <div
          className="border border-dark-subtle p-4 rounded"
          style={{ width: "500px" }}
        >
          <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Agregar correo electrónico"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Agregar contraseña"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
