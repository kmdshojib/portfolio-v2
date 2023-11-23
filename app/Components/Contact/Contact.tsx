"use client";
import React from "react";
import { useForm, FieldValues, FieldError } from "react-hook-form";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  message: string;
  errors: FieldError;
}

interface CustomFormState extends FieldValues {
  errors: {
    name?: FieldError;
    email?: FieldError;
    message?: FieldError;
  };
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData, CustomFormState>();
  const handleMessage = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    const apiEndpoint = "/api/email";

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        reset();
        toast.success(response.message);
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div data-name="contact" id="contact">
      <p className="font-bold text-lg font-mono mb-2">Get in Touch</p>
      <div>
        <form
          onSubmit={handleSubmit(handleMessage)}
          className="flex flex-col justify-center items-center"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            {...register("name", { required: true })}
            className={`input input-bordered w-full max-w-xs bg-[#040D12] focus:border-[#02aab0] focus:border-[1.5px] placeholder:font-mono ${
              errors.name ? "focus:border-rose-500" : "focus:border-[#02aab0]"
            }`}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            {...register("email", { required: true })}
            className={`input input-bordered w-full max-w-xs bg-[#040D12] focus:border-[#02aab0] focus:border-[1.5px] placeholder:font-mono ${
              errors.email ? "focus:border-rose-500" : "focus:border-[#02aab0]"
            }`}
          />
          <textarea
            name="message"
            {...register("message", { required: true })}
            className={`textarea textarea-bordered w-full max-w-xs bg-[#040D12] focus:border-[#02aab0] focus:border-[1.5px] placeholder:font-mono ${
              errors.message
                ? "focus:border-rose-500"
                : "focus:border-[#02aab0]"
            }`}
            placeholder="Type Your Message "
          ></textarea>
          <button
            type="submit"
            className="btn btn-sm md:btn-md font-mono mt-3 border-[#02aab0] bg-[#040D12]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
