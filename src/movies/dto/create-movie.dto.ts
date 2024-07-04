import { ApiProperty } from "@nestjs/swagger";
import * as string_decoder from "node:string_decoder";

export class CreateMovieDto {
  @ApiProperty({ description: 'Name of the movie', example: 'La La Land' })
  readonly title: string;

  @ApiProperty({ description: 'Rating out of 5', example: '3' })
  readonly rating: number;

  @ApiProperty({ description: 'Genre of the movie', example: 'Horror' })
  readonly genre: string;
}