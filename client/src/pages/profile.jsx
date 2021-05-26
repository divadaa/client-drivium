import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import "../styles/profile.scss";

import Button from "../components/Button";
import { Redirect } from "react-router-dom";

const URL = "http://localhost:4000/api";

function hideLetters(cc) {
  let hiddenCc = "";

  for (let i = 0; i < cc.length; i++) {
    if (i < cc.length - 4) {
      hiddenCc += "X";
    } else {
      hiddenCc += cc[i];
    }
  }

  return hiddenCc;
}

export default function Profile() {
  const { logout, user } = useContext(UserContext);

  if (user) {
    return (
      <div className="profilebox">
        <h1>Los datos de 🗂 {user?.name}</h1>

        <div className="userdata">
          {user ? (
            <div>
              <p className="userspecs">
               👀 Name: {user.name} {user.surname}
              </p>
              <p className="userspecs"> 📧 email: {user.email}</p>
              <p className="userspecs"> ☎️ phone: {user.phone}</p>
              <p className="userspecs"> 🏠 address: {user.address}</p>
              <p className="userspecs"> 🏙 city: {user.city}</p>
              <p className="userspecs"> 💳 creditCard: {hideLetters(user.creditCard)}</p>
            </div>
          ) : null}
        </div>

        <div>
          <Button className="buttonprofile" onClick={logout} text="Adiós amigos 👋" />
        </div>
        </div>


    );
  } else {
    return <Redirect to="/login" />;
  }
}
