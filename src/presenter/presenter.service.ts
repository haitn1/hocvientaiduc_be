import { Injectable } from '@nestjs/common';
import { CreatePresenterInput } from './dto/create-presenter.input';
import { UpdatePresenterInput } from './dto/update-presenter.input';
import { Presenter } from './schemas/presenter.schema';
import { PresenterPrepository } from './presenter.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { PresenterEntity } from './entities/presenter.entity';

@Injectable()
export class PresenterService {
  constructor(
    @InjectRepository(PresenterEntity)
    private readonly presenterRepo : PresenterPrepository,
  ){
    
  }
  async create(createPresenterInput: CreatePresenterInput) {
    const pre =  new Presenter();
    pre.id = createPresenterInput.id;
    pre.name = createPresenterInput.name;
    pre.created = new Date();
    pre.updated = new Date();
    return await this.presenterRepo.save(pre);
  }

  async findAll() {
    return await this.presenterRepo.find();
  }
  async findOne(id: number) {
    return await this.presenterRepo.findOneBy({id:id});
  }

  async update(id: number, updatePresenterInput: UpdatePresenterInput) {   
    return  await this.presenterRepo.save({
      id : id,
      name : updatePresenterInput.name
    });
  }

  remove(id: number) {
    const pre =  new Presenter();
    pre.id = 1;
    pre.name = "admin";
    return pre;
  }
}
