import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway } from "@nestjs/websockets";
import { CLIENT_URI } from "../constans";
import { AppService } from "../app.service";

@WebSocketGateway({
  cors: {
    origin: CLIENT_URI // можно указать `*` для отключения `CORS`
  },
  serveClient: false,
  // название пространства может быть любым, но должно учитываться на клиенте
  namespace: "chat"
})
export class HlebLohGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly appService: AppService) {}

  afterInit(server: Server): any {}

}