import img1 from "./images/chat-game.jpeg"

export default function page()
{
    return (
        <div>
            <div className="
                    flex
                    min-h-full
                    flex-col
                    justify-center
                    py-12
                    sm:px-6
                    lg:px-8
                     bg-gray-100">
                <p>Chat Index</p>
            </div>
            <div className="sm:mx-auto sm:w-full">
                <img className="mx-auto w-auto" width="30px" height="30px" src="./images/chat-game.jpeg" alt="logo" />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign to your account</h2>
            </div>
        </div>
        
    )
}