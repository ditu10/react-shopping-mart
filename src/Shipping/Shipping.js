import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../Hooks/useAuth'
import {deleteDB as cleartheCart} from '../localStorage/localstorage'

const Shipping = () => {
    const history = useHistory();
    const handlePlaceOrder = () => {
        cleartheCart();
        history.push("/placeorder")
    }
    const {user} = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h2 className="text-4xl text-yellow-400 py-4 italic">Shipping Address</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <p><input className="py-1 px-3 w-1/4 border-2 rounded my-3" defaultValue={user.displayName} placeholder="Your name" {...register("name")} /></p>

                
                <p><input className="py-1 w-1/4 px-3 border-2 rounded my-3" defaultValue={user.email} placeholder="email" {...register("email", { required: true })} /></p>
                <p><input className="py-1 px-3 w-1/4 border-2 rounded my-3" defaultValue="" placeholder="address" {...register("address")} /></p>
                <p><input className="py-1 px-3 w-1/4 border-2 rounded my-3" defaultValue="" placeholder="city" {...register("city")} /></p>
                <p><input className="py-1 px-3 w-1/4 border-2 rounded my-3" defaultValue="" placeholder="phone" {...register("phone")} /></p>
                
                {errors.email && <span className="text-red-400 block pb-2">This field is required</span>}

                <input onClick={handlePlaceOrder} className="px-4 py-1 rounded-3xl bg-yellow-400" type="submit" />
            </form>
        </div>
    );
};

export default Shipping;