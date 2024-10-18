import React, { useState } from "react";

const Login = () => {
  const [step, setStep] = useState(1); // Track the current step

  // Function to move to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Function to move to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img
            src="https://img.freepik.com/free-vector/gradient-background-world-mental-health-day_23-2150708748.jpg?size=626&ext=jpg&ga=GA1.1.1163801692.1727778079&semt=ais_hybrid"
            alt="image here"
            data-value="-5"
          />
        </div>

        <div className="login-form">
          <h2>Welcome Back</h2>

          {/* Form for Step 1: Email and Password */}
          {step === 1 && (
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

              {/* Navigation Buttons */}
              <div className="navigation-buttons">
                <button type="button" onClick={nextStep}>
                  Next ➡️
                </button>
              </div>
            </form>
          )}

          {/* Form for Step 2: Additional Inputs */}
          {step === 2 && (
            <form>
              <div className="input-group">
                <label>Security Question</label>
                <input
                  type="text"
                  placeholder="What's your favorite color?"
                />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>

              {/* Navigation Buttons */}
              <div className="navigation-buttons">
                <button type="button" onClick={prevStep}>
                  ⬅️ Previous
                </button>
                <button type="button" onClick={nextStep}>
                  Next ➡️
                </button>
              </div>
            </form>
          )}

          {/* Form for Step 3: Final Confirmation */}
          {step === 3 && (
            <form>
              <div className="input-group">
                <label>Confirm Email</label>
                <input type="email" placeholder="Confirm your email" />
              </div>
              <div className="input-group">
                <label>Confirm Phone</label>
                <input type="tel" placeholder="Confirm your phone number" />
              </div>

              {/* Navigation Buttons */}
              <div className="navigation-buttons">
                <button type="button" onClick={prevStep}>
                  ⬅️ Previous
                </button>
                <button type="submit" className="login-btn">
                  Submit
                </button>
              </div>
            </form>
          )}

          {/* Divider and Social Login */}
          <div className="divider">
            <hr /> <span>or</span> <hr />
          </div>

          {/* Social Login */}
          <div className="social-login">
            <button className="social-btn google">
              <i className="fa-brands fa-google"></i>
            </button>

            <button className="social-btn facebook">
              <i className="fa-brands fa-facebook"></i>
            </button>
            <button className="social-btn apple">
              <i className="fa-brands fa-apple"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
