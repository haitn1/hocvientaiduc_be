import { PresenterService } from './presenter.service';
import { CreatePresenterInput } from './dto/create-presenter.input';
import { UpdatePresenterInput } from './dto/update-presenter.input';
import { Presenter } from './schemas/presenter.schema';
export declare class PresenterResolver {
    private readonly presenterService;
    constructor(presenterService: PresenterService);
    create(createPresenterInput: CreatePresenterInput): Presenter;
    presenters(): Promise<Presenter[]>;
    presenter(id: number): Presenter;
    update(updatePresenterInput: UpdatePresenterInput): Presenter;
    remove(id: number): Presenter;
}
