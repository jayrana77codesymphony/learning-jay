import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';
import { createCityDto, updateCityDto } from './city.dto';

@Injectable()
export class CityService {
  constructor(@InjectRepository(City) private cityRepository: Repository<City>) {}

  findAll() {
    return this.cityRepository.find();
  }

  findOne(id: number) {
    return this.cityRepository.findOne({where: { id }});
  }

  create(createCityDto: createCityDto) {
    const city = this.cityRepository.create(createCityDto);
    return this.cityRepository.save(city);
  }

  async update(id: number, updateCityDto: updateCityDto) {
    await this.cityRepository.update(id, updateCityDto);
    return this.cityRepository.findOneBy({ id });
  }

  delete(id: number) {
    return this.cityRepository.delete(id);
  }
}
