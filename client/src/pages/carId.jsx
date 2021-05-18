import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'

const URL = 'http://localhost:4000/';

export default function CarsPage() {
  const [car, setProduct] = useState({});
  const { carId } = useParams();
  

  useEffect(() => {
    axios
      .get(`${URL}/cars/${carId}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
      });
  }, [carId]);


  return (
    <div className="car__box">
      <h1>Perfil de mi coche 🏎🏎🚗🚗 {car.productName}</h1>

      <ul>
        <p>BRAND:{car.brand}</p>
        <p>MODEL:{car.model}</p>
        <p>TYPE:{car.type}</p>
        <p>FUEL TYPE:{car.fuelType}</p>
        <p>PICTURES:{car.pictures}</p>
        <p>PRICE PER DAY:{car.pricePerDay}</p>
      </ul>
      <Link to="/booking">Quiero reservar este coche</Link>
    </div>
  );
}

