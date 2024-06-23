import React from 'react'
import { useForm } from 'react-hook-form'
import Modal from '../Modal/Modal'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../redux/auth/operations'
import { toast } from 'react-toastify'

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'marfa.dev@gmail.com',
      password: 'marfa.dev@gmail.com',
    }
  })
  const dispatch = useDispatch()
  const submit = (data) => {
    console.log(data)
    dispatch(loginThunk(data))
      .unwrap()
      .then((res) => {
        console.log(res)
        toast.success(`Welcome ${res.email}`)
      })
      .catch(() => { toast.error('Something went wrong!') })
  }
  return (
    <Modal>
      <form
        onSubmit={handleSubmit(submit)}
        className="grid gap-5 border-2 rounded-md shadow-md bg-white px-10 py-5"
      >
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
            type="password"
          />
        </label>
        <button className="border-2 border-gray rounded-md p-1">
          Login
        </button>
      </form>
    </Modal>
  )
}

export default Login