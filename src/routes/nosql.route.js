const fastifyPlugin = require("fastify-plugin");
const nosqlController = require("../controller/nosql.controller");
const upload = require("../middleware/multer");

const noSqlRoutes = async (server, options) => {
  server.route({
    method: "GET",
    url: "/nosql",
    handler: nosqlController.welcome,
  });
  server.route({
    method: "POST",
    url: "/upload",
    preHandler: upload.single("file"),
    handler: nosqlController.upload,
  });
};

module.exports = fastifyPlugin(noSqlRoutes);
