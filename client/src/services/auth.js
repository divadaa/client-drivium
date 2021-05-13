import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api'; 

export async function getProfile() {
  const res = await axios.get(`${BASE_URL}/user/profile`, {
    withCredentials: true
  });

  return res.data.data;
}

export async function postLogin(email, password) {
  const res = await axios.post(
    `${BASE_URL}/user/login`,
    {
      email,
      password
    },

    { withCredentials: true }
  );

  return res.data.data;
}

export async function postRegister(body) {
  const res = await axios.post(`${BASE_URL}/user/register`, body, {
    withCredentials: true
  });

  return res.data.data;
}

export async function postLogout() {
  return axios.post(`${BASE_URL}/user/logout`, {}, {
    withCredentials: true
  });
}