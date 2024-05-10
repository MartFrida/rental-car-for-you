import React from "react";
import Modal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data);
  };
  return (
    <Modal>
      <form
        onSubmit={handleSubmit(submit)}
        className="grid gap-5 border-2 rounded-md shadow-md bg-white px-10 py-5"
      >
        <label className="flex flex-col gap-2">
          <span>Name</span>
          <input
            {...register("name")}
            placeholder="Enter the Name"
            className="border-2 border-gray rounded-md p-1"
            type="text"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Email</span>
          <input
            {...register("email")}
            placeholder="Enter the Email"
            className="border-2 border-gray rounded-md p-1"
            type="text"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Password</span>
          <input
            {...register("password")}
            placeholder="Enter the Password"
            className="border-2 border-gray rounded-md p-1"
            type="text"
          />
        </label>
        <button className="border-2 border-gray rounded-md p-1">
          Register
        </button>
      </form>
    </Modal>
  );
};

export default Register;
