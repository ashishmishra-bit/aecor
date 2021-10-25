import Link from 'next/link';

const SignUpNew = () => {
  return (
    <div className="splitScreen h-5/6">
      <div className="left py-10 mb-10">
        <section className="copy">
          <h1 className="h1">Explore Your Creativity</h1>
          <p className="text-white">Get Relevant Trade Option & Better Stock Price. </p>
        </section>
      </div>
      <div className="right">
        <form className="-mt-10 lg:mt-0">
          <section className="copy">
              <h2>Sign Up</h2>
              <div className = "loginContainer">
                  <p>Already have an account ?<a href="/login" className="text-blue-700 hover:underline"> <span>Login</span></a></p>
              </div>
          </section>
            <div className="inputContainer name">
                <label for = "fname">Full Name</label>
                <input id = "fname" type="text" name = "fname" placeholder="Full Name" />
            </div>
            <div className="inputContainer email">
                <label for = "email">E-mail</label>
                <input id = "email" type="email" name = "email" placeholder="E-mail" />
            </div>
            <div className="inputContainer password">
                <label for = "password">Password</label>
                <input id = "fname" type="password" name = "password" placeholder="Password" />
            </div>
            <div className = "inputContainer cta">
                <label className="checkBox">
                    <input type="checkbox" />
                    <span className="checkmark">Sign up for updates</span>
                    
                </label>
            </div>
            <button className="signUp-btn bg-purple-800 text-white rounded py-2 w-full block uppercase tracking-widest" type="submit"> Sign Up</button>
            <section className="copy legal">
                <p>By signing up, you agree to our <br/> <a href="#" className="hover:text-blue-700 hover:underline text-sm">Terms of Service</a> & <a href="#" className="hover:text-blue-700 hover:underline text-sm">Privacy Policy</a>.</p>
            </section>
        </form>
      </div>

    <style jsx>{`
        h1{
            font-size: 2.5rem;
            font-weight: 700;
            color: #fff;
        }
        h2{
            font-size: 1.5rem;
            font-weight: 700;
        }
        .splitScreen{
            display: flex;
            flex-direction: row;
            height: 100vh;
            // background-color: #1a1a1a;
        }
        .left{
            height: 1000px;
        }
        .left, .right{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: auto;
        }
        .left{
            background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url('/img/diwali.png') ;
            background-size: cover;
            // background-position: center;
            // background-repeat: no-repeat;
            // height: 100vh;
           
        }
        .left .copy{
            color: #fff;
            text-align: center;
            --webkit-font-smoothing: antialiased;
            --moz-osx-font-smoothing: grayscale;
        }
        .left p{
            font-weight: 400;
        }
        .right .copy{
            color: black;
            text-align: center;
        }
        .right .copy p{
            margin:1.5rem 0;
            font-size: 0.875rem;
        }
        .right form{
            width:328px;
        }
        form{
            width: 100%;
            background: #fff;
            padding: 1.5rem;
            border-radius: 20px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        }
        form input[type="text"], form input[type="email"], form input[type="password"]{
            width: 100%;
            display: block;
            box-sizing:border-box;
            border-radius: 10px;
            border: 1px solid #ccc;
            padding: 0.5rem;
            margin-bottom: 1.25rem;
            font-size:0.875rem;
        }
        label{
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            display: block;
        }
        @media (max-width:900px){
            .splitScreen{
                display: flex;
                flex-direction: column;
                // height: 100vh;
            }
            .left , .right{
                display: flex;
                width: 100%;
                height: auto;
            }
        }
    
    `}</style>


    </div>

  );
};

export default SignUpNew;
