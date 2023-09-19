"use client"

import { InputField, InputLabel } from "@/app/utils/styles";
import { InputContainer } from "@/app/utils/styles";
import styles from "./index.module.css"

const RegisterForm = () => {
    return ( 
        <div>
            <form className={styles.form}>
                <InputContainer>
                    <InputLabel htmlFor="email">Email </InputLabel>
                    <InputField type="email" id="email"/>
                </InputContainer>
                <section>
                <InputContainer>
                    <InputLabel htmlFor="email">Email </InputLabel>
                    <InputField type="email" id="email"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="email">Email </InputLabel>
                    <InputField type="email" id="email"/>
                </InputContainer>
                </section>
             
                
            </form>
        </div>
     );
}
 
export default RegisterForm;