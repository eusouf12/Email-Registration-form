import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";


const HeroRegister = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState();

    const handleHeroRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

         //    reset error 
         setRegisterError('');
         setSuccess('');
 

        if(password.length < 6)
        {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }

       
        //    creat user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfullu');

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })


    }


    return (
        
            <div className=" hero min-h-screen bg-base-200 my-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-purple-700">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5 text-center">
                        <form onSubmit={handleHeroRegister}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                        {
                            registerError && <p className="text-red-500">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }

                    </div>

                </div>
            </div>

        

    );
};

export default HeroRegister;