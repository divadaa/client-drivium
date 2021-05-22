import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/User";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import CardCar from "../components/CarList";
import { deleteCar, addCar } from "../services/bookings";
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
      <div className="booking">
        <h3>Mis bookings</h3>
        {bookings.map((reservation) => (
          <li key={reservation._id} className="card">
            <h3>
              Entrega: {format(new Date(reservation.pickup), "dd/MM/yyyy")} --
              Devolución: {format(new Date(reservation.return), "dd/MM/yyyy")}
            </h3>
            <p>BRAND:{reservation.productId.brand}</p>
            <p>MODEL:{reservation.model}</p>
            <p>TYPE:{reservation.type}</p>
            <p>FUEL TYPE:{reservation.fuelType}</p>
            <Link to={`/booking/${reservation._id}`}>
              <img src={reservation.pictures?.[0]} alt={reservation.brand} />
            </Link>
            <p>TOTAL PRICE:{reservation.totalPrice}</p>
            <button onClick={() => bookingDelete(reservation._id)}>
              Quitar reserva
            </button>
          </li>
        ))}

        <a
          className="buttoncart"
          href="https://www.paypal.com/signin"
          rel="noopener noreferrer"
          target="__blank"
        >
          PAYMENT
        </a>
      </div>
    );
  } else {
    return <LoginForm />;
  }
}
