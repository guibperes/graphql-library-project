import { ObjectID } from 'mongodb';
import { Length, Min } from 'class-validator';

import { IdParam } from '../../../base';

export class BookUpdateDTO {
  @Length(24, 24)
  id!: ObjectID;

  @Length(3, 100)
  title!: String;

  @Length(3, 255)
  description!: String;

  @Min(1)
  pages!: Number;

  static of(body: IdParam): BookUpdateDTO {
    const bodyWithObjectID = {
      ...body,
      id: new ObjectID(body.id),
    };

    return Object.assign({} as BookUpdateDTO, bodyWithObjectID);
  }
}
