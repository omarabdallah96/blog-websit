import React from "react";
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handelloging,
    handelsignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordlError,
  } = props;
  return (
    <section className="login">
      <div className="loginContainer">
        <label>username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordlError}</p>
      </div>
    </section>
  );
};

export default Login;
