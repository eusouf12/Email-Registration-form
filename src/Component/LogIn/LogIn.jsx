import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";


const LogIn = () => {
     const[userGoogle,setuserGoogle]=useState(null);
    const provaider= new GoogleAuthProvider();

    const handleGoogle=()=>{
        signInWithPopup(auth,provaider)

        .then(result=>{
            const user= result.user;
            console.log(user);
            setuserGoogle(user);
        })

        .catch(error=>{
            console.error(error);
        })
    }

    const handleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            setuserGoogle(null);
        })
        .catch(error=>{
            console.error(error);
        })

    }


    return (
        <div>
            <h2 className="text-3xl font-semibold text-center pt-10 text-lime-500">Please Login</h2>
            <div className="text-center py-10 space-y-10">
               
               {userGoogle ? <button onClick={handleSignOut}
                className="btn btn-secondary">Sign Out</button> : <button onClick={handleGoogle}
                className="btn btn-primary">Google LogIn</button>
              

               }



                {  userGoogle &&
                    <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-orange-600">User : {userGoogle.displayName}</h2>
                    <h3 className="text-2xl font-bold text-orange-600">Email : {userGoogle.email}</h3>
                    <div className="flex justify-center">
                         <img  src={userGoogle.photoURL} alt="" />
                    </div>
                    
                </div>
                }
            </div>
        </div>
    );
};

export default LogIn;