import { EntitySchema } from 'typeorm';

import { Book } from '../modules';

export const entities: string[] | Function[] | EntitySchema<any>[] = [Book];
