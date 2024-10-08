const app = require(`./app`);
const httpServer = require("http").createServer(app);
const port = 3001; //port of communication
const hostname='0.0.0.0'

const server = httpServer.listen(port,hostname, () => {
    console.log(`Server running on port ${port}`);
  });