import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
} from '@nestjs/websockets';
import { WebSocketServer } from '@nestjs/websockets/decorators';
import { Socket, Server, Namespace } from 'socket.io';

@WebSocketGateway(3001, {
  cors: {
    origin: ['http://localhost:8080'],
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  io: Namespace;

  afterInit(server: Server) {
    console.log('Gateway Initialized.');
  }

  handleConnection(client: Socket) {
    console.log('Connected socket: ' + client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Disconnected socket: ' + client.id);
  }
}
