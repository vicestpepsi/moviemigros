import { ApiProperty } from "@nestjs/swagger";

export class UpdateMoviesDto {
  @ApiProperty({ description: 'Name of the movie', example: 'Updated Movie Title' })
  readonly title: string;

  @ApiProperty({ description: 'Rating out of 5', example: 4 })
  readonly rating: number;

  @ApiProperty({ description: 'Genre of the movie', example: 'Updated Genre' })
  readonly genre: string;
}
