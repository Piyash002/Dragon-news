import { useContext } from "react";
import NavBar from "../Shared/Navbar/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";

const Login = () => {
  const { signIn } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {

    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email,password)
    .then(res=>{
      console.log(res.user);
      //navigate after sign in
      navigate(location?.state?location.state: '/')
    })
    .catch(error=>{
      console.error(error);
    })
  };

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <h2 className="text-3xl my-10 mx-auto text-center">Please Login</h2>

        {/* Form */}
        <form className=" md:w-3/4 lg:w-1/2 mx-auto " onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-6 text-lg font-bold">
          Dont have an account?Please
          <Link className="text-sky-600" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
