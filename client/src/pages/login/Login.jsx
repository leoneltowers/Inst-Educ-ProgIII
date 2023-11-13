// import { useEffect } from "react";
// import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, ButtonNext, Input, Label } from "../../components/ui";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
// import { registerSchema } from "../../schemas/auth";
// import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from "../../context/authContext";
import { loginSchema } from "../../schemas/auth";
// import { registerRequest } from '../../api/auth';
import "./styles.css";
// import Cookies from "js-cookie";
// import jwt from "jsonwebtoken";


// const token = Cookies.get('token');
// // Decodifica el token para obtener la información del usuario
// const decodedToken = jwt_decode(token);

// // Accede al rol del usuario
// const rolUsuario = decodedToken.roles;





function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const { signin, errors: loginErrors, isAuthenticated, user } = useAuth();


  // pasa page

  // const onSubmit = (data) => signin(data);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    signin(data);

  });


  const navigate = useNavigate();
  //aca esta el error parece
  // useEffect(() => {
  //   if (isAuthenticated) navigate("/docente");
  // }, [isAuthenticated]);



  //con roles

  // const roles = () => ({
  //   isProfesor: user.roles.includes('653b073550a96710dbbee045'),
  //   isAlumno: user.roles.includes('653b073550a96710dbbee046')
  // });

  useEffect(() => {
    if (isAuthenticated) { 
      // Comprueba el rol del usuario antes de redirigir
      if (user && user.roles[0].name === 'admin') {
        navigate('/docente'); // Redirige a la página de docente
      } else if (user && user.roles[0].name ==='alumno') {
        navigate('/alumno'); // Redirige a la página de alumno
      }
    }
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
                
                {/* <p>Rol: {user.roles}</p> */}


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
                {/* <button type="submit">INGRESAR</button> */}
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
