import { useEffect } from "react";
import "./Login.css"

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, [])

  return (
    <>
      <div className="full-container">
        <div className="login-card-container">
          <div className="login-card">
            <img src="/logo.png" alt="logo" />

            <input type="text" placeholder="Username" className="field" />
            <input type="password" placeholder="Password" className="field" />

            <div className="forget-password-container">
              <a href="/">Forgot Password?</a>
            </div>

            <button id="login-btn">Login</button>

            <span>Don't have an account? <a href="/">Register!</a></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
