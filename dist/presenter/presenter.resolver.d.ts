import { PresenterService } from './presenter.service';
import { CreatePresenterInput } from './dto/create-presenter.input';
import { UpdatePresenterInput } from './dto/update-presenter.input';
import { Presenter } from './schemas/presenter.schema';
export declare class PresenterResolver {
    private readonly presenterService;
    constructor(presenterService: PresenterService);
    create(createPresenterInput: CreatePresenterInput): Promise<Presenter & import("./entities/presenter.entity").PresenterEntity>;
    presenters(): Promise<import("./entities/presenter.entity").PresenterEntity[]>;
    presenter(id: number): Promise<import("./entities/presenter.entity").PresenterEntity>;
    update(updatePresenterInput: UpdatePresenterInput): Promise<{
        id: number;
        name: string;
    } & import("./entities/presenter.entity").PresenterEntity>;
    remove(id: number): Presenter;
}
