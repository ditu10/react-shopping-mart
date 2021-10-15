import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="text-center space-y-4 py-5">
                <h2 className="text-4xl font-semibold text-gray-600">Create Account</h2>

                <form className="space-y-3" onSubmit="">
                    <p><input className="border py-1 px-3 w-1/2" type="email" placeholder="Email" /></p>
                    <p><input className="border py-1 px-3 w-1/2" type="password" name="" placeholder="password" id="" /></p>
                    <p><input className="border py-1 px-3 w-1/2" type="password" name="" placeholder="confirm password" id="" /></p>
                    <input className="border py-1 px-3 w-1/6 bg-gray-400" type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login" className="text-indigo-500 underline">Login</Link> </p>
                <p>------------- Or --------------</p>
                <button className="border py-1 px-3 rounded-3xl bg-yellow-400 ">Google sign in</button>
            </div>
        </div>
    );
};

export default Register;