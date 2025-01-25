// import axios from "axios";
// import { useState } from "react";
// import { useForm } from "react-hook-form"
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";


// const Login = () => {
//     const [loading,setLoading] = useState(false)
//     const [userId, setUserId] = useState(null);
//     const navigate = useNavigate()

//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//       } = useForm()

//     // const login = async (data) => {
//     //     try {
//     //         setLoading(true)
//     //       const response = await axios.post(
//     //         "https://final-hackthon-backend-teal.vercel.app/api/user/login",
//     //         data
//     //       );
//     //       reset();

//     //       if (response.data && response.data.data){
//     //         const { _id } = response.data.data;
//     //         const { accessToken, refreshToken } = response.data;
//     //         localStorage.setItem("userId", _id);
//     //         console.log("access token" , accessToken);
            
//     //         localStorage.setItem("accessToken", accessToken);
//     //         localStorage.setItem("refreshToken", refreshToken);
//     //         console.log("Logged in successfully:", response.data.data);
//     //         setUserId(_id);
//     //         setTimeout(() => {
//     //           alert('Successfully logged in');
//     //           navigate("/Dashboard");
//     //         }, 1000);
            
//     //       }else{
//     //         console.error("userId is not returned in the response");
//     //         alert("Failed to log in: userId not returned.");
//     //       }
    
//     //     }catch (error) {   
//     //         if (error.response) {
//     //           console.log("Error response data:", error.response.data); 
//     //           if (error.response.status === 401) {
//     //             if (error.response.data.message && error.response.data.message.includes("wrong email")) {
//     //               alert("Email is incorrect.");
//     //             } 
//     //              if (error.response.data.message && error.response.data.message.includes("wrong password")) {
//     //               alert("Password is incorrect.");
//     //             }
//     //           }
//     //         }
//     //       }finally{
//     //         setLoading(false)
//     //       }
//     //   };



//     const login = async (data) => {
//       try {
//           setLoading(true);
  
//           // Send login request
//           const response = await axios.post(
//               "https://final-hackthon-backend-teal.vercel.app/api/user/login",
//               data,
//               {
//                   withCredentials: true, // Ensures cookies are sent and received
//               }
//           );
  
//           reset();
  
//           if (response.data && response.data.accessToken) {
//               const { accessToken, user } = response.data;
  
//               // Store only the accessToken and userId in localStorage
//               localStorage.setItem("accessToken", accessToken);
//               localStorage.setItem("userId", user.id);
  
//               console.log("Access Token:", accessToken);
//               console.log("Logged in successfully:", user);
  
//               setUserId(user.id);
  
//               // Redirect to dashboard with a delay
//               setTimeout(() => {
//                   alert("Successfully logged in");
//                   navigate("/Dashboard");
//               }, 1000);
//           } else {
//               console.error("Access token is not returned in the response");
//               alert("Failed to log in: Access token not returned.");
//           }
//       } catch (error) {
//           console.error("Error during login:", error);
  
//           // Handle error responses
//           if (error.response) {
//               console.log("Error response data:", error.response.data);
  
//               const errorMessage = error.response.data.message || "An error occurred";
  
//               if (error.response.status === 401) {
//                   if (errorMessage.includes("email")) {
//                       alert("Invalid email. Please try again.");
//                   } else if (errorMessage.includes("password")) {
//                       alert("Invalid password. Please try again.");
//                   }
//               } else {
//                   alert(errorMessage);
//               }
//           } else {
//               alert("Network error. Please check your internet connection.");
//           }
//       } finally {
//           setLoading(false);
//       }
//   };
  
//   // On app load or page reload, validate and refresh the token if necessary
//   const refreshToken = async () => {
//       try {
//           const response = await axios.get(
//               "https://final-hackthon-backend-teal.vercel.app/api/user/refresh-token",
//               {
//                   withCredentials: true, // Include the refresh token cookie
//               }
//           );
  
//           if (response.data && response.data.accessToken) {
//               const { accessToken } = response.data;
  
//               // Update accessToken in localStorage
//               localStorage.setItem("accessToken", accessToken);
//               console.log("Token refreshed successfully");
//           } else {
//               console.error("Failed to refresh token: Access token not returned.");
//           }
//       } catch (error) {
//           console.error("Error refreshing token:", error);
//           alert("Session expired. Please log in again.");
//           navigate("/login");
//       }
//   };
  
//   // Call refreshToken on page reload or app start
//   useEffect(() => {
//       refreshToken();
//   }, []);
  


//   return (
//     <>
//     <div className="flex justify-center mt-5 p-5">
//       <form
//         style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
//         className="p-8 w-full max-w-md bg-white rounded-lg"
//         onSubmit={handleSubmit(login)}
//       >
//         <h1 className="text-lg font-bold p-2 mb-5">Login</h1>
       

//         <input
//           className="input input-bordered w-full mb-3"
//           {...register("email", { required: "Email is required" })}
//           type="email"
//           placeholder="Email"
//         />
//         {errors.email && <p className="text-red-500 mb-2 text-start mx-1">{errors.email.message}</p>}

//         <input
//           className="input input-bordered w-full mb-3"
//           {...register("password", { required: "Password is required" })}
//           type="password"
//           placeholder="Password"
//         />
//         {errors.password && <p className="text-red-500 text-start mx-1 mb-2">{errors.password.message}</p>}


        
//         {
//             loading ? <button className="btn bg-info hover:bg-info w-full text-lg text-white" type="submit">
//             Loading...
//           </button> : <button className="btn bg-info hover:bg-info w-full text-lg text-white" type="submit">
//           Login
//         </button>
//         }
//       </form>
//     </div>
//     </>
//   )
// }

// export default Login






























import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/reducer/userSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); // Use dispatch to call actions
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const login = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("https://server-beta-ebon.vercel.app/api/user/login", data, { withCredentials: true });

      reset();

      if (response.data && response.data.accessToken) {
        const { accessToken, user } = response.data;

        // Store accessToken and userId using Redux
        dispatch(setUser({ userId: user.id, accessToken }));

        // Store in localStorage
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
        <input className="input input-bordered w-full mb-3" {...register("email", { required: "Email is required" })} type="email" placeholder="Email" />
        {errors.email && <p className="text-red-500 mb-2 text-start mx-1">{errors.email.message}</p>}

        <input className="input input-bordered w-full mb-3" {...register("password", { required: "Password is required" })} type="password" placeholder="Password" />
        {errors.password && <p className="text-red-500 text-start mx-1 mb-2">{errors.password.message}</p>}

        {loading ? (
          <button className="btn bg-info hover:bg-info w-full text-lg text-white" type="submit">
            Loading...
          </button>
        ) : (
          <button className="btn bg-info hover:bg-info w-full text-lg text-white" type="submit">
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
