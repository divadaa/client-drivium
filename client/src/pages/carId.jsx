import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";

import CarList from "../components/CarList";

const URL = "http://localhost:4000/api";

export default function CarsPage() {
  const [product, setProduct] = useState(null);
  const { carId } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${URL}/car/${carId}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {});
  }, [carId]);

  // useEffect(() => {
  //   axios
  //     .get(`${URL}/bookingId/${carId}`)
  //     .then((res) => {
  //       setProduct(res.data.data);
  //     })
  //     .catch((err) => {
  //       history.goBack();
  //     });
  // }, [history, carId]);

  // return (
  //   <section className="main">
  //     <h3>Estos son los Coches</h3>

  //     <CarList list={car} loadCar={carId} />
  //   </section>
  // );

  console.log(product);

  function createBooking() {

    // añadir input de tipo fecha que guarden las fechas de inicio y final de mi reserva en un state
    // estas fechas las voy a usar como date start y date end.

    axios
      .post(`${URL}/booking`,{ productId: product._id, dateStart: new Date(), dateEnd: new Date() },{withCredentials:true})
      .then((res) => {
        console.log(res.data.data);
        //aquí tengo que hacer el push para ver el listado de booking. History push ... url
      })
      .catch((err) => {});

  }

  return (
    <div className="car__box">
      <h1>Perfil de mi coche 🏎🏎🚗🚗 {product?.productName}</h1>

      <div className="CarList">
        {product ? (
          <div>
            <p>BRAND:{product.brand}</p>
            <p>MODEL:{product.model}</p>
            <p>TYPE:{product.type}</p>
            <p>FUEL TYPE:{product.fuelType}</p>
            <Link to={`/car/${product._id}`}>
              <img src={product.pictures[0]} alt={product.brand} />
            </Link>
            <p>PRICE PER DAY:{product.pricePerDay}</p>
          </div>
        ) : null}
      </div>
      {/* <Link to="/booking">Quiero reservar este coche</Link> */}
      <button onClick={createBooking}>booking</button>
    </div>
  );
}
