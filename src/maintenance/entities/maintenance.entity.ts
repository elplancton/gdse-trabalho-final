import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Maintenance {
  @Field(() => Int, { description: 'Id da manutenção' })
  id: number;

  @Field({ description: 'Descrição da manutenção' })
  description: string;
}
