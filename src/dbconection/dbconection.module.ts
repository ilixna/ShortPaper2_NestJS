import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'bd.sqlite',
        entities: [],
        synchronize: true,
    })],
  controllers: [],
  providers: [],
})
export class DbconectionModule {}
