import { CreatePresenterInput } from './dto/create-presenter.input';
import { UpdatePresenterInput } from './dto/update-presenter.input';
import { Presenter } from './schemas/presenter.schema';
export declare class PresenterService {
    create(createPresenterInput: CreatePresenterInput): Presenter;
    findAll(): Presenter[];
    findOne(id: number): Presenter;
    update(id: number, updatePresenterInput: UpdatePresenterInput): Presenter;
    remove(id: number): Presenter;
}
