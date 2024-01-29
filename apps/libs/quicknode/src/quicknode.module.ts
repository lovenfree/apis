import { Module } from '@nestjs/common';
import { QuicknodeService } from './quicknode.service';

@Module({
  providers: [QuicknodeService],
  exports: [QuicknodeService],
})
export class QuicknodeModule {}
