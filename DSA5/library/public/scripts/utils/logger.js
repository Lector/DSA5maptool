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
}

const LOGGER = new Logger();
