import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToHomeBtn from "../components/BackToHomeBtn";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const creationTime = result.user.metadata.creationTime;
        const newUser = { name, email, creationTime };
        fetch("https://coffee-store-server-coral-sigma.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              if (data.insertedId) {
                swal({
                  title: "Good job!",
                  text: "User Created Successfully!",
                  icon: "success",
                });
                navigate("/login");
              }
            }
          });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
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
              <h1 className="text-5xl font-bold">Sign Up</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSignUp} className="fieldset">
                  <label className="label">Username</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Username"
                    name="name"
                  />
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
                  <button className="btn btn-neutral mt-4">SignUp</button>
                </form>
                <div>
                  <p>
                    Already Have An Account?{" "}
                    <Link to={"/login"} className="text-blue-500">
                      Login
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

export default Register;
