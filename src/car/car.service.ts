import { Injectable } from '@nestjs/common';
import { ApolloError } from 'apollo-server-express';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {
  private cars: Array<Car> = [
    {
      id: 1,
      model: 'Corsa Super',
      maintenances: [
        { id: 1, description: 'Arrumei o oleo' },
        { id: 2, description: 'arrumei o oleo pela segunda vez' },
      ],
    },
    {
      id: 2,
      model: 'Ecosport XLS',
      maintenances: [
        { id: 1, description: 'Arrumei o pneu' },
        { id: 2, description: 'arrumei o pneu pela segunda vez' },
      ],
    },
    {
      id: 3,
      model: 'Citroen C3',
      maintenances: [
        { id: 1, description: 'Arrumei o vidro' },
        { id: 2, description: 'arrumei o vidro pela segunda vez' },
      ],
    },
  ];
  create(createCarInput: CreateCarInput) {
    const carIndex = this.cars.findIndex((car) => car.id === createCarInput.id);
    if (carIndex >= 0) return new ApolloError('Carro já existe com esse id');
    this.cars.push(createCarInput);
    return createCarInput;
  }

  findAll() {
    return this.cars;
  }

  findOne(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (car) return car;
    else return new ApolloError('Carro não existe');
  }

  update(id: number, updateCarInput: UpdateCarInput) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex < 0) return new ApolloError('Carro não existe');

    this.cars[carIndex] = updateCarInput;

    return updateCarInput;
  }

  remove(id: number) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex < 0) return new ApolloError('Carro não existe');
    const car = this.cars[carIndex];
    this.cars.splice(carIndex, 1);
    return car;
  }
}
