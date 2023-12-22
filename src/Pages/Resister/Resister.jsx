import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useCustomeHook from "../../Hooks/useCustomeHook";
import Swal from "sweetalert2";


const Resister = () => {
  const { googleLogin, userCreateByEmailPassword,setUserName,setUserPhoto } = useCustomeHook();
  const navigated = useNavigate();
  //   const { googleLogin } = useContext(AuthContext);

  const handleEmailPasswordResister = (e) => {
    e.preventDefault();
    const firstName = e.target.fName.value;
    const photoUrl = e.target.photoUrl.value;
    let email = e.target.email.value;
    const password = e.target.password.value;

    // Sending Name to the AuthProvider
    setUserName(firstName);
    setUserPhoto(photoUrl)

    if (password.length < 6) {
        Swal.fire(
        "Oops!",
        "Your password length should be at least 6 characters",
        "error"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
        Swal.fire(
        "Oops!",
        "Your password should contain at least one uppercase letter",
        "error"
      );
      return;
    } else if (!/[@#$%^&*()_+[\]{}|;:,.<>?]/.test(password)) {
        Swal.fire(
        "Oops!",
        "Your password should not contain special characters",
        "error"
      );
      return;
    } else {
      userCreateByEmailPassword(email, password)
        .then(() => {
            Swal.fire("Yeahh!", "Successfully created your account", "success");
          e.target.reset();
          navigated(location?.state ? location.state : "/");
        })
        .catch(() => {
            Swal.fire("Oops!", "The email is already in use", "error");
        });
    }
  };

  const googleResister = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleEmailPasswordResister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="fName"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <input
              type="submit"
              value={"Create an Account"}
              className="text-white font-bold mt-4 bg-blue-500 px-4 text-center py-3 rounded-lg"
            />
          </form>
          <div className="text-center">
            <h1>
              Already have an account?{" "}
              <NavLink className={"text-blue-700"} to={"/logins"}>
                Login
              </NavLink>
            </h1>
          </div>
          <div className="flex justify-center items-center gap-3 my-4">
            <div className="bg-black h-[1px] w-1/3"></div>
            <div>or</div>
            <div className="bg-black h-[1px] w-1/3"></div>
          </div>
          <button
            onClick={googleResister}
            className="grid grid-cols-3 font-bold border-2 px-4 text-center py-3 rounded-lg mx-7 mb-6 hover:bg-blue-500  hover:text-white"
          >
            <FcGoogle className="w-10 text-3xl  "></FcGoogle>
            <span>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};



export default Resister;
