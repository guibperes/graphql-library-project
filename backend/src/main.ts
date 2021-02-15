import 'reflect-metadata';

import { Server } from './server';

process.on('SIGINT', Server.shutdown);
process.on('SIGTERM', Server.shutdown);

Server.start();
