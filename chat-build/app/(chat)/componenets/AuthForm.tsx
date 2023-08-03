/*You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.*/

/****To use a Client Component, create a file inside app and add the "use client" directive at the top of the file (before any imports).
By default, all components on NextJS 13 inside the App folder are server components. And Server Components cannot use client features such as useState, useEffect, etc. */

'use client';
// we gonna make this AuthForm interactive that why we write 'use client'
import { useCallback, useState } from "react";

// now Element is an alias of LOGIN or REGISTER
type Element = 'LOGIN' | 'REGISTER';


//Another method to declare a function

// const AuthForm = () =>
// {

// }


function AuthForm()
{
    const [Element, setElement] = useState<Element>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleElement = useCallback (() => {
        if(Element === 'LOGIN')
        {
            setElement('REGISTER');
        }else
        {
            setElement('LOGIN');
        }

    }, [Element])
    //create react hook form submit function 
    return (
        <div>
            <h1>Auth Form!</h1>
        </div>
    )
}

export default AuthForm