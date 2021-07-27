import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MaintenanceService } from './maintenance.service';
import { Maintenance } from './entities/maintenance.entity';
import { CreateMaintenanceInput } from './dto/create-maintenance.input';
import { UpdateMaintenanceInput } from './dto/update-maintenance.input';

@Resolver(() => Maintenance)
export class MaintenanceResolver {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  // @Mutation(() => Maintenance)
  // createMaintenance(@Args('createMaintenanceInput') createMaintenanceInput: CreateMaintenanceInput) {
  //   return this.maintenanceService.create(createMaintenanceInput);
  // }

  // @Query(() => [Maintenance], { name: 'maintenance' })
  // findAll() {
  //   return this.maintenanceService.findAll();
  // }

  // @Query(() => Maintenance, { name: 'maintenance' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.maintenanceService.findOne(id);
  // }

  // @Mutation(() => Maintenance)
  // updateMaintenance(@Args('updateMaintenanceInput') updateMaintenanceInput: UpdateMaintenanceInput) {
  //   return this.maintenanceService.update(updateMaintenanceInput.id, updateMaintenanceInput);
  // }

  // @Mutation(() => Maintenance)
  // removeMaintenance(@Args('id', { type: () => Int }) id: number) {
  //   return this.maintenanceService.remove(id);
  // }
}
