

import axios from "axios";
import {useForm} from "react-hook-form";
// import {useNavigate} from "react-router-dom"


const Register = () => {

  // const navigate = useNavigate()

  
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
  
  

    const submissions = async (data) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.cnic);
    
      try {
        const response = await axios.post(
          "https://server-beta-ebon.vercel.app/api/user/register",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("User registered successfully:", response.data);
      } catch (error) {
        console.error("Error registering user:", error);
        if (error.response) {
          console.error("API response error:", error.response.data);
        } else if (error.request) {
          console.error("Network error: No response received", error.request);
        } else {
          console.error("Error:", error.message);
        }
      }
    };



    
  return (
    <>
    <div className="flex justify-center mt-5 p-5">
      <form
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
        className="p-8 w-full max-w-md bg-white rounded-lg"
        onSubmit={handleSubmit(submissions)}
      >
        <h1 className="text-lg font-bold p-2 mb-5">Register</h1>
        <input
          className="input input-bordered w-full mb-3"
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Username"
        />
        {errors.name && <p className="text-red-500 mb-2 text-start mx-1">{errors.name.message}</p>}

        <input
          className="input input-bordered w-full mb-3"
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 mb-2 text-start mx-1">{errors.email.message}</p>}

        <input
  className="input input-bordered w-full mb-3"
  {...register("cnic", {
    required: "CNIC is required",
    maxLength: {
      value: 13,
      message: "CNIC cannot exceed 13 digits",
    },
  })}
  type="text"
  placeholder="CNIC"
  maxLength="13" 
/>
{errors.cnic && (
  <p className="text-red-500 mb-2 text-start mx-1">
    {errors.cnic.message}
  </p>
)}


       
        

        <button className="btn bg-green-500 w-full text-lg text-white" type="submit">
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default Register
