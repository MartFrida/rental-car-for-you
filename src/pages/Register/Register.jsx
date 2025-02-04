import React from "react";
import Modal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const submit = (data) => {
    console.log(data);
    dispatch(registerThunk(data))
      .unwrap()
      .then(res => {
        navigate('/login')
        toast.info(`Hi, ${res.username}) Go to verification email!`)
      })
      .catch(err => console.log(err));
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
            {...register("username")}
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
