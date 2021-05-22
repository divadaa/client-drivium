import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";

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
      <div className="profile__box">
        <h1>Mi perfil 😀😀{user?.name}</h1>

        <div className="userdata">
          {user ? (
            <div>
              <p>
                Name: {user.name} {user.surname}
              </p>
              <p>email:{user.email}</p>
              <p>phone:{user.phone}</p>
              <p>address:{user.address}</p>
              <p>city:{user.city}</p>
              <p>creditCard:{hideLetters(user.creditCard)}</p>
            </div>
          ) : null}
        </div>

        <div>
          <Button onClick={logout} text="Cerrar sesión" />
        </div>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
}
