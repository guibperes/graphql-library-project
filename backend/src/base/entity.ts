import { ObjectID } from 'mongodb';
import { ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
