import React, { useRef, useState } from 'react';
import auth from '../../Firebase/Firebase.config';

import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';


const UserLgIn = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef(null);

    const handleHeroRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //    reset error 
        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password showhave at least one upper case letter')
            return;
        }

    
        //    add validation 
            signInWithEmailAndPassword(auth,email,password)
            .then(result => {
                console.log(result.user);
                if(result.user.emailVerified){
                    setSuccess('User Login Successfullu');
                }
                else{
                    alert('Please verify your email address')
                }

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })


     }


    // password reset 
    const handleForgetPassword= () =>{
        console.log('please eusouf write a valid forget mail')
        const email = emailRef.current.value;
        if(!email)
        {
           setRegisterError('Please provide valid mail');
            //console.log('forget pass',emailRef.current.value)
            return;
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
        {
            console.log('please eusouf write a valid mail')
            return;
        }
        
         
         //sand validation email
         sendPasswordResetEmail(auth,email)
         .then(()=>{
           alert('bad eusouf')
         })
         .catch(error=>{
            console.log(error)
         })
    }



    return (

        <div >

            <div className='py-10 '>
                <h2 className='text-5xl font-extrabold text-amber-700 text-center'>Please Login</h2>
            </div>
            <div className=" hero min-h-screen bg-base-200 my-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-purple-700"> Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5 text-center">


                        <form onSubmit={handleHeroRegister}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" 
                                ref={emailRef}
                                className="input input-bordered" required name="email" />
                            </div>
                            <div className="form-control text-start">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className="flex items-center relative  ">
                                    <input type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required name="password" />
                                    <span className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>

                                <label className="label">
                                    <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"> Login</button>
                            </div>
                        </form>

                        {
                            registerError && <p className="text-red-500">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }

                        <p className='text-rose-600'>New to this website ? Please <Link to={"/register"}>Register</Link> </p>

                    </div>

                </div>
            </div>

        </div>

    );
};



export default UserLgIn;