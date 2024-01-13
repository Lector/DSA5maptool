class Logger {
  log(...args) {
    console.log(args);
  }

  // logError ignores DEBUG flag so that errors are always visible
  logError(...args) {
    console.log(args);
  }
}
export default new Logger();
