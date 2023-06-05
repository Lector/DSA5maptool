class Logger {
  log(...args) {
    if (DEBUG) {
      console.log(args);
    }
  }

  logError(...args) {
    if (DEBUG) {
      console.error(args);
    }
  }
}

const LOGGER = new Logger();
