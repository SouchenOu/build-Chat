'use client'

// to avoid multiple className
import clsx from 'clsx'
import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form'

/****In Typescript, “?” represents optional parameters. We use optional parameters when it's not mandatory for that parameter to have a value or to be specified */

interface InputProps {
    label: string;
    id: string;
    type?: string;
    requered?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;

}
const Input = () => {
    return (
        <div>
            hello this is me
        </div>
    )
}
export default Input