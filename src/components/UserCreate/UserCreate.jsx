import style from "./form.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { validate } from "./validation";

export default function UserCreate({ crearUser }) {
  //state
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const haldleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  const haldleCrearUsuario = (event) => {
    event.preventDefault();
    crearUser(userData);
  };

  return (
    <div className={style.loginBox}>
      <form onSubmit={haldleCrearUsuario}>
        <h2>Register</h2>
        <div className={style.inputBox}>
          <p id="#dangerEmail">{errors.email}</p>
          <input
            type="text"
            placeholder=""
            name="email"
            required
            value={userData.email}
            onChange={haldleChange}
          />
          <label htmlFor="">Email</label>
        </div>
        <div className={style.inputBox}>
          <p id="#dangerPassword">{errors.password}</p>
          <input
            type="password"
            placeholder="8 Caracteres a 10 caracteres"
            name="password"
            required
            value={userData.password}
            onChange={haldleChange}
          />
          <label htmlFor="">Password</label>
        </div>

        <button className="btnLogin" type="submit">
          Register/Create
        </button>
        <div className={style.registerLink}>
          <p>
            Have an account? <span> </span>
            <Link to={"/"}>
              <a>Sesion</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
