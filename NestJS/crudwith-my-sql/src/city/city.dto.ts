import { PartialType } from '@nestjs/mapped-types';

export class createCityDto {
  cityName: string;
  state: string;
}

export class updateCityDto extends PartialType(createCityDto) {}
