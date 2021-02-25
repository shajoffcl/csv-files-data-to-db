const fastify = require("fastify");
const noSqlRoutes = require('./routes/nosql.route');
const mongoDB = require('./config/nosql.db');
const sqlRoutes = require('./routes/sql.route');
const multer = require('fastify-multer');

const createServer = async () => {

  const server = fastify({
    logger: {
      prettyPrint: true,
    },
  });

  await server.register(mongoDB);
  await server.register(multer.contentParser);
  await server.register(noSqlRoutes);
  await server.register(sqlRoutes);

  server.get("/", async (req, reply) => {
    return "Welcome, server start successfully.";
  });

  server.setErrorHandler((error, req, reply) => {
    req.log.error(error.toString());
    reply.send(error);
  });

  return server;
};

module.exports = createServer;
