class Logger {
  init() {
    console.log("Location Href", window.location.href);
    console.log("Location Hash", window.location.hash);
    console.log("Location origin", window.location.origin);
    console.log("Location path", window.location.pathname);
  }

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
