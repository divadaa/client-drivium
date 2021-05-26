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
      <div className="titleid">
        🚗 Perfil de mi coche 🏎 {product?.productName}
      </div>
      <div className="carbox">
        <div className="box">
          {product ? (
            <div className="colum1">
              <Link to={`/car/${product._id}`}>
                <img
                  src={product.pictures[0]}
                  alt={product.brand}
                  class="id-photo"
                />
              </Link>

              <p className="infoscar">
                Esta es la información y especificaciones de nuestro coche
              </p>
              <div />

              <div className="colum2">
                <p className="specsid">BRAND:{product.brand}</p>
                <p className="specsid">MODEL:{product.model}</p>
                <p className="specsid">TYPE:{product.type}</p>
                <p className="specsid">FUEL TYPE:{product.fuelType}</p>
                <p className="specsid">PRICE PER DAY:{product.pricePerDay}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      ENTREGA:{" "}
      <input
        className="calendar"
        value={dateStart}
        type="date"
        min={format(addDays(new Date(), 1), "yyyy-MM-dd")}
        onChange={(e) => {
          setDateStart(e.target.value);
        }}
      />
      RECOGIDA:{" "}
      <input
        className="calendar"
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
      <button onClick={postBooking} className="buttonid">
        Vamos a conducir
      </button>
    </div>
  );
}
