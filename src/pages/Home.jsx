

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const loanOptions = {
    "Wedding Loan": ["Valima", "Furniture", "Valima Food", "Jahez"],
    "Home Construction Loan": ["Structure", "Finishing"],
    "Business Startup Loan": ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    "Education Loan": ["University Fees", "Child Fees Loan"],
  };
  const navigate = useNavigate()

  const [loanType, setLoanType] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://boiler-plate-mu.vercel.app/api/loan/loan", {
        loanType,
        subcategory,
        amount,
        duration,
      });
      console.log(response);
      alert("Loan application submitted successfully!");
      navigate("/Register")

    } catch (error) {
      console.error("Error applying for loan:", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Apply for a Loan</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Loan Type</label>
          <select
            value={loanType}
            onChange={(e) => {
              setLoanType(e.target.value);
              setSubcategory(""); 
            }}
            className="w-full border p-2 rounded"
            required
          >
            <option value="" disabled>Select Loan Type</option>
            {Object.keys(loanOptions).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {loanType && (
          <div>
            <label className="block mb-1 font-medium">Subcategory</label>
            <select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="w-full border p-2 rounded"
              required
            >
              <option value="" disabled>Select Subcategory</option>
              {loanOptions[loanType].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block mb-1 font-medium">Amount (PKR)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter loan amount"
            required
          />
        </div>


        <div>
          <label className="block mb-1 font-medium">Duration (Years)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter duration in years"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit Loan Application
        </button>
      </form>
    </div>
  );
};

export default Home;


