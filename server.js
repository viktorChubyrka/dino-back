const http = require("http");

const config = require("./config");
const dbConnect = require("./db");


(async () => {
  const app = require("./app");
  dbConnect.dbConnect();
 
  const httpServer = http.createServer(app);

  httpServer.listen(process.env.PORT || config.HOST);
  console.log(`App listen ${process.env.PORT}`);
})();
