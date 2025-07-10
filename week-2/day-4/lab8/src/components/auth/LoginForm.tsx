import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ILogin } from "../../types/auth.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "../../schemas/AuthFormSchema";
import { useForm, type SubmitHandler } from "react-hook-form";

import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILogin>({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log("Hook form data", data);
    reset();
  };

  const handleClick = () => {
    navigate("/register");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              {...register("email")}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.email?.message}
            </p>
          </div>
          <div className="mb-6">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleClick}
              className="w-full bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-black hover:text-white transition duration-200"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
