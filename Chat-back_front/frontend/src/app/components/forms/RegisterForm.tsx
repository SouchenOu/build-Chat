"use client"

import { InputField, InputLabel } from "@/app/utils/styles";
import { InputContainer } from "@/app/utils/styles";
import { Button } from "@/app/utils/styles";
import styles from "./index.module.scss"
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterForm = () => {

    const {register, handleSubmit, formState : {errors}} = useForm();
    console.log(errors);
    const onSubmit = (data : any) =>
    {
        console.log(data);
    }
    return ( 
        <div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <InputLabel htmlFor="email" >Email </InputLabel>
                    <InputField type="email" id="email" {...register('email', {required: 'Email is required',})}/>
                </InputContainer>
                <section className={styles.Row}>
                <InputContainer >
                    <InputLabel htmlFor="FirstName" >FirstName </InputLabel>
                    <InputField type="text" id="FirstName" {...register('FirstName', {required: 'FirstName is required'})}/>
                </InputContainer>
                <InputContainer >
                    <InputLabel htmlFor="LastName" >LastName </InputLabel>
                    <InputField type="text" id="LastName" {...register('LastName', {required: 'LastName is required'})}/>
                </InputContainer>
                
                </section>
                <InputContainer >
                    <InputLabel htmlFor="password">Password </InputLabel>
                    <InputField type="password" id="password" {... register('password', {required: 'Password is required'})}/>
                </InputContainer>
               
                <Button className={styles.btn}>Register</Button>
                <div className={styles.user}>
                    <span>Already have an account ? </span>
                    <Link href="/dashboard/AuthenticationPage/LoginPage">Login</Link>
                </div>
                
                

                
            </form>
        </div>
     );
}
 
export default RegisterForm;