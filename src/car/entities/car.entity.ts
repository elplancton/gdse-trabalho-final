import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Maintenance } from 'src/maintenance/entities/maintenance.entity';

@ObjectType()
export class Car {
  @Field(() => Int, { description: 'Id do carro' })
  id: number;

  @Field({ description: 'Modelo do carro' })
  model: string;

  @Field(() => [Maintenance], { nullable: true })
  maintenances?: Array<Maintenance>;
}
