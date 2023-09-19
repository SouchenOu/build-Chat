/* eslint-disable prettier/prettier */
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AppService } from './app.service';


@WebSocketGateway(8001, {
  cors: {
    // iwant every frontend client to be able to connect with our gateway
    origin: '*',
  },
})
export class AppGateway {
  constructor(private appService: AppService) { }
  // we use this decorator to create an instance of a server
  @WebSocketServer() server: Server;
  // next we want to be able to extract the data that has been send from the frontEnd we can do it via another decorator called @messageBody and then extract a message with type string
  // so after this whenever we emit an event that is called 'message' from our frontend this function handleMessage() is run 
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string) : void{
      console.log(message);
      // then we emit an event called also 'message'
      this.server.emit('message', message);
      // so know whenever a user send a message we want to take this message and send it back to all other users(all clients that are connectes to our gateway will receive the message)
  }

}


/* so now we are listening in postman to 'onMessage' event which means the server is going to actually emit that event, so what we do is whenever we receive 
    the 'sendMessage' event   we will go ahead and reference the server we will emit the 'newMessage'      */
    // so now every single client that is going to be connected to the server listens to the 'newMessage' event will receive this payload whenever a 'sendMessage'e event is
    //received on the websocket  server*/
