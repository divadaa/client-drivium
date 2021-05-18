import { useState } from "react";
import CarCard from "../components/CarList";

const URL = "http://localhost:4000/";

function Car({}) {
  const [carCard, setCarCard] = useState([]);

  function loadCar() {
    fetch(`${URL}${CarCard.length + 1}`)
      .then((res) => res.json())
      .then((data) => {
        const carData = {
          id: data.id,
          brand: data.brand,
          plate: data.plate,
          type: data.type,
          fuelType: data.fuelType,
          pricePerDay: data.pricePerDay,
          picture: data.picture.front_default,
        };

        setCarCard([...carCard, carData]);
      });
  }

  return (
    <section>
      <h3>Aquí está tu coche</h3>

      <CarCard list={carCard} loadCar={loadCar} />
    </section>
  );
}

export default Car;
