const cors = require("cors");
const express = require("express");
const { logError, returnError } = require("../utils/errorHandler");

class Server {
  constructor() {
    this.app = express();
    this.port = 2000;
    this.paths = {
      home: "/",
    };
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  //bind controllers to routes
  routes() {
    this.app.use(this.paths.home, require("../routes/pokemon"));

    //handling error

    // if the Promise is rejected this will catch it
    process.on("unhandledRejection", (error) => {
      throw error;
    });

    process.on("uncaughtException", (error) => {
      logError(error);

      if (!isOperationalError(error)) {
        process.exit(1);
      }
    });

    this.app.use(logError);
    this.app.use(returnError);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
