import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
} from '@nestjs/websockets';
import {
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets/decorators';
import { Socket, Server } from 'socket.io';
import { config } from 'dotenv';
config();

@WebSocketGateway(+process.env.GATEWAY_PORT, {
  cors: {
    origin: [`http://localhost:${process.env.CLIENT_PORT}`],
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  io: Server;

  afterInit(server: Server) {
    console.log('Gateway Initialized.');
  }

  handleConnection(client: Socket) {
    console.log('Connected socket: ' + client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Disconnected socket: ' + client.id);
  }

  @SubscribeMessage('joinRoom')
  async handleJoinRoom(
    client: Socket,
    data: { roomCode: string; username: string },
  ) {
    if (Array.from(client.rooms).indexOf(data.roomCode) < 0) {
      client.join(data.roomCode);
    }
  }
}
