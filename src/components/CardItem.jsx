import PropTypes from "prop-types";

export const CardItem = ({ photo }) => {
  return (
    <div className="card shadow-sm">
      <img src={photo.url} className="card-img-top" alt="alchemist" />
      <div className="card-body">
        <p className="card-text">{photo.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small className="text-body-secondary">{photo.date}</small>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  photo: PropTypes.object,
};
