import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/User";
import LoginForm from "../components/LoginForm";
import CardCar from "../components/CarList";
import { deleteCar, addCar } from "../services/bookings";
import Button from "../components/Button";



export default function Booking() {
  const [carSaved, setCarSaved] = useState([]);
  const { user } = useContext(UserContext);

  const deleteCarFromList = (id) => {
    const newRemovedFavorites = carSaved.filter((item) => item._id !== id);
    setCarSaved(newRemovedFavorites);
  };

  const handleRemoveCar = (idToBeRemoved) => {
    deleteCarFromList(idToBeRemoved);
    deleteCar(idToBeRemoved);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/booking").then((res) => {
      setCarSaved(res.data.data);

      console.log(carSaved);
    });
  }, [user]);

  if (user) {
    return (
      <div className="booking">
        <h3>Mi reserva</h3>

        <div className="carSavedBooking">
          {carSaved.map((p) => (
            <div key={p.plate}>
              <CardCar
                picture={p.pictures}x
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
        </div>
      </div>
    );
  } else {
    return <LoginForm />;
  }
}
