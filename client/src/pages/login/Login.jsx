
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, ButtonNext, Input, Label } from "../../components/ui";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";

import "./styles.css";
import Header from "../../components/header/Header";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: loginErrors, isAuthenticated, user } = useAuth();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    signin(data);

  });

  const navigate = useNavigate();
  useEffect(() => {
    isAuthenticated && user && navigate(
      user.roles[0].name === 'admin' ? '/admin-home' :
      user.roles[0].name === 'profesor' ? '/profesor-home' :
      user.roles[0].name === 'alumno' ? '/alumno-home' :
      '/otra-ruta' // Puedes manejar otros roles o casos aquí
    );
  }, [isAuthenticated, user, navigate]);

  return (
  
    <div class="login">
      <div class="login_logo"></div>
      <div class="login_form_container">
        <div class="login_card">
          <div class="w-96 rounded-2xl bg-slate-900">
            {loginErrors.map((error, i) => (
              <div className="bg-red-500 p-2 text-white" key={i}>
                {error}
              </div>
            ))}

            <form
              onSubmit={onSubmit}
            >
              <div class="flex flex-col gap-2 p-8">
                <p class="text-center text-3xl text-gray-300 mb-4">Login</p>

                <Input
                  name="email"
                  placeholder="Write your Email"
                  {...register("email", { required: true })}
                />

                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  {...register("password", { required: true, minLength: 6 })}
                />
                <Label></Label>
                <ButtonNext>Sig In</ButtonNext>
              </div>
            </form>
            <p className="flex gap-x-2 mx-7 justify-between text-white">
              Don't have an account? <Link to="/register" className="text-sky-500 ">Sign up</Link>
            </p><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
