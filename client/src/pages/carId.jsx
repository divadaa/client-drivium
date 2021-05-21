import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import CarList from "../components/CarList";

const URL = "http://localhost:4000/api";

export default function CarsPage() {
  const [product, setProduct] = useState(null);
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
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

  // CREAR POST BOOKING AQUI

  function postBooking() {
    axios
      .post(
        `${URL}/booking`,
        { productId: product._id, dateStart: dateStart, dateEnd: dateEnd },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.data);
        history.push('/bookings');
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
      <input
        value={dateStart}
        type="date"
        min={format(addDays(new Date(), 1), "yyyy-MM-dd")}
        onChange={(e) => {
          setDateStart(e.target.value);
        }}
      />

      <input
        disabled={!dateStart}
        value={dateEnd}
        type="date"
        min={
          dateStart ? format(addDays(new Date(dateStart), 1), "yyyy-MM-dd") : ""
        }
        onChange={(e) => {
          setDateEnd(e.target.value);
        }}
      />

      <button onClick={postBooking}>booking</button>
    </div>
  );
}
