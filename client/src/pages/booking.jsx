import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/User";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "../styles/booking.scss";

import Button from "../components/Button";
import format from "date-fns/format";
export default function Booking() {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/booking", { withCredentials: true })
      .then((res) => {
        setBookings(res.data.data);
      });
  }, []);

  function bookingDelete(reservation) {
    // Hace un axios.delete() y borrar la reserva del booking usando el endpoint adecuado. Mandaré la reservation como una id
    axios
      .delete(`http://localhost:4000/api/booking/${reservation}`, {
        withCredentials: true,
      })
      .then(() => {
        const finalBooking = bookings.filter(
          (bookingItem) => bookingItem._id !== reservation
        );
        setBookings(finalBooking);
      });
  }

  console.log("MIS BOOKINGS", bookings);
  if (user) {
    return (
      <div className="page__booking">
        <h2> Mis reservas </h2>

        <div className="booking">



        {bookings.map((reservation) => (
          <li key={reservation._id} className="card">
            <img src={reservation.productId.pictures?.[0]} alt={reservation.brand} class="booking-photo"/>
            
            <div className="info">
            
            <h3 className="entrega-recogida">
              Entrega: {format(new Date(reservation.pickup), "dd/MM/yyyy")} -
              Devolución: {format(new Date(reservation.return), "dd/MM/yyyy")}
            </h3>
            <p className="specs">{reservation.productId.brand}</p>
            <p className="specs">{reservation.productId.model}</p>
            <p className="specs">{reservation.productId.type}</p>
            <p className="specs">{reservation.productId.fuelType}</p>
            {/* <Link to={`/booking/${reservation._id}`}> */}
              
            {/* </Link> */}
            <p className="price">Cuota a Pagar : {reservation.totalPrice} € 💶 </p>
            
            <button onClick={() => bookingDelete(reservation._id)} className="button">
              Otra vez será 🗑
            </button>
            

        

            </div>
          </li>
        ))}

        <a
          className="buttoncart"
          href="https://www.paypal.com/signin"
          rel="noopener noreferrer"
          target="__blank"
        >
          PAGO
        </a>
      </div>
      </div>
    );
  } else {
    return <LoginForm />;
  }
}
