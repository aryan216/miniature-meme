import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [vehicleName, setVehiclename] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const handleEmailchange = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
  };
  const handleFirstnamechange = (e) => {
    setFirstname(e.target.value);
    // console.log(e.target.value);
  };

  const handleLastnamechange = (e) => {
    setLastname(e.target.value);
    // console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log(e.target.value);
  };

  const vehiclenameChange = (e) => {
    setVehiclename(e.target.value);
  };

  const colorChange = (e) => {
    setColor(e.target.value);
  };

  const plateChange = (e) => {
    setPlate(e.target.value);
  };

  const capacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const vehicleTypeChange = (e) => {
    setVehicleType(e.target.value);
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(email,password,firstname,lastname);
    const newUser = {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      vehicle: {
        vehicleName:vehicleName,
        color: color,
        plate: plate,
        capacity: capacity,
        vehicleType: vehicleType,
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      newUser
    );
    if (response.status === 201 || response.status === 200) {
      const data = response.data;
      console.log(data);
      setCaptain(data.captain);
    }
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setVehiclename("");
    setColor("");
    setPlate("");
    setCapacity("");
    setVehicleType("");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* <div className=" max-h-[80vh] overflow-y-scroll scrollbar-hide"> */}
      <div className="flex flex-col items-center w-full max-w-md p-6 bg-white  shadow-2xl max-h-[80vh] overflow-y-scroll scrollbar-hide">
        <h1 className="text-xl font-bold mb-4 text-gray-800">Captain Signup</h1>
        <div className="flex flex-col  w-full">
          <div className="mb-4 ">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailchange}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={firstname}
              onChange={handleFirstnamechange}
              placeholder="Enter your first name"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={lastname}
              onChange={handleLastnamechange}
              placeholder="Enter your last name"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Name
            </label>
            <input
              type="text"
              value={vehicleName}
              onChange={vehiclenameChange}
              placeholder="Enter Vehicle Name"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Colour
            </label>
            <input
              type="text"
              value={color}
              onChange={colorChange}
              placeholder="Enter your vehicle colour"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number Plate
            </label>
            <input
              type="text"
              value={plate}
              onChange={plateChange}
              placeholder="Enter vehicle number"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:outline-none "
            />
          </div>
          <div className="mb-4 ">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Capacity
            </label>
            <div className="flex flex-row gap-2">
              <select
                required
                className="border border-gray-300 w-1/2 rounded-md  p-2 bg-gray-50 focus:outline-none"
                value={vehicleType}
                onChange={vehicleTypeChange}
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="hatchback">Hatchback</option>
                <option value="suv">SUV</option>
                <option value="auto">Auto</option>
                <option value="bike">Bike</option>
              </select>

              <input
                type="number"
                value={capacity}
                onChange={capacityChange}
                min={1}
                max={vehicleType === "bike" ? 1 : vehicleType === "hatchback" ? 4 : vehicleType === "suv" ? 6 : 3}
                placeholder="Enter vehicle capacity"
                className="border border-gray-300 rounded-md w-1/2  p-2 bg-gray-50 focus:outline-none "
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={SubmitHandler}
          className="w-full py-2 px-4 bg-black text-white rounded-md shadow-sm"
        >
          Signup
        </button>
        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-black hover:underline">
            Login
          </Link>
        </p>
        <Link
          to="/signup"
          className="mt-4 w-full py-2 px-4 bg-green-600 text-white text-center rounded-md shadow-sm hover:bg-green-700 transition"
        >
          Sign up as user
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};
export default CaptainSignup;
