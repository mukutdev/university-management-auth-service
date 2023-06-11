import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    app.listen(config.port, () => {
      logger.info(`university app listening on port ${config.port}`);
    });
    logger.info('Db Connected');
  } catch (error) {
    errorLogger.error('Failed to Connect Db', error);
  }

  process.on('unhandledRejection', error => {
    console.log('promptly server closing');
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
main();

process.on('SIGTERM', () => {
  logger.info('Sigterm received');
  if (server) {
    server.close();
  }
});
