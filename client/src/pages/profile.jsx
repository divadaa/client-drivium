import React, { useContext } from "react";
import { UserContext } from "../context/User";
import "../styles/profile.scss";

import Button from "../components/Button";
import { Redirect } from "react-router-dom";

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
        <h1>Los datos de ๐ {user?.name}</h1>

        <div className="userdata">
          {user ? (
            <div>
              <p className="userspecs">
                ๐ Name: {user.name} {user.surname}
              </p>
              <p className="userspecs"> ๐ง email: {user.email}</p>
              <p className="userspecs"> โ๏ธ phone: {user.phone}</p>
              <p className="userspecs"> ๐  address: {user.address}</p>
              <p className="userspecs"> ๐ city: {user.city}</p>
              <p className="userspecs">
                {" "}
                ๐ณ creditCard: {hideLetters(user.creditCard)}
              </p>
            </div>
          ) : null}
        </div>

        <div>
          <Button
            className="buttonprofile"
            onClick={logout}
            text="Adiรณs amigos ๐"
          />
        </div>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
}
