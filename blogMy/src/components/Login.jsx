import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice';
import {button, Input, Logo} from "./index"
import { UseDispatch, useDispatch } from 'react-redux';
import authService from "../appwrite/auth"
import {useForm} from 'react-hook-form'



function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try{
             session = await authService.login(data);
             if (session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                navigate("/")
             }
        }catch(error) {
            setError(error.message)
        }
    }
  return (
    <div
    className='flex items-center justify-center w-full'
    >
      <div className={`mx-auto w-full max-w-lg bg-gray-100 roundex-xl p-10 border border-black/10`}>
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-{100px}'>
                <Logo width="100%"/>
            </span>
        </div>
        <h2 className='text-center text-2xl font-bold loading-tight'> Sign in your account </h2>
        <p className='mt-2 text-center text-base text-black/60'>
            Dont&apos;t have any account?&nbsp;
            <Link
                to='/signup'
                className='font-medium text-primary transition-all duration-200 hover:underline'>
                    Sign Up
                </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className="space-y-5">
            <Input
            label = "Email: "
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) => /^\w+([,=]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)|| "Email address must be a valid address",
              }
            })}
            />
            <Input
            label="Password:"
            type="password"
            placeholder="Ener your password"
            {...register("password", {
              required: true,
            })}
            />
            <button
            type='submit'
            className="w-full"
            >Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
