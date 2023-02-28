import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = forms => console.log(forms)
    return (
        <div className='form'>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="name">
                    <label htmlFor="text">Name</label>
                    <br/>
                    <input {...register("name",{required:true,minLength:{value:5}})} />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <br/>
                    <input {...register("password",{required:true,minLength:{value:5}})} />
                </div>
                <button type='submit' className='button'>click</button>
            </form>
        </div>
    );
};

export default Form;
