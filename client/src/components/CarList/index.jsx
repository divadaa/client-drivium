import { Link } from 'react-router-dom';

import './styles.scss';



function CarList({ list, loadCar}) {
  console.log(list)
  return (
    // <React.Fragment></React.Fragment>
    <>
      <ul className="CarList">
        {list.map((car) => (
          <li key={car._id} className="CarList__card">
            <p>{car.brand} {car.model}</p>
            <Link to={`/car/${car._id}`}>
              <img src={car.pictures[0]} alt={car.brand} />
            </Link>
            <p>{car.type} {car.fuelType}</p>
            <p>{car.availability} {car.extras[0]} </p>
          </li>
        ))}
      </ul>

      <button onClick={loadCar}>Añadir coches</button>
    </>
  );
}

export default CarList;
