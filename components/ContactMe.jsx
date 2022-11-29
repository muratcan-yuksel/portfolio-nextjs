/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

const ContactMe = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => console.log(formData);
  return (
    <div className="h-screen flex flex-col">
      {" "}
      <h3 className=" text-center my-5 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="  flex flex-col space-y-10">
        <h4 className=" text-xl md:text-4xl font-semibold text-center">
          I've got just what you need. <br />
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
        </h4>
        <div className="space-y-10">
          {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className=" text-lg md:text-2xl">+905526931892</p>
          </div> */}

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className=" text-lg md:text-2xl">muratcanyukselpro@gmail.com</p>
          </div>

          {/* <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">23 dev lane</p>
          </div> */}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className=" flex flex-col md:flex-row md:space-x-2  space-y-2 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            name=""
            id=""
          />
          <button
            type="submit"
            className="bg-[#F7Ab0A] py-5 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
