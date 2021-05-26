import { useEffect, useState } from "react";
import "./styles.scss";

const prebooking = [{}];

export default function Booking() {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    setBooking(prebooking);
  }, []);

  function handleDelete(id) {
    const newCart = booking.filter((cartElement) => cartElement.id !== id);
    setBooking(newCart);
  }

  const total = booking.reduce((acc, next) => {
    return acc + next.price;
  }, 0);

  return (
    <div className="productCard__booking">
      <h1>Reservas</h1>

      {booking.map(({ id, price }) => (
        <div key={id}>
          <p>{price}€</p>
          <button onClick={() => handleDelete(id)}>Eliminar</button>
        </div>
      ))}

      <h2>Total: {total}€</h2>
    </div>
  );
}
