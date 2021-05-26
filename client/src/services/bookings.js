import axios from "axios";

const URL = "http://localhost:4000/";

export const deleteCar = async (carId) => {
  try {
    const response = await axios.put(
      `${URL}/bookings/remove/${carId}`,
      {},
      { withCredentials: true }
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addCar = async (carId) => {
  try {
    const response = await axios.put(`${URL}/bookings/add/${carId}`, {
      withCredentials: true,
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
