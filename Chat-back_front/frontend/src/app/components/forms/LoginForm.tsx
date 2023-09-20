"use client"

import { InputField, InputLabel } from "@/app/utils/styles";
import { InputContainer } from "@/app/utils/styles";
import { Button } from "@/app/utils/styles";
import styles from "./index.module.scss"
import Link from "next/link";
import { useForm } from "react-hook-form";



const LoginForm = () => {


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
                    <InputLabel htmlFor="email">Email </InputLabel>
                    <InputField type="email" id="email" {...register('email', {required: true})}/>
                </InputContainer>
                <InputContainer className={styles.inputPass} >
                    <InputLabel htmlFor="password">Password </InputLabel>
                    <InputField type="password" id="password" {...register('password', {required: true})}/>
                </InputContainer>
               
                <Button className={styles.btn}>Login</Button>
                <div className={styles.user}>
                    <span>Dont have an account ? </span>
                    <Link href="/dashboard/AuthenticationPage/RegisterPage">Sign Up</Link>
                </div>
                

                
            </form>
        </div>
     );
}
 
export default LoginForm;