import React from "react";
import { RHFLoginFormSchema } from "../../schema/RHFLoginSchema";
import type { IRHFLoginForm } from "../../types/RHFLoginForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";

function RHFLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRHFLoginForm>({
    resolver: yupResolver(RHFLoginFormSchema),
  });

  const onSubmit: SubmitHandler<IRHFLoginForm> = (data) => {
    console.log("Hook form data", data);
    reset();
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
            <p className="text-red-500 text-sm mt-1 text-left">{errors.email?.message}</p>
          </div>
          <div className="mb-6">
            <input
              type="text"
              {...register("password")}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.password?.message}
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default RHFLoginForm;
