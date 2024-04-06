import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AlbumContext } from "../context/AlbumContext";
import { types } from "../types/types";
import { useForm } from "../hooks/useForm";

export const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AlbumContext);

  const { formValues, onChangeInput } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const onLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-type": "application/json",
        },
      });
      const { token, user } = await response.json();
      const { uid, email, name, lastname, role, is_logged_google, url_image } =
        user;

      console.log("**********************");
      console.log(token, user);

      dispatch({
        type: types.login,
        payload: {
          uid,
          token,
          email,
          name,
          lastname,
          role,
          is_logged_google,
          url_image,
        },
      });

      localStorage.setItem(
        "auth",
        JSON.stringify({
          isLogged: true,
          uid,
          name,
          token,
          url_image,
        })
      );
    } catch (error) {
      console.log(error);
    }
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
                name="email"
                value={email}
                onChange={onChangeInput}
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
                name="password"
                value={password}
                onChange={onChangeInput}
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
