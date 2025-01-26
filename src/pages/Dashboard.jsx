import { useForm } from "react-hook-form";
import "../pages/Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      alert("Form Submitted:", data);
      
      // Make POST request to your API
      const response = await axios.post("https://server-beta-ebon.vercel.app/api/addApprove", data);

      if (response.status === 200) {
        alert("Form Submitted Successfully!");
        reset(); // Reset the form fields after submission
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error.response?.data || error.message);
      console.log("Failed to submit the form.");
    }
  };

  return (
    <>
      <h3 className="m-5 mx-10 text-4xl font-bold">Loan Request Submission</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="dashboard-form">

        {/* Guarantor 1 Information */}
        <h4 className="text-2xl font-semibold mt-6 mb-3">Guarantor 1 Information</h4>

        <input
          {...register("guarantor1_name", { required: "Name is required" })}
          className="dashboard-input"
          type="text"
          placeholder="Enter Guarantor 1 Name"
        />
        {errors.guarantor1_name && <p style={{ color: "red" }}>{errors.guarantor1_name.message}</p>}

        <input
          {...register("guarantor1_email", {
            required: "Email is required",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Enter a valid email",
            },
          })}
          className="dashboard-input"
          type="email"
          placeholder="Enter Guarantor 1 Email"
        />
        {errors.guarantor1_email && <p style={{ color: "red" }}>{errors.guarantor1_email.message}</p>}

        <input
          {...register("guarantor1_location", { required: "Location is required" })}
          className="dashboard-input"
          type="text"
          placeholder="Enter Guarantor 1 Location"
        />
        {errors.guarantor1_location && <p style={{ color: "red" }}>{errors.guarantor1_location.message}</p>}

        <input
          {...register("guarantor1_cnic", {
            required: "CNIC is required",
            maxLength: {
              value: 13,
              message: "CNIC must be 13 digits long",
            },
            minLength: {
              value: 13,
              message: "CNIC must be 13 digits long",
            },
          })}
          className="dashboard-input"
          type="text"
          placeholder="Enter Guarantor 1 CNIC"
        />
        {errors.guarantor1_cnic && <p style={{ color: "red" }}>{errors.guarantor1_cnic.message}</p>}

        {/* Guarantor 2 Information */}
        <h4 className="text-2xl font-semibold mt-6 mb-3">Guarantor 2 Information</h4>

        <input
          {...register("guarantor2_name", { required: "Name is required" })}
          className="dashboard-input"
          type="text"
          placeholder="Enter Guarantor 2 Name"
        />
        {errors.guarantor2_name && <p style={{ color: "red" }}>{errors.guarantor2_name.message}</p>}

        <input
          {...register("guarantor2_email", {
            required: "Email is required",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Enter a valid email",
            },
          })}
          className="dashboard-input"
          type="email"
          placeholder="Enter Guarantor 2 Email"
        />
        {errors.guarantor2_email && <p style={{ color: "red" }}>{errors.guarantor2_email.message}</p>}

        <input
          {...register("guarantor2_location", { required: "Location is required" })}
          className="dashboard-input"
          type="text"
          placeholder="Enter Guarantor 2 Location"
        />
        {errors.guarantor2_location && <p style={{ color: "red" }}>{errors.guarantor2_location.message}</p>}

        <input
          {...register("guarantor2_cnic", {
            required: "CNIC is required",
            maxLength: {
              value: 13,
              message: "CNIC must be 13 digits long",
            },
            minLength: {
              value: 13,
              message: "CNIC must be 13 digits long",
            },
          })}
          className="dashboard-input"
          type="text"
          placeholder="Enter Guarantor 2 CNIC"
        />
        {errors.guarantor2_cnic && <p style={{ color: "red" }}>{errors.guarantor2_cnic.message}</p>}

        <button type="submit" className="btn btn-green-500 w-full text-lg text-white mt-6">
          Submit
        </button>
      </form>
    </>
  );
};

export default Dashboard;
