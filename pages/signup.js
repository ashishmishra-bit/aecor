import { motion } from "framer-motion";

const signup = () => {
  return (
    <motion.div initial = {{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="container mx-auto py-10 my-48">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="/img/login.jpg" alt="" />
            <div className="text">
              <span className="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img className="backImg" src="/img/login.jpg" alt="" />
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    <button className="bg-transparent hover:bg-transparent bg-purple-800 text-white font-semibold lg:flex-grow hover:text-purple-800 py-2 px-4 border hover:border-purple-800  rounded mr-6">
                      Sign In
                    </button>
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account? <label for="flip">Sigup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="button input-box">
                    <button className="bg-transparent hover:bg-transparent bg-purple-800 text-white font-semibold lg:flex-grow hover:text-purple-800 py-2 px-4 border hover:border-purple-800  rounded mr-6">
                      Sign Up
                    </button>
                  </div>
                  <div className="text sign-up-text">
                    Already have an account? <label for="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          position: relative;
          max-width: 850px;
          width: 100%;
          background: #fff;
          padding: 40px 30px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          perspective: 2700px;
        }
        .container .cover {
          position: absolute;
          top: 0;
          left: 50%;
          height: 100%;
          width: 50%;
          z-index: 98;
          transition: all 1s ease;
          transform-origin: left;
          transform-style: preserve-3d;
        }
        .container #flip:checked ~ .cover {
          transform: rotateY(-180deg);
        }
        .container .cover .front,
        .container .cover .back {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
        .cover .back {
          transform: rotateY(180deg);
          backface-visibility: hidden;
        }
        .container .cover::before,
        .container .cover::after {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          background: #000000;
          opacity: 0.5;
          z-index: 12;
        }
        .container .cover::after {
          opacity: 0.3;
          transform: rotateY(180deg);
          backface-visibility: hidden;
        }
        .container .cover img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          z-index: 10;
        }
        .container .cover .text {
          position: absolute;
          z-index: 130;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .cover .text .text-1,
        .cover .text .text-2 {
          font-size: 26px;
          font-weight: 600;
          color: #fff;
          text-align: center;
        }
        .cover .text .text-2 {
          font-size: 15px;
          font-weight: 500;
        }
        .container .forms {
          height: 100%;
          width: 100%;
          background: #fff;
        }
        .container .form-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .form-content .login-form,
        .form-content .signup-form {
          width: calc(100% / 2 - 25px);
        }
        .forms .form-content .title {
          position: relative;
          font-size: 24px;
          font-weight: 500;
          color: #333;
        }
        .forms .form-content .title:before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3px;
          width: 25px;
          background: #000000;
        }
        .forms .signup-form .title:before {
          width: 20px;
        }
        .forms .form-content .input-boxes {
          margin-top: 30px;
        }
        .forms .form-content .input-box {
          display: flex;
          align-items: center;
          height: 50px;
          width: 100%;
          margin: 10px 0;
          position: relative;
        }
        .form-content .input-box input {
          height: 100%;
          width: 100%;
          outline: none;
          border: none;
          padding: 0 30px;
          font-size: 16px;
          font-weight: 500;
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        .form-content .input-box input:focus,
        .form-content .input-box input:valid {
          border-color: #000000;
        }
        .form-content .input-box i {
          position: absolute;
          color: #000000;
          font-size: 17px;
        }
        .forms .form-content .text {
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }
        .forms .form-content .text a {
          text-decoration: none;
        }
        .forms .form-content .text a:hover {
          text-decoration: underline;
        }
        .forms .form-content .button {
          color: #fff;
          margin-top: 40px;
        }
        .forms .form-content .button input {
          color: #fff;
          background: #000000;
          border-radius: 6px;
          padding: 0;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .forms .form-content .button input:hover {
          background: #5b13b9;
        }
        .forms .form-content label {
          color: #5b13b9;
          cursor: pointer;
        }
        .forms .form-content label:hover {
          text-decoration: underline;
        }
        .forms .form-content .login-text,
        .forms .form-content .sign-up-text {
          text-align: center;
          margin-top: 25px;
        }
        .container #flip {
          display: none;
        }
        @media (max-width: 730px) {
          .container .cover {
            display: none;
          }
          .form-content .login-form,
          .form-content .signup-form {
            width: 100%;
          }
          .form-content .signup-form {
            display: none;
          }
          .container #flip:checked ~ .forms .signup-form {
            display: block;
          }
          .container #flip:checked ~ .forms .login-form {
            display: none;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default signup;
