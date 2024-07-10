import { CreatePresenterInput } from './create-presenter.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePresenterInput extends PartialType(CreatePresenterInput) {
  id: number;
}
