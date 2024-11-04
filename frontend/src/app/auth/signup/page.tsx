"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import cn from "@/lib/utlis";
import { SignupFormSchema, TSignupForm } from "@/validations/SignupFormSchema";
import { AuthInputField } from "@/components/auth";

const errorMessage = {
  emailExists: "Email already exists. Please use a different email.",
  genericError: "An error occurred, Please try again.",
};

const Signup = () => {
  const [signupResponse, setIsSignupResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSignupForm>({
    resolver: zodResolver(SignupFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TSignupForm> = async ({
    first_name,
    last_name,
    email,
    password,
  }) => {
    try {
      setLoading(true);
      const username = `${first_name.toLowerCase()}.${last_name.toLowerCase()}`;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
        {
          username,
          email,
          password,
        }
      );

      console.log("signup response", response);

      if (response.status === 201) {
        reset();
        setTimeout(() => {
          router.push("/auth/login");
        }, 1000);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        setIsSignupResponse(errorMessage.emailExists);
      } else {
        setIsSignupResponse(errorMessage.genericError);
      }
    } finally {
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form
      className="max-w-md mx-auto bg-lightGray dark:bg-gray-800 shadow-xl dark:shadow-gray-800 rounded-md p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-black dark:text-white font-bold text-xl mb-5">
        Signup
      </h1>

      <AuthInputField
        type="email"
        id="email"
        register={register("email")}
        errors={errors.email?.message}
        label="Email"
      />

      <AuthInputField
        type="password"
        id="password"
        register={register("password")}
        errors={errors.password?.message}
        label="Password"
        showPassword={showPassword}
        toggleShowPassword={() => setShowPassword(!showPassword)}
      />

      <AuthInputField
        type="password"
        id="confirm_password"
        register={register("confirm_password")}
        label={"Confirm password"}
        errors={errors.confirm_password?.message}
      />

      <div className="grid md:grid-cols-2 md:gap-6">
        <AuthInputField
          type="text"
          id="first_name"
          register={register("first_name")}
          errors={errors.first_name?.message}
          label={"First Name"}
        />

        <AuthInputField
          type="text"
          id="last_name"
          register={register("last_name")}
          label={" Last name"}
          errors={errors.last_name?.message}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={cn(
          "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg  w-full sm:w-auto px-4 py-2 text-xs text-center dark:bg-blue-600 dark:hover:bg-blue-700",
          { "bg-blue-900": loading }
        )}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12H4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          "Signup"
        )}
      </button>
      <p className="mt-4 text-red-600 dark:text-rose-200">{signupResponse}</p>
      <p className="text-xs mt-4 text-gray-600 dark:text-gray-300">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Signup;
