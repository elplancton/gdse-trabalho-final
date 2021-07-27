import { Injectable } from '@nestjs/common';
import { CreateMaintenanceInput } from './dto/create-maintenance.input';
import { UpdateMaintenanceInput } from './dto/update-maintenance.input';
import { Maintenance } from './entities/maintenance.entity';

@Injectable()
export class MaintenanceService {
  create(createMaintenanceInput: CreateMaintenanceInput) {
    return 'This action adds a new maintenance';
  }

  findAll() {
    return `This action returns all maintenance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} maintenance`;
  }

  update(id: number, updateMaintenanceInput: UpdateMaintenanceInput) {
    return `This action updates a #${id} maintenance`;
  }

  remove(id: number) {
    return `This action removes a #${id} maintenance`;
  }
}
