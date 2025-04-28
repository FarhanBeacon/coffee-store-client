import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToHomeBtn from "../components/BackToHomeBtn";
import { AuthContext } from "../providers/AuthProvider";
import swal from 'sweetalert';

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;    
    signInUser(email, password)
    .then(result=>{
      const userData = result.user;      
      const lastSignInTime = userData.metadata.lastSignInTime;
      const loginInfo = { email, lastSignInTime };

      setUser(userData);
      fetch("https://coffee-store-server-coral-sigma.vercel.app/users", {
        method: "PATCH",
        headers: {
          
          "content-type": "application/json"
        },
        body: JSON.stringify(loginInfo),
      })

      swal("Good job!", "Login Successfull", "success");
      navigate("/");
    })
    .catch(error=>{
      console.log("ERROR: ", error);
    })
  };
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <BackToHomeBtn />
        <div className="hero w-[75%] mx-auto min-h-[80vh]">
          <div className="hero-content flex-col lg:flex-row-reverse gap-8">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <div>
                  <p>
                    Don't Have An Account?{" "}
                    <Link to={"/register"} className="text-blue-500">
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Login;
