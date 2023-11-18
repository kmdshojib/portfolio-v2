import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <div id="contact">
      <p className="font-bold text-lg font-mono mb-2">Get in Touch</p>
      <div>
        <form className="flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs bg-[#040D12] focus:border-[#02aab0] focus:border-[1.5px] placeholder:font-mono"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs bg-[#040D12] focus:border-[#02aab0] focus:border-[1.5px] placeholder:font-mono"
            {...(register("email"), { required: true })}
          />
          <textarea
            className="textarea textarea-bordered w-full max-w-xs bg-[#040D12] focus:border-[#02aab0] focus:border-[1.5px] placeholder:font-mono"
            placeholder="Type Your Message "
            {...register("message")}
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
