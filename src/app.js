import express from "express";

class App {
    constructor() {
        this.server = express();
    }
}

export default new App().server;
