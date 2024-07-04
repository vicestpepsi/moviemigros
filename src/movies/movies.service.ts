// src/movies/movies.service.ts

import { Injectable } from "@nestjs/common";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMoviesDto } from "./dto/update-movie.dto";
import { Movie } from "./entities/movie.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const newMovie = this.movieRepository.create(createMovieDto);
    return await this.movieRepository.save(newMovie);
  }

  async findOne(id: string) {
    return 'This is to find one'
  }

  async findAll(): Promise<Movie[]> {
    return await this.movieRepository.find();
  }

  async update(id: string, updateMovieDto: UpdateMoviesDto) {
    return 'This is to update :)'
  }

  async remove(id: string): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
