import { Link } from "react-router-dom";

import "./styles.scss";

function CarList({ list, loadCar }) {
  console.log(list);
  return (
    // <React.Fragment></React.Fragment>
    <>
      <ul className="CarList">
        {list.map((car) => (
          <li key={car._id} className="">
            <Link to={`/car/${car._id}`}>
              <img src={car.pictures[0]} alt={car.brand} className="img" />
            </Link>

            <p className="specslist">{car.type}</p>
            <p className="specslist">{car.fuelType}</p>
            <p className="specslist">{car.pricePerDay}</p>

            <p className="brandmodel">
              {car.brand} {car.model}
            </p>

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

      {/* <button onClick={loadCar}>Añadir coches</button> */}
    </>
  );
}

export default CarList;
