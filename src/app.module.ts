import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Movie } from "./movies/entities/movie.entity"
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "emir",
      password: "emir123",
      database: "product-service",
      entities: [Movie],
      synchronize: true
    }),
    MoviesModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
