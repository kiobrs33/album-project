import { useForm } from "../hooks/useForm";

export const EditPhoto = () => {
  const { formValues, onChangeInput, onFormReset } = useForm({
    title: "",
    description: "",
  });

  const { title, description } = formValues;

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    onFormReset();
  };

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col  d-flex justify-content-center">
          <img
            src="https://media.giphy.com/media/D1lcEHYssYZ8Y/giphy.gif"
            className="img-fluid"
            alt="alter ego"
          />
        </div>
        <div className="col ">
          <form onSubmit={onFormSubmit}>
            <div className="mb-4">
              <label htmlFor="inputTitle" className="form-label">
                Titulo
              </label>
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                aria-describedby="emailHelp"
                placeholder="Agrega un título"
                name="title"
                value={title}
                onChange={onChangeInput}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="inputDescripcion" className="form-label">
                Descripcion
              </label>
              <input
                type="text"
                className="form-control"
                id="inputDescripcion"
                aria-describedby="emailHelp"
                placeholder="Agrega una descripcion detallada"
                name="description"
                value={description}
                onChange={onChangeInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Imagen
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
