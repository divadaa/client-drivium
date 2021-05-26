import { Link } from "react-router-dom";

import "./styles.scss";

function CarList({ list, loadCar }) {
  console.log(list);
  return (
    <>
      <ul className="carList">
        {list.map((car) => (
          <li key={car._id} className="carspecs">
            <p className="brandmodel">
              {car.brand} {car.model}
            </p>
            <Link to={`/car/${car._id}`}>
              <img src={car.pictures[0]} alt={car.brand} className="img" />
            </Link>
            <p className="specslist">{car.type}</p>
            <p className="specslist">{car.fuelType}</p>
            Por día
            <p className="specslist">{car.pricePerDay} € </p>
            <p>
              {car.availability} {car.extras[0]}{" "}
            </p>
            <Link className="buttontoid" to={`/car/${car._id}`}>
              {" "}
              Detalles
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CarList;
