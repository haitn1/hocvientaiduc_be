import { Injectable } from '@nestjs/common';
import { CreatePresenterInput } from './dto/create-presenter.input';
import { UpdatePresenterInput } from './dto/update-presenter.input';
import { Presenter } from './schemas/presenter.schema';

@Injectable()
export class PresenterService {
  create(createPresenterInput: CreatePresenterInput) {
    const pre =  new Presenter();
    pre.id = createPresenterInput.id;
    pre.name = createPresenterInput.name;
    return pre;
  }

  findAll() {
    const pre =  new Presenter();
    pre.id = 1;
    pre.name = "admin";
    return [pre,pre];
  }
  findOne(id: number) {
    const pre =  new Presenter();
    pre.id = 1;
    pre.name = "admin";
    return pre;
  }

  update(id: number, updatePresenterInput: UpdatePresenterInput) {
    const pre =  new Presenter();
    pre.id = 1;
    pre.name = "admin";
    return pre;
  }

  remove(id: number) {
    const pre =  new Presenter();
    pre.id = 1;
    pre.name = "admin";
    return pre;
  }
}
