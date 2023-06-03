import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.db_url as string)
    app.listen(config.port, () => {
      logger.info(`university app listening on port ${config.port}`)
    })
    logger.info('Db Connected')
  } catch (error) {
    errorLogger.error('Failed to Connect Db', error)
  }
}

main()
