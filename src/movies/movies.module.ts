import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movie } from '../movies/entities/movie.entity'; // Adjust the path as per your project structure

@Module({
  imports: [TypeOrmModule.forFeature([Movie])], // Import Movie entity
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
