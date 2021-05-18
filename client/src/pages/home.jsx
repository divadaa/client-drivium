import { useEffect, useState } from "react";
import CarList from "../components/CarList";
import "../styles/home.scss";

const URL = "http://localhost:4000/api/car";

function Car({}) {
  const [carList, setCarList] = useState([]);

  function loadCar() {
    fetch(URL)
      .then((res) => res.json())
      .then(({ data }) => {
        // La propiedad data que hemos destructurado es mi array de coches

        setCarList([...carList, ...data]);
      });
  }

  useEffect(() => {
    loadCar();
  }, []);

  return (
    <section className="main">
      <h3>Estos son los Coches</h3>

      <CarList list={carList} loadCar={loadCar} />
    </section>
  );
}

export default Car;
