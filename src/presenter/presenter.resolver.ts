import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PresenterService } from './presenter.service';
import { CreatePresenterInput } from './dto/create-presenter.input';
import { UpdatePresenterInput } from './dto/update-presenter.input';
import { Presenter } from './schemas/presenter.schema';

@Resolver('Presenter')
export class PresenterResolver {
  constructor(private readonly presenterService: PresenterService) {}

  @Mutation('createPresenter')
  create(@Args('createPresenterInput') createPresenterInput: CreatePresenterInput) {
    return this.presenterService.create(createPresenterInput);
  }

  @Query(()=>[Presenter])
 async presenters() {
    return this.presenterService.findAll();
  }

  @Query(()=>Presenter)
  presenter(@Args('id') id: number) {
    return this.presenterService.findOne(id);
  }

  @Mutation('updatePresenter')
  update(@Args('updatePresenterInput') updatePresenterInput: UpdatePresenterInput) {
    return this.presenterService.update(updatePresenterInput.id, updatePresenterInput);
  }

  @Mutation('removePresenter')
  remove(@Args('id') id: number) {
    return this.presenterService.remove(id);
  }
}
