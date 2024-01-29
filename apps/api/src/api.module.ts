import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { EntityService } from 'libs/entity/src';

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [ApiService, EntityService],
})
export class ApiModule {}
