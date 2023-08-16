import img1 from "./images/chat.png"
import AuthForm from './componenets/AuthForm'
import styles from "./page.module.css"
export default function page()
{
    return (
        <div
            className="
                    flex
                    min-h-full
                    flex-col
                    justify-center
                    py-12
                    sm:px-6
                    lg:px-8
                    bg-gray-100">
            <div className={styles.title}>
                <p>Chat Index</p>
            </div>
            <div className="sm:mx-auto sm:w-full">
                <img className="mx-auto " height={300} width={300} src="./images/chat.png" alt="logo" />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign to your account</h2>
            </div>
            <AuthForm />
        </div>
        
    )
}