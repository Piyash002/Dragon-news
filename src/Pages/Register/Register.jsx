import { Link } from "react-router-dom";
import NavBar from "../Shared/Navbar/NavBar";
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";




const Register = () => {

    const { createUser } = useContext(authContext);



    const handleRegister= e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name= form.get('name')
        const photo= form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
      console.log(name,photo,email,password);

      //create user
      createUser(email,password)
      .then(res =>{console.log(res.user)})
      .catch(error =>{console.error(error)})
    }
    return (
      <div>
        <NavBar></NavBar>
        <div>
          <p className="text-center font-bold text-lg mt-6">Register your account</p>

          <form
            className=" md:w-3/4 lg:w-1/2 mx-auto "
            onSubmit={handleRegister}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mt-6 text-base font-semibold">
           Already have an account?Please
            <Link className="text-orange-500" to="/login">
             Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;