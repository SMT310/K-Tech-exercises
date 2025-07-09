import React, { useState } from "react";

interface CarState {
  selectedCar: string;
  selectedColor: string;
  confirmMessage: string;
}

const carBrands = [
  "Audi",
  "BMW",
  "Chevrolet",
  "Ford",
  "Honda",
  "Hyundai",
  "Kia",
  "Lexus",
  "Mercedes-Benz",
  "Nissan",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];
const colors = ["Black", "White", "Silver", "Red", "Blue", "Gray"];

export default function CarSelection() {
  const [state, setState] = useState<CarState>({
    selectedCar: "",
    selectedColor: "",
    confirmMessage: "",
  });
  const handleCarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState((prev) => ({ ...prev, selectedCar: event.target.value }));
  };
  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState((prev) => ({ ...prev, selectedColor: event.target.value }));
  };
  const handleConfirm = () => {
    setState((prev) => ({
      ...prev,
      confirmMessage: `You selected a ${prev.selectedColor || "None"} - ${
        prev.selectedCar || "None"
      }`,
    }));
  };
  const handleReset = () => {
    setState({ selectedCar: "", selectedColor: "", confirmMessage: "" });
  };
  return (
    <div className="w-full h-screen ">
      <h1 className="font-bold text-[40px]">Select your car</h1>
      <div className="items-center flex p-2 gap-10">
        <h2 className="font-medium text-[20px] mt-6">Select a car</h2>
        <form className="">
          <label
            htmlFor="cars"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="cars"
            value={state.selectedCar}
            onChange={handleCarChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose a car</option>
            {carBrands.map((brand) => (
              <option
                key={brand}
                value={brand}
              >
                {brand}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="items-center flex p-2 gap-5">
        <h2 className="font-medium text-[20px] mt-6">Select a color</h2>
        <form className="">
          <label
            htmlFor="colors"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a color
          </label>
          <select
            id="colors"
            value={state.selectedColor}
            onChange={handleColorChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose a color</option>
            {colors.map((color) => (
              <option
                key={color}
                value={color}
              >
                {color}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={handleConfirm}
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
        >
          Confirm
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg"
        >
          Reset
        </button>
      </div>
      {state.confirmMessage && (
        <p
          className="mt-2 text-xl text-green-600 font-medium"
        >
          {state.confirmMessage}
        </p>
      )}
    </div>
  );
}
