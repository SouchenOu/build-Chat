export default function  Messages ({messages} : { messages: string[]}){
    return (  
        <div>
           {messages.map((message, index) =>(
            <div key={index}> {messages} </div>
           ))}
        </div>
    );
}

