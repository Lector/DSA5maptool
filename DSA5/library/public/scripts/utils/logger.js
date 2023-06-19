class Logger {
  log(...args) {
    if (DEBUG) {
      console.log(args);
    }
  }

  // logError ignores DEBUG flag so that errors are always visible
  logError(...args) {
    console.log(args);
  }
}

const LOGGER = new Logger();
