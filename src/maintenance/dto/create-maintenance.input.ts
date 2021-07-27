import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMaintenanceInput {
  @Field(() => Int, { description: 'Id da manutenção' })
  id: number;

  @Field({ description: 'Descrição da manutenção' })
  description: string;
}
