import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CityService } from './city.service';
import { createCityDto, updateCityDto } from './city.dto';

@Controller('city')
export class CityController {
  constructor(private cityService: CityService) {}

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cityService.findOne(id);
  }

  @Post()
  create(@Body() createCityDto: createCityDto) {
    return this.cityService.create(createCityDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCityDto: updateCityDto) {
    return this.cityService.update(id, updateCityDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.cityService.delete(id);
  }
}
