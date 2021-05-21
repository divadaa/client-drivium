import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/User";
import LoginForm from "../components/LoginForm";
import CardCar from "../components/CarList";
import { deleteCar, addCar } from "../services/bookings";
import Button from "../components/Button";

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

  console.log("MIS BOOKINGS", bookings);
  if (user) {
    return (
      <div className="booking">
        <h3>Mis bookings</h3>

        {/* bookings.map */}
        {/* 
        <div className="carSavedBooking">
          {carSaved.map((p) => (
            <div key={p.plate}>
              <CardCar
                picture={p.pictures}
                x
                brand={p.brand}
                model={p.model}
                fuel={p.fuelType}
                pictures={p.pictures}
                price={p.pricePerDay}
                onClickDelete={() => {}}
              />
            </div>
          ))}
        </div>

        <div>
          <Button onClick={addCar} text="Quiero este coche" />
        </div>

        <div>
          <Button onClick={handleRemoveCar} text="No quiero este coche" />
        </div> */}
      </div>
    );
  } else {
    return <LoginForm />;
  }
}
