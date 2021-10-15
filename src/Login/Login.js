import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const { user, signInUsingGoogle } = useFirebase();
    return (
        <div>
            <div className="text-center space-y-4 py-5">
                <h2 className="text-4xl font-semibold text-gray-600">Login</h2>

                <form className="space-y-3" onSubmit="">
                    <p><input className="border py-1 px-3 w-1/2" type="email" placeholder="Email" /></p>
                    <p><input className="border py-1 px-3 w-1/2" type="password" name="" placeholder="password" id="" /></p>
                    <input className="border py-1 px-3 w-1/6 bg-gray-400" type="submit" value="Submit" />
                </form>
                <p>New at Ema-John? <Link to="/register" className="text-indigo-500 underline">Create a new account</Link> </p>
                <p>------------- Or --------------</p>
                <button onClick={signInUsingGoogle} className="border py-1 px-3 rounded-3xl bg-yellow-400 ">Google sign in</button>
            </div>
        </div>
    );
};

export default Login;