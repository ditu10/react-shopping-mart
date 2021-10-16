import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { user, setError, signInUsingGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirect_url = location.state?.from || '/shop';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            console.log(result.user)
            history.push(redirect_url)
        }).catch(error => {
            setError(error.message);
        })
    }
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
                <button onClick={handleGoogleSignIn} className="border py-1 px-3 rounded-3xl bg-yellow-400 ">Google sign in</button>
            </div>
        </div>
    );
};

export default Login;