import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';//cambie"""
import { Card, Message, Button, Input, Label, ButtonNext } from "../../components/ui";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";

import "./styles.css";

function Register() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (isAuthenticated) navigate("/");
  // }, [isAuthenticated]);


  const onSubmit = handleSubmit(async (values) => {
    signup(values);
    
  });

 
  return (
    <div class="login">
      <div class="login_logo"></div>
      <div class="login_form_container">
        <div class="login_card">
          {
            registerErrors.map((error, i) => (
              <div className="bg-red-500 p-2 text-white" key={i}>
                {error}
              </div>
            ))
          }


          <div class="w-96 rounded-2xl bg-slate-900">

            <form
              onSubmit={onSubmit}
            >
              <div class="flex flex-col gap-2 p-8">
                <p class="text-center text-3xl text-gray-300 mb-4">Register</p>
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Write your first name"
                  {...register("firstName")}
                />
                {errors.username?.message && (
                  <p className="text-red-500">{errors.username?.message}</p>
                )}

                <Input
                  type="text"
                  name="lastname"
                  placeholder="Write your last name"
                  {...register("lastName")}
                />
                {errors.username?.message && (
                  <p className="text-red-500">{errors.username?.message}</p>
                )}

                <Input
                  name="email"
                  placeholder="Write your Email"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <p className="text-red-500">{errors.email?.message}</p>
                )}

                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  {...register("password")}
                />

                {errors.password?.message && (
                  <p className="text-red-500">{errors.password?.message}</p>
                )}
                <Input
                  type="rpassword"
                  name="rpassword"
                  placeholder="Confirm"
                //  {...register("rpassword")}
                />

                <Label></Label>
                <Link to="/login">
                <ButtonNext>Register</ButtonNext>
                </Link>
              </div>

            </form>
            <p className="flex gap-x-2 mx-7 justify-between text-white">
              Already have an account? <Link to="/login" className="text-sky-500 ">Login</Link>
            </p><br />

          </div>
        </div>



      </div>
    </div>
  );
}

export default Register;
