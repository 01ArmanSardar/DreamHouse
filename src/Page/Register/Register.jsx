import { useContext, useState } from "react";
import { AuthContext } from "../CommonComponents/AuthProvider";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";

import { FaEye } from "react-icons/fa";


const Register = () => {
    const { CreateAccount } = useContext(AuthContext)
    const [RegisterError, SetRegisterError] = useState('')
    const [RegisterSuccess, SetRegisterSuccess] = useState('')
    const [showPassword, SetSHowPasseord] = useState(false)
    // const [photo,setPhoto]=useState(null)

    // const handelPhotoChange=(e)=>{
    //     setPhoto(e.target.files[0]);
    // }
    function password_validate(password) {
        var re = {
            'capital': /[A-Z]/,
            'digit': /[0-9]/,
            // 'except': /[aeiou]/,
            // 'full': /^[@#][A-Za-z0-9]{7,13}$/
        };
        return re.capital.test(password) &&
            re.digit.test(password);
        // !re.except.test(password) &&
        // re.full.test(password);
    }

    const HandelRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, name, password);
        SetRegisterError('')
        if (password_validate(password)) {
            CreateAccount(email, password)
                .then(result => { console.log('register done', result.user); SetRegisterSuccess('succeFully account Created') })
                .catch(err => { console.log(err); })
        }
        else {
            return SetRegisterError('your password validation is invalid')
        }



    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={HandelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="your Name" className="input input-bordered" required />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name="photo" type="file" onChange={handelPhotoChange} placeholder="your photo" className="input input-bordered" required />
                        </div> */}
                        <div className="form-control flex">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />

                            <span onClick={() => { SetSHowPasseord(!showPassword) }}>{showPassword ? <FaEyeSlash className="text-error -mt-2"></FaEyeSlash> : <FaEye className="text-success -mt-2"></FaEye>}</span>


                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="m-auto p-2">Already Have ACcount <Link className="text-sky-400 font-semibold" to={'/login'}>Login</Link></p>
                    {
                        RegisterError && <div className="toast toast-top toast-start">
                            <div className="alert alert-error">
                                <span className="">{RegisterError}</span>
                            </div>
                        </div>
                    }
                    {
                        RegisterSuccess && <div className="toast toast-top toast-start">
                            <div className="alert alert-success">
                                <span className="">{RegisterSuccess}</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;