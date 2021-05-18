import { Link } from 'react-router-dom';

import './styles.scss';

// availability: true
// brand: "ferrari"
// createdAt: "2021-05-07T17:18:37.410Z"
// extras: []
// fuelType: "gasoline"
// model: "f40"
// pictures: ["https://www.tomhartleyjnr.com/wp-content/uploads/2020/12/Ferrari-F40-047.jpg"]
// plate: "m1234mu"
// type: "sportcar"
// updatedAt: "2021-05-07T17:18:37.410Z"

function CarList({ list, loadCar}) {
  console.log(list)
  return (
    // <React.Fragment></React.Fragment>
    <>
      <ul className="CarList">
        {list.map((car) => (
          <li key={car._id} className="card">
            <p>{car.brand} {car.model}</p>
            <Link to={`/car/${car._id}`}>
              <img src={car.pictures[0]} alt={car.brand} />
            </Link>
            <p>{car.type} {car.fuelType}</p>
            <p>{car.availability} {car.extras[0]} </p>
          </li>
        ))}
      </ul>

      {/* <button onClick={loadCar}>Añadir coches</button> */}
    </>
  );
}

export default CarList;
