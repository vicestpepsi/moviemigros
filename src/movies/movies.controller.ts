// src/movies/movies.controller.ts

import { Body, Controller, Get, Param, Post, Delete, Put } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMoviesDto } from "./dto/update-movie.dto";


@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post('create')
  async create(@Body() createMovieDto: CreateMovieDto) {
    return await this.moviesService.create(createMovieDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @Get()
  findAll(){
    return this.moviesService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMoviesDto: UpdateMoviesDto) {
    return this.moviesService.update(id, updateMoviesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
