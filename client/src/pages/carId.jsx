import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import "../styles/carId.scss";

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
        history.push("/bookings");
      })
      .catch((err) => {});
  }

  return (
    <div className="main">
      <h1>Perfil de mi coche 🏎🏎🚗🚗 {product?.productName}</h1>

      <div className="carbox">
        {product ? (
          <div>
            <p className="specsid">BRAND:{product.brand}</p>
            <p className="specsid">MODEL:{product.model}</p>
            <p className="specsid">TYPE:{product.type}</p>
            <p className="specsid">FUEL TYPE:{product.fuelType}</p>
            <p className="specsid">PRICE PER DAY:{product.pricePerDay}</p>
            <Link to={`/car/${product._id}`}>
              <img src={product.pictures[0]} alt={product.brand} class="id-photo"/>
            </Link>
          </div>
        ) : null}
      </div>


       ENTREGA:  <input className="calendar"
          value={dateStart} 
          type="date" 
          min={format(addDays(new Date(), 1), "yyyy-MM-dd")} 
          onChange={(e) => {
            setDateStart(e.target.value); 
          }} 
        />

        RECOGIDA:  <input className="calendar"
          disabled={!dateStart}
          value={dateEnd}
          type="date"
          min={
            dateStart
              ? format(addDays(new Date(dateStart), 1), "yyyy-MM-dd")
              : ""
          }
          onChange={(e) => {
            setDateEnd(e.target.value);
          }}
        />
      {/* </div> */}

      <button onClick={postBooking} className="button">Vamos a conducir</button>
    </div>
  );
}
