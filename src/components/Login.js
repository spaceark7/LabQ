import { AiFillEye } from "react-icons/all";
import { Link, useHistory } from "react-router-dom";
import "../Style/Login.css";

const Login = () => {
  const history = useHistory();

  function handleSubmit() {
    return history.push("/");
  }

  return (
    <div className="Login-Container">
      <div className="Login-Header"></div>
      <div className="Login-card">
        <div className="Login-form">
          <div className="Login-form-text">
            <div className="Login-title">
              <h2>Masuk Ke Akun LabQ</h2>
            </div>

            <div className="Login-toLogin">
              <p>
                Belum punya akun? <Link to="/signIn">Daftar</Link>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <p>Nama Pengguna atau Email</p>
              <input required type="text" name="username" id="userId" />
            </div>

            <div className="inputBox ">
              <p>Password</p>
              <div className="pwbox">
                <input required type="password" name="password" id="pwdId" />{" "}
                <AiFillEye className="eyeicon" />
              </div>
            </div>

            <div className="inputBox ">
              <p>Konfirmasi Password</p>
              <div className="confirm-pwbox">
                <input required type="password" name="password" id="ConpwdId" />{" "}
                <AiFillEye className="eyeicon" />
              </div>
            </div>

            <button type="submit">Masuk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
