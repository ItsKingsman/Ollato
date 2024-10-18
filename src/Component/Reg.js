import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
        <img src="https://img.freepik.com/free-vector/gradient-background-world-mental-health-day_23-2150708748.jpg?size=626&ext=jpg&ga=GA1.1.1163801692.1727778079&semt=ais_hybrid"alt="image here" data-value="-5"/>
        </div>

        <div className="login-form">
          <h2>Welcome Back</h2>
          <form>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
            <p>
            Don't have an account? <a href="/new1">Sign Up here</a>
          </p>
            <div className="divider">
              <hr /> <span>or</span> <hr />
            </div>
          </form>
          <div className="social-login">
            <button className="social-btn google">
              <i class="fa-brands fa-google"></i>
            </button>

            <button className="social-btn facebook">
              <i class="fa-brands fa-facebook"></i>
            </button>
            <button className="social-btn apple">
              <i class="fa-brands fa-apple"></i>
              
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
