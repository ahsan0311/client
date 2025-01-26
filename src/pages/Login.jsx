
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/reducer/userSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const login = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("https://server-beta-ebon.vercel.app/api/user/login", data, { withCredentials: true });

      reset();

      if (response.data && response.data.accessToken) {
        const { accessToken, user } = response.data;

        dispatch(setUser({ userId: user.id, accessToken }));

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userId", user.id);

        setTimeout(() => {
          alert("Successfully logged in");
          navigate("/Dashboard");
        }, 1000);
      } else {
        console.error("Access token is not returned in the response");
        alert("Failed to log in: Access token not returned.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response) {
        const errorMessage = error.response.data.message || "An error occurred";
        alert(errorMessage);
      } else {
        alert("Network error. Please check your internet connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-5 p-5">
      <form style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }} className="p-8 w-full max-w-md bg-white rounded-lg" onSubmit={handleSubmit(login)}>
        <h1 className="text-lg font-bold p-2 mb-5">Login</h1>
        <input
          className="input input-bordered w-full mb-3"
          {...register("cnic", { required: "CNIC is required" })}
          type="text"
          placeholder="CNIC (e.g., 12345-6789012-3)"
        />
        {errors.cnic && (
          <p className="text-red-500 mb-2 text-start mx-1">{errors.cnic.message}</p>
        )}

        <input className="input input-bordered w-full mb-3" {...register("password", { required: "Password is required" })} type="password" placeholder="Password" />
        {errors.password && <p className="text-red-500 text-start mx-1 mb-2">{errors.password.message}</p>}

        {loading ? (
          <button className="btn bg-green-500 w-full text-lg text-white" type="submit">
            Loading...
          </button>
        ) : (
          <button className="btn bg-green-500 w-full text-lg text-white" type="submit">
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
