const winston = require(`winston`);

const { printf } = winston.format;
const fileLineFormat = printf(({ level, message, timestamp }) => `${timestamp} [${level.toUpperCase()}]: ${message}`);
const filename = `logs/${new Date().toISOString().replace(/:/g, '-')}.log`;

const log = winston.createLogger({
    transports: [
      new winston.transports.Console({
        level: 'info',
        format: winston.format.cli(),
      }),
      new winston.transports.File({
        filename,
        level: 'debug',
        format: winston.format.combine(winston.format.timestamp(), fileLineFormat),
      }),
    ],
  });
  
  module.exports = log;