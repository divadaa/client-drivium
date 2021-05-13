import { useState } from 'react';
import axios from 'axios';

import Picture from '../Pictures';
import Button from '../Button';

import './styles.scss';

export default function CarCard({
    brand,
    model,
    plate,
    type,
    fuelType,
    pricePerDay,
    picture
}) {
    const [car, setCar] = useState([]);

  function handleAddToBooking() {
    axios
      .put(car)
      .then((res) => {
        setCar(res.car);

        console.log(res.car);
      });


return (
    <div className="homePage">
      <div className="carCard">
        <div>
          <Picture
            className="carCard__cardImg"
            picture={picture[0]}
            name={model}
          />
        </div>
        <div className="carCard__brand">{brand}</div>

        <div className="carCard__model">{model}</div>

        <div className="carCard__plate">{plate}</div>

        <div className="carCard__type">{type}</div>

        <div className="carCard__fuelType">{fuelType}</div>

        <div className="carCard__pricePerDay">
          {pricePerDay}
          <span>€</span>
        </div>

        <div>
          <Button
            className="carCard__button"
            onClick={handleAddToBooking}
            text="GO TO BOOKING"
          />
        </div>
      </div>
    </div>
  );

}
}
