import React, { useState } from "react";

const Registration1 = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img
            src="https://img.freepik.com/free-vector/mental-health-awareness-concept_52683-37916.jpg"
            alt="image here"
            data-value="-5"
          />
        </div>

        <div className="login-form">
          <h2>Registration</h2>
          {step === 1 && (
            <form>
              <div className="input-group">
                <label>Fullname</label>
                <input type="text" placeholder="Enter your username" />
              </div>
              <div className="input-group">
                <label>DOB</label>
                <input type="date" placeholder="Enter your DOB" />
              </div>

              <div className="input-group custom-select">
              <label>Gender</label>
              <select>
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="preferNotToSay">Prefer not to say</option>
              </select>
            </div>
              
              

              <div className="navigation-buttons">
                <p type="button" onClick={nextStep} className="next hvr-skew-forward ">
                  Next  <i class="fa-solid fa-angles-right"></i>  
                </p>
               
              </div>
              
            </form>
          )}

          {step === 2 && (
            <form>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="input-group">
                <label>Parents Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="navigation-buttons">
                <p type="button" onClick={prevStep} className="prev hvr-skew-backward">
                <i class="fa-solid fa-angles-left"></i> Previous
                </p>
                <p type="button" onClick={nextStep} className="next hvr-skew-forward ">
                  Next <i class="fa-solid fa-angles-right"></i>
                </p>
              </div>
            </form>
          )}

          {step === 3 && (
            <form>
              <div className="input-group">
                <label>Parent's Email id</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="input-group">
                <label>School/Institute Name</label>
                <input type="text" placeholder="Enter your School/Institute Name" />
              </div>
              <div className="input-group">
                <label>Standard</label>
                <input type="text" placeholder="Enter your STD" />
              </div>

              <div className="navigation-buttons">
                <p type="button" onClick={prevStep} className="prev hvr-skew-backward">
                <i class="fa-solid fa-angles-left"></i> Previous
                </p>
                <p type="button" onClick={nextStep} className="next hvr-skew-forward ">
                  Next <i class="fa-solid fa-angles-right"></i>
                </p>
              </div>
            </form>
          )}

          {step === 4 && (
            <form>
              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <div className="input-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>

              <div className="navigation-buttons">
                <p type="button" onClick={prevStep} className="prev hvr-skew-backward">
                <i class="fa-solid fa-angles-left"></i> Previous
                </p>
                
              </div>
              <button type="submit" className="login-btn">
                  Sign in
                </button>
            </form>
          )}

          <a className="exist">
            Have an account? <a href="/new">Login</a>
          </a>
          <div className="divider">
            <hr /> <span>or</span> <hr />
          </div>
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

export default Registration1;
