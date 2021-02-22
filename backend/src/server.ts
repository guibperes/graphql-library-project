import http from 'http';
import express from 'express';
import 'express-async-errors';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';

import { Env } from './env';
import { Database } from './database';
import { logger, loggerMiddleware, GraphQL } from './libs';
import { resolvers } from './resolvers';

const schema = GraphQL.buildSchema([__dirname, 'schema.graphql']);

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(loggerMiddleware);
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: !Env.IS_PRODUCTION,
  })
);

const start = async () => {
  try {
    logger.info('Startup process started');

    Database.createConnection(Env.MONGODB_URL);
    await Database.connect();

    server.listen(4000, () => logger.info('Server is running on port 4000'));
  } catch (error) {
    logger.error('Startup process failed');
    logger.error(error);

    process.exit(1);
  }
};

const shutdown = async () => {
  try {
    logger.info('Shutdown process started');

    await Database.disconnect();
    server.close();
    logger.info('Server is closed');

    process.exit(0);
  } catch (error) {
    logger.error('Shutdown process failed');
    logger.error(error);

    process.exit(1);
  }
};

export const Server = { start, shutdown };
