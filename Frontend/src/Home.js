import React, { useState, useEffect } from "react";
import "./App.css";
import fire from "./fire.js";
import Login from "./components/login.js";

const Home = () => {
  const { user, setUser } = useState("");
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const { emailError, setEmailError } = useState("");
  const { passwordlError, setPasswordError } = useState("");
  const { hasAccount, setHasAccount } = useState(false);
  const clearinput = () => {
    setEmail("");
    setPassword("");
  };
  const clearerror = () => {
    setPasswordError("");
    setPasswordError("");
  };
  const handelloging = () => {
    clearerror();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handelsignup = () => {
    clearerror();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handellogout = () => {
    //fire.auth().signOut;
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearinput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  return (
    <div>
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handelloging={handelloging}
        handelsignup={handelsignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={setEmailError}
        passwordlError={setPasswordError}
      />
    </div>
  );
};

export default Home;
