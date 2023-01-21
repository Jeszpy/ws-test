import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HlebLohGateway } from './hleb-loh/hleb-loh.gateway';

@Module({
  imports: [],
  providers: [AppService, HlebLohGateway],
})
export class AppModule {}
