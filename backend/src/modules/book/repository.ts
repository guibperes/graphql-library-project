import { MongoRepository, EntityRepository } from 'typeorm';

import { Book } from './entity';

@EntityRepository(Book)
export class BookRepository extends MongoRepository<Book> {}
