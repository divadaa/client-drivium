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
        setCarList([...carList, ...data]);
      });
  }

  useEffect(() => {
    loadCar();
  }, []);

  return (
    <section className="main">
      <p className="titlehome">Nuestros coches</p>

      <p className="titledescription">
        Premium, garantizados y con un equipamiento excepcional
      </p>

      <CarList list={carList} loadCar={loadCar} />
    </section>
  );
}

export default Car;
