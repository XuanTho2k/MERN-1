import UserServices from "@/services/user";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutation({
    mutationFn: async (dataForm) => {
      const { data } = UserServices.signUp(dataForm);
      return data;
    },
    // onSuccess: () => {
    //   window.location.href = "/login";
    // },
    // onError: (err) => console.log(err),
  });

  const onSubmit = (dataForm) => {
    console.log(dataForm);
    mutate(dataForm);
  };
  return (
    <>
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <Link
            to="/"
            className="sm:mx-auto sm:w-full sm:max-w-sm"
          >
            <img
              className="mx-auto h-10 w-auto"
              src="/assets/logo.svg"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#B88E2F]">
              Sign in to your account
            </h2>
          </Link>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-[#B88E2F]"
                >
                  User name
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register("username")}
                    type="text"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 px-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-[#B88E2F]"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 px-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-[#B88E2F]"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    {...register("password")}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-
                  sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-[#B88E2F]"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register("confirmPassword")}
                    type="password"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 px-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button className="flex w-full justify-center rounded-md bg-[#F9F1E7] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-[#B88E2F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already be a member ?
              <a
                href="/login"
                className="font-semibold leading-6 text-black hover:text-[#B88E2F]"
              >
                Click here
              </a>
            </p>
          </div>
        </div>
      </>
    </>
  );
};

export default SignUpForm;
