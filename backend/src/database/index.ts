import { ConnectionManager, Connection, ObjectType } from 'typeorm';

import { logger } from '../libs';
import { entities } from './entities';

const manager = new ConnectionManager();

const createConnection = (url: string): Connection =>
  manager.create({
    type: 'mongodb',
    synchronize: false,
    useUnifiedTopology: true,
    url,
    entities,
  });

const getConnection = (): Connection => manager.get();

const connect = async () => {
  try {
    const connection = getConnection();
    await connection.connect();

    logger.info('Connected on database');
  } catch (error) {
    logger.error('Cannot connect on database');
    logger.error(error);

    process.exit(1);
  }
};

const disconnect = async () => {
  try {
    const connection = getConnection();
    await connection.close();

    logger.info('Disconnected on database');
  } catch (error) {
    logger.error('Cannot disconnect on database');
    logger.error(error);

    process.exit(1);
  }
};

const getRepository = <T>(entityType: ObjectType<T>) =>
  getConnection().getCustomRepository(entityType);

export const Database = {
  createConnection,
  getConnection,
  connect,
  disconnect,
  getRepository,
};
