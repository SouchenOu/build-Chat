/*You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.*/

/****To use a Client Component, create a file inside app and add the "use client" directive at the top of the file (before any imports).
By default, all components on NextJS 13 inside the App folder are server components. And Server Components cannot use client features such as useState, useEffect, etc. */

'use client';
// we gonna make this AuthForm interactive that why we write 'use client'
import { useCallback, useState } from "react";
import {SubmitHandler, FieldValues, useForm} from "react-hook-form"
import Input from '../../components/inputs/input'
import Button from "../../components/Button/button"
import styles from "./page.module.css"
import AuthSocialButton from "./AuthSocialButton"
import {BsGithub, BsGoogle}  from "react-icons/bs"


// now Element is an alias of LOGIN or REGISTER
type Element = 'LOGIN' | 'REGISTER';


//Another method to declare a function

// const AuthForm = () =>
// {

// }


function AuthForm()
{
    const [Element, setElement] = useState('LOGIN');
    const [isLoading, setIsLoading] = useState(false);


    // we memorize this function by using useCallback()

    const toggleElement = () => {
        if(Element === 'LOGIN')
        {
            setElement('REGISTER');
        }else
        {
            setElement('LOGIN');
        }

    }
    // const toggleElement = useCallback (() => {
    //     if(Element === 'LOGIN')
    //     {
    //         setElement('REGISTER');
    //     }else
    //     {
    //         setElement('LOGIN');
    //     }

    // }, [Element])

    
    //create react hook form submit function 
    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit : SubmitHandler<FieldValues> = (data) =>
    {
        setIsLoading(true);
        if(Element === 'REGISTER')
        {

        }
        if(Element === 'LOGIN')
        {

        }
    }

    const socialAction = (action : string) => {
        setIsLoading(true);
    }

    const FunctionTest = () =>
    {
        console.log("hello souchen");
    }
    
    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {Element === 'REGISTER' && 
                        <Input id="name" type="text" label="UserName" register={register} errors={errors} disabled={isLoading}/>}
                        <Input id="email" type="email" label="Email" register={register} errors={errors} disabled={isLoading}/>
                        <Input id="Password" type="password" label="Password" register={register} errors={errors} disabled={isLoading}/>
                        <div >
                            <Button type="submit" fullWidth disabled={isLoading}>{Element === 'LOGIN' ? 'Sign in' : 'Register'}</Button>
                        </div>
                </form>
                <div className={styles.topClass}>
                    <div className="relative">
                    
                            <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                            </div>
                   
                        <div className="mt-6 flex gap-2">
                                <AuthSocialButton icon={BsGithub} onClick={()=> socialAction('github')}/>
                                <AuthSocialButton icon={BsGoogle} onClick={()=> socialAction('Google')}/>

                        </div>
                        <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
                            <div >
                                {Element === 'LOGIN' ? 'New to PingPong?' : 'Already have an account'}
                            </div>
                            <div onClick={toggleElement} className="underline cursor-pointer">
                                {Element === 'LOGIN' ? 'Create an account' : 'Login'}
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm