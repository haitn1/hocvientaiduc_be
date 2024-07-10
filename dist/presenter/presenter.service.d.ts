import { CreatePresenterInput } from './dto/create-presenter.input';
import { UpdatePresenterInput } from './dto/update-presenter.input';
import { Presenter } from './schemas/presenter.schema';
import { PresenterPrepository } from './presenter.repository';
import { PresenterEntity } from './entities/presenter.entity';
export declare class PresenterService {
    private readonly presenterRepo;
    constructor(presenterRepo: PresenterPrepository);
    create(createPresenterInput: CreatePresenterInput): Promise<Presenter & PresenterEntity>;
    findAll(): Promise<PresenterEntity[]>;
    findOne(id: number): Promise<PresenterEntity>;
    update(id: number, updatePresenterInput: UpdatePresenterInput): Promise<{
        id: number;
        name: string;
    } & PresenterEntity>;
    remove(id: number): Presenter;
}
