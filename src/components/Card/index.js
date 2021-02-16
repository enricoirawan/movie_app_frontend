import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Card({ title, description, imageUrl, id }) {
  const baseUrl = "http://localhost/movie-app/backend/images/";

  return (
    <div className="card mt-3">
      <img
        src={baseUrl + imageUrl}
        alt={imageUrl}
        className="card-img-top img-thumbnail img-fluid rounded"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description.slice(0, 90)}...</p>
        <Link to={`/details/${id}`} className="btn btn-dark w-100">
          Details
        </Link>
      </div>
    </div>
  );
}

export default Card;
