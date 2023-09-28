import style from "./form.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { validate } from "./validation";

export default function Form({login}) {
  //state
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  // const [access, setAccess] = useState(false);
  // const navigate = useNavigate();
  // const EMAIL = "correo@gmail.com";
  // const PASSWORD = "1password";
  //function
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
  const haldleLogin = (event) => {
    event.preventDefault()
    login(userData);
  };
  // const login = ({ email, password }) => {
  //   if (email == EMAIL && password == PASSWORD) {
  //     setAccess(true);
  //     alert("todo OK");
  //     navigate("/home");
  //   } else {
  //     alert("algo mal");
  //     setUserData({ email: "", password: "" });
  //     setAccess(false);
  //   }
  // };
  // useEffect(() => {
  //   !access && navigate("/");
  // }, [access]);
  return (
    <div className={style.loginBox}>
      <form onSubmit={haldleLogin}>
        <h2>Login</h2>
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
        <div className={style.rememberForgot}>
          <label htmlFor="">
            {" "}
            <input type="checkbox" />
            Remember me
          </label>
          <a >Forgot Password?</a>
        </div>
        <button className="btnLogin" type="submit">
          Login
        </button>
        <div className={style.registerLink}>
          <p>
            Don't have an account? <span> </span>
           <Link to= {'/createuser'}>
            <a >Register User</a>
           </Link>
          </p>
        </div>
      </form>
    </div>
  );
}