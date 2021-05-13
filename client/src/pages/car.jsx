import CarCard from '../components/CardCar';

const URL = '';

function Car({ CarCard, setCarCard }) {
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

        setCarCard([...CarCard, carData]);
      });
  }

  return (
    <section>
      <h3>Aquí está tu coche</h3>

      <CarCard list={CarCard} loadCar={loadCar} />
    </section>
  );
}

export default Car;
