import { useContext, useState } from "react";
import { AuthContext } from "../CommonComponents/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Login = () => {
    const { Login, auth } = useContext(AuthContext)
    const [error, SetError] = useState('')
    const provider = new GoogleAuthProvider
    const navigate = useNavigate()

    const ErrorShow=()=>{
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
          });
    }
    const HandelLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        Login(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/')

            })
            .catch(err => SetError(err.message))
    }

    const HandelGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
                navigate('/')
            })
            .catch((err) => console.log(err.message))
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={HandelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        
                    </form>
        
                    <button onClick={HandelGoogleLogin} className="btn btn-info text-xl">Login with < FcGoogle /></button>
                    <p className="m-auto p-2">new ? Please <Link className="text-sky-400 font-semibold" to={'/Register'}>Register</Link></p>
                    {
                             error?ErrorShow:''
                        }
                </div>
            </div>
        </div>
    );
};

export default Login;