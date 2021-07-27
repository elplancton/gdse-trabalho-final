import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateMaintenanceInput } from 'src/maintenance/dto/create-maintenance.input';

@InputType()
export class CreateCarInput {
  @Field(() => Int, { description: 'Id do carro' })
  id: number;

  @Field({ description: 'Modelo do carro' })
  model: string;

  @Field(() => [CreateMaintenanceInput])
  maintenances: Array<CreateMaintenanceInput>;
}
