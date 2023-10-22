import React from "react";
import style from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";
import rick from './img/rick.png'

const Form = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    pass: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [property]: value,
    });

    setErrors(
      validation({
        ...userData,
        [property]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData, errors);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <img src={rick} alt="Rick" className={style.img} />

        <h1 className={style.titulo}>Bienvenido/a!</h1>

        <div className={style.containerInputs}>
          <label htmlFor="email" className={style.label}></label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={style.input}
            placeholder="Email:"
          />
          <p className={style.error}>{errors.email}</p>

          <label htmlFor="pass" className={style.label}></label>
          <input
            type="password"
            name="pass"
            value={userData.pass}
            onChange={handleChange}
            className={style.input}
            placeholder="Password:"
          />
          <p className={style.error}>{errors.pass}</p>

          <button type="submit" className={style.ingresar}>
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
